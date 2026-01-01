import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useAuth } from '../../context/AuthContext';

const menuItems = [
  { path: '/admin', icon: 'fa-solid:chart-pie', label: 'Dashboard', exact: true },
  { path: '/admin/brands', icon: 'fa-solid:building', label: 'Trusted Brands' },
  { path: '/admin/testimonials', icon: 'fa-solid:comments', label: 'Testimonials' },
  { path: '/admin/blog', icon: 'fa-solid:newspaper', label: 'Blog Posts' },
];

export default function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 min-h-screen border-r flex flex-col" style={{ backgroundColor: 'var(--bg-footer)', borderColor: 'rgba(255,255,255,0.1)' }}>
      {/* Logo */}
      <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <Link to="/admin" className="flex items-center gap-3">
          <Icon icon="fa-solid:truck-fast" className="text-xl" style={{ color: 'var(--primary-red)' }} />
          <span className="text-lg font-bold" style={{ color: 'var(--primary-red)' }}>TD Admin</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: isActive(item.path, item.exact) ? 'var(--primary-red)' : 'transparent',
                  color: isActive(item.path, item.exact) ? 'white' : 'rgba(255,255,255,0.7)',
                }}
              >
                <Icon icon={item.icon} className="text-base" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Back to Site & Logout */}
      <div className="p-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-white/10"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          <Icon icon="fa-solid:external-link-alt" className="text-base" />
          <span className="text-sm font-medium">View Website</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-white/10 mt-2"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          <Icon icon="fa-solid:sign-out-alt" className="text-base" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}

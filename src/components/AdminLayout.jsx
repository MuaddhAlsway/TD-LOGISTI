import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const navItems = [
  { path: '/admin', icon: 'fa-solid:tachometer-alt', label: 'Dashboard' },
  { path: '/admin/blog', icon: 'fa-solid:newspaper', label: 'Blog Posts' },
  { path: '/admin/testimonials', icon: 'fa-solid:comments', label: 'Testimonials' },
  { path: '/admin/brands', icon: 'fa-solid:building', label: 'Brands' },
];

export default function AdminLayout({ children, title, subtitle, action }) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col" style={{ borderColor: 'var(--border-default)' }}>
        {/* Logo */}
        <div className="p-6 border-b" style={{ borderColor: 'var(--border-default)' }}>
          <Link to="/admin" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: 'var(--primary-red)' }}>
              <Icon icon="fa-solid:truck-fast" className="text-lg text-white" />
            </div>
            <div>
              <span className="font-bold text-primary">TD Logistics</span>
              <p className="text-xs text-secondary">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive ? 'text-white' : 'text-secondary hover:bg-gray hover:text-primary'
                    }`}
                    style={isActive ? { backgroundColor: 'var(--primary-red)' } : {}}
                  >
                    <Icon icon={item.icon} className="text-lg" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-secondary hover:bg-gray hover:text-primary transition-colors"
          >
            <Icon icon="fa-solid:external-link-alt" className="text-lg" />
            <span className="font-medium">View Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-8 py-6" style={{ borderColor: 'var(--border-default)' }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">{title}</h1>
              {subtitle && <p className="text-secondary mt-1">{subtitle}</p>}
            </div>
            {action}
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex justify-between items-center w-full px-8 py-4 bg-white border-b" style={{ borderColor: 'var(--border-default)' }}>
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="flex justify-center items-center w-8 h-8">
          <Icon icon="fa-solid:truck-fast" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
        </div>
        <span className="text-xl tracking-wide font-bold" style={{ color: 'var(--primary-red)' }}>TD LOGISTICS</span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <Link
          to="/"
          className={`text-base font-medium transition-colors ${
            isActive('/') ? 'text-link' : 'text-primary hover:text-link'
          }`}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={`text-base font-medium transition-colors ${
            isActive('/services') ? 'text-link' : 'text-primary hover:text-link'
          }`}
        >
          Services
        </Link>
        <Link
          to="/partners"
          className={`text-base font-medium transition-colors ${
            isActive('/partners') ? 'text-link' : 'text-primary hover:text-link'
          }`}
        >
          Sales & Partnerships
        </Link>
        <Link
          to="/blog"
          className={`text-base font-medium transition-colors ${
            isActive('/blog') ? 'text-link' : 'text-primary hover:text-link'
          }`}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className={`text-base font-medium transition-colors ${
            isActive('/contact') ? 'text-link' : 'text-primary hover:text-link'
          }`}
        >
          Support
        </Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="btn-secondary"
          style={{ fontSize: 'var(--font-sm)', padding: 'var(--space-2) var(--space-4)' }}
        >
          Client Login
        </Link>
        <Link
          to="/partners/quote"
          className="btn-primary"
          style={{ fontSize: 'var(--font-base)', padding: 'var(--space-3) var(--space-6)' }}
        >
          Get Quote
        </Link>
      </div>
    </header>
  );
}

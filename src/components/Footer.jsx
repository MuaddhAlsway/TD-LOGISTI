import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="w-full section-dark" style={{ backgroundColor: 'var(--bg-footer)', padding: 'var(--space-12) var(--space-8)' }}>
      <div className="container">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="fa-solid:truck-fast" className="text-xl" style={{ color: 'var(--primary-red)' }} />
              <span className="text-lg tracking-wide font-bold" style={{ color: 'var(--primary-red)' }}>TD LOGISTICS</span>
            </div>
            <p className="text-sm text-on-dark-secondary">
              Saudi Arabia's trusted logistics partner for reliable, secure, and efficient delivery solutions.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-on-dark mb-2">Services</h4>
            <Link to="/services/last-mile" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Last-Mile Delivery
            </Link>
            <Link to="/services/ecommerce" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              E-commerce Solutions
            </Link>
            <Link to="/services/customized" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Customized Delivery
            </Link>
            <Link to="/services/technology" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Technology Features
            </Link>
          </div>

          {/* Partners */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-on-dark mb-2">Partners</h4>
            <Link to="/partners" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Request a Quote
            </Link>
            <a href="#clients" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Our Clients
            </a>
            <a href="#join" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Become a Partner
            </a>
            <a href="#careers" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Careers
            </a>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-on-dark mb-2">Support</h4>
            <Link to="/contact" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Customer Service
            </Link>
            <a href="#locations" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Our Locations
            </a>
            <Link to="/blog" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Blog
            </Link>
            <a href="#about" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              About Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <p className="text-sm text-on-dark-secondary">
            © 2024 TD Logistics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-on-dark-secondary hover:text-on-dark transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { images } from '../../config/images';

export default function TechnologyPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold text-primary">
                Advanced <span style={{ color: 'var(--primary-red)' }}>Technology Features</span>
              </h1>
              <p className="text-lg text-secondary">
                Real-time tracking, API integration, and advanced analytics to give you complete visibility and control over your shipments.
              </p>
              <Link to="/partners" className="btn-primary" style={{ width: 'fit-content' }}>
                Get Started
                <Icon icon="fa-solid:arrow-right" className="text-base" />
              </Link>
            </div>
            <img
              src={images.heroTruck}
              alt="Technology features"
              className="w-full rounded-lg shadow-strong"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Real-Time GPS Tracking */}
      <section className="section section-gray">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-primary">Real-Time GPS Tracking</h2>
              <p className="text-lg text-secondary">
                Track every shipment in real-time with live GPS coordinates, route optimization, and detailed delivery status updates.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'Live GPS location tracking',
                  'Route optimization and ETA',
                  'Delivery proof with photos',
                  'Customer notifications',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="check-icon-box">
                      <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                    </div>
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={images.warehouse}
              alt="GPS Tracking"
              className="w-full rounded-lg shadow-moderate"
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* RESTful API Integration */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <img
              src={images.heroTruck}
              alt="API Integration"
              className="w-full rounded-lg shadow-moderate"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-primary">RESTful API Integration</h2>
              <p className="text-lg text-secondary">
                Seamlessly integrate our logistics platform with your existing systems using our comprehensive REST API.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'Complete API documentation',
                  'Webhook support for real-time events',
                  'Multiple authentication methods',
                  'Rate limiting and error handling',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="check-icon-box">
                      <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                    </div>
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Intelligence Dashboard */}
      <section className="section section-gray">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-primary">Business Intelligence Dashboard</h2>
              <p className="text-lg text-secondary">
                Comprehensive analytics dashboard with customizable reports and real-time insights into your logistics operations.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'Customizable dashboards',
                  'Real-time KPI monitoring',
                  'Exportable reports',
                  'Predictive analytics',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="check-icon-box">
                      <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                    </div>
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={images.warehouse}
              alt="Dashboard"
              className="w-full rounded-lg shadow-moderate"
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Smart Notification System */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <img
              src={images.heroTruck}
              alt="Notifications"
              className="w-full rounded-lg shadow-moderate"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-primary">Smart Notification System</h2>
              <p className="text-lg text-secondary">
                Intelligent notifications keep you and your customers informed at every step of the delivery journey.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'SMS and email notifications',
                  'Push notifications for mobile app',
                  'Customizable alert rules',
                  'Multi-language support',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="check-icon-box">
                      <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                    </div>
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Platform Integrations</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: 'E-commerce', platforms: ['Shopify', 'WooCommerce', 'Magento'] },
              { name: 'ERP Systems', platforms: ['SAP', 'Oracle', 'NetSuite'] },
              { name: 'Marketplaces', platforms: ['Amazon', 'Noon', 'Zando'] },
            ].map((category, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg font-semibold text-primary mb-4">{category.name}</h3>
                <ul className="flex flex-col gap-2">
                  {category.platforms.map((platform, i) => (
                    <li key={i} className="flex items-center gap-2 text-secondary">
                      <div className="check-icon-box">
                        <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                      </div>
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Reliability */}
      <section className="section section-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Security & Reliability</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: 'fa-solid:lock', title: 'Enterprise Security', desc: 'SSL encryption, data protection, and compliance with international standards' },
              { icon: 'fa-solid:shield-alt', title: 'Data Privacy', desc: 'GDPR compliant, secure data storage, and regular security audits' },
              { icon: 'fa-solid:server', title: '99.9% Uptime', desc: 'Redundant servers, automatic failover, and disaster recovery' },
              { icon: 'fa-solid:sync', title: 'Real-Time Sync', desc: 'Continuous data synchronization and backup systems' },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex justify-center items-center w-12 h-12 p-3 bg-primary-red-light rounded-lg">
                    <Icon icon={item.icon} className="text-xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                </div>
                <p className="text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark" style={{ backgroundColor: 'var(--primary-red)' }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-on-dark mb-4">Experience the Future of Logistics</h2>
          <p className="text-lg text-on-dark-secondary max-w-2xl mx-auto mb-8">
            Leverage our advanced technology platform to optimize your logistics operations.
          </p>
          <Link to="/partners" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-red)', justifyContent: 'center' }}>
            Get Started Today
            <Icon icon="fa-solid:arrow-right" className="text-base" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { images } from '../../config/images';

export default function EcommercePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold text-primary">
                Complete <span style={{ color: 'var(--primary-red)' }}>E-commerce Solutions</span>
              </h1>
              <p className="text-lg text-secondary">COD collection, returns management, and seamless e-commerce integration to streamline your online business operations.</p>
              <Link to="/partners" className="btn-primary" style={{ width: 'fit-content' }}>
                Get Started
                <Icon icon="fa-solid:arrow-right" className="text-base" />
              </Link>
            </div>
            <img src={images.warehouse} alt="E-commerce solutions" className="w-full rounded-lg shadow-strong" style={{ height: '500px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our E-commerce Services</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: 'fa-solid:credit-card', title: 'COD Collection', desc: 'Secure cash collection with automated reconciliation' },
              { icon: 'fa-solid:undo', title: 'Returns Management', desc: 'Hassle-free returns processing and restocking' },
              { icon: 'fa-solid:plug', title: 'API Integration', desc: 'Seamless integration with your e-commerce platform' },
            ].map((service, idx) => (
              <div key={idx} className="card">
                <div className="flex justify-center items-center w-12 h-12 p-3 bg-primary-red-light rounded-lg mb-4">
                  <Icon icon={service.icon} className="text-xl" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-secondary">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COD Collection */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-primary">Cash on Delivery (COD) Collection</h2>
              <p className="text-lg text-secondary">Our secure COD collection service handles all cash transactions with complete transparency and automated reconciliation.</p>
              <div className="flex flex-col gap-4">
                {['Secure cash handling and verification', 'Automated daily reconciliation', 'Real-time payment tracking', 'Multiple payment method support'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="check-icon-box">
                      <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                    </div>
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <img src={images.warehouse} alt="COD Collection" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Returns Management */}
      <section className="section section-gray">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <img src={images.heroTruck} alt="Returns Management" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-primary">Hassle-Free Returns Management</h2>
              <p className="text-lg text-secondary">Streamline your returns process with our comprehensive returns management system that handles everything from pickup to restocking.</p>
              <div className="flex flex-col gap-4">
                {['Automated return request processing', 'Quick pickup scheduling', 'Condition assessment and documentation', 'Inventory restocking support'].map((feature, idx) => (
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

      {/* Platform Integration */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-primary">Seamless Platform Integration</h2>
              <p className="text-lg text-secondary">Connect your e-commerce platform directly to our system for real-time order management and automated fulfillment.</p>
              <div className="flex flex-col gap-4">
                {['Direct API integration', 'Real-time order synchronization', 'Automated shipment tracking', 'Inventory management sync'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="check-icon-box">
                      <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                    </div>
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <img src={images.warehouse} alt="Platform Integration" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Advanced Analytics & Reporting</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              { metric: 'Sales Analytics', desc: 'Track sales performance and customer trends' },
              { metric: 'Delivery Metrics', desc: 'Monitor delivery performance and KPIs' },
              { metric: 'Financial Reports', desc: 'Detailed revenue and cost analysis' },
              { metric: 'Customer Insights', desc: 'Understand customer behavior and preferences' },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg font-semibold text-primary mb-2">{item.metric}</h3>
                <p className="text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark" style={{ backgroundColor: 'var(--primary-red)' }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-on-dark mb-4">Boost Your E-commerce Growth</h2>
          <p className="text-lg text-on-dark-secondary max-w-2xl mx-auto mb-8">Let us handle logistics while you focus on growing your business.</p>
          <Link to="/partners" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-red)', justifyContent: 'center' }}>
            Get Started Today
            <Icon icon="fa-solid:arrow-right" className="text-base" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { images } from '../config/images';

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Complete Logistics Solutions for <span style={{ color: 'var(--primary-red)' }}>Saudi Arabia</span>
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              From last-mile delivery to comprehensive e-commerce fulfillment, TD Logistics provides the reliable, technology-enabled services your business needs to succeed in the Saudi market.
            </p>
          </div>

          {/* Service Navigation Cards */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'fa-solid:truck-fast', title: 'Last-Mile Delivery', href: '/services/last-mile' },
              { icon: 'fa-solid:credit-card', title: 'E-commerce Solutions', href: '/services/ecommerce' },
              { icon: 'fa-solid:cogs', title: 'Customized Delivery', href: '/services/customized' },
              { icon: 'fa-solid:chart-line', title: 'Technology Features', href: '/services/technology' },
            ].map((service, idx) => (
              <Link key={idx} to={service.href} className="card hover:shadow-moderate">
                <div className="flex justify-center items-center w-12 h-12 p-3 bg-primary-red-light rounded-sm mb-4">
                  <Icon icon={service.icon} className="text-xl" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                <div className="flex items-center gap-2 font-semibold text-link transition-colors">
                  <span className="text-sm">Learn More</span>
                  <Icon icon="fa-solid:arrow-right" className="text-sm" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-6">
              <Link to="/partners" className="btn-primary" style={{ fontSize: 'var(--font-lg)', padding: 'var(--space-4) var(--space-8)' }}>
                Partner With Us
                <Icon icon="fa-solid:arrow-right" className="text-base ml-2" />
              </Link>
              <Link to="/contact" className="btn-text" style={{ fontSize: 'var(--font-lg)' }}>
                Contact Sales
                <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section section-gray">
        <div className="container">
          {/* Last-Mile Delivery */}
          <div id="last-mile" className="mb-20">
            <div className="grid grid-cols-2 items-center gap-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg">
                    <Icon icon="fa-solid:truck-fast" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Last-Mile Delivery</h2>
                </div>
                <p className="text-lg text-secondary mb-6">Fast, reliable delivery to your customers' doorsteps across Saudi Arabia with real-time tracking and flexible delivery options.</p>
                <div className="flex flex-col gap-4 mb-8">
                  {['Same-day and next-day delivery options', 'Real-time GPS tracking and notifications', 'Flexible delivery time slots', 'Professional uniformed delivery team'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="check-icon-box">
                        <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                      </div>
                      <span className="text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/services/last-mile" className="btn-text">
                  View Detailed Service
                  <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
                </Link>
              </div>
              <div>
                <img src={images.heroTruck} alt="Last-mile delivery truck" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* E-commerce Solutions */}
          <div id="ecommerce" className="mb-20">
            <div className="grid grid-cols-2 items-center gap-16">
              <div>
                <img src={images.warehouse} alt="E-commerce warehouse" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg">
                    <Icon icon="fa-solid:credit-card" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">E-commerce Solutions</h2>
                </div>
                <p className="text-lg text-secondary mb-6">Complete COD collection, returns management, and e-commerce integration to streamline your online business operations.</p>
                <div className="flex flex-col gap-4 mb-8">
                  {['Cash on Delivery (COD) collection', 'Automated returns management', 'E-commerce platform integration', 'Inventory management support'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="check-icon-box">
                        <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                      </div>
                      <span className="text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/services/ecommerce" className="btn-text">
                  View Detailed Service
                  <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Customized Delivery */}
          <div id="customized" className="mb-20">
            <div className="grid grid-cols-2 items-center gap-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg">
                    <Icon icon="fa-solid:cogs" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Customized Delivery</h2>
                </div>
                <p className="text-lg text-secondary mb-6">Tailored logistics solutions designed for your specific business needs, from warehousing to specialized handling requirements.</p>
                <div className="flex flex-col gap-4 mb-8">
                  {['Custom delivery schedules', 'Specialized handling for fragile items', 'Warehousing and storage solutions', 'White-glove delivery service'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="check-icon-box">
                        <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                      </div>
                      <span className="text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/services/customized" className="btn-text">
                  View Detailed Service
                  <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
                </Link>
              </div>
              <div>
                <img src={images.warehouse} alt="Customized delivery" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Technology Features */}
          <div id="technology">
            <div className="grid grid-cols-2 items-center gap-16">
              <div>
                <img src={images.heroTruck} alt="Technology features" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg">
                    <Icon icon="fa-solid:chart-line" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Technology Features</h2>
                </div>
                <p className="text-lg text-secondary mb-6">Advanced tracking systems, API integration, and real-time analytics to give you complete visibility and control over your shipments.</p>
                <div className="flex flex-col gap-4 mb-8">
                  {['Real-time tracking dashboard', 'API integration for seamless connectivity', 'Advanced analytics and reporting', 'Mobile app for on-the-go management'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="check-icon-box">
                        <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                      </div>
                      <span className="text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/services/technology" className="btn-text">
                  View Detailed Service
                  <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose TD Logistics?</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">We're committed to delivering excellence in every aspect of our service.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: 'fa-solid:chart-line', title: 'Proven Track Record', desc: '99.2% on-time delivery rate with thousands of satisfied customers' },
              { icon: 'fa-solid:headset', title: '24/7 Support', desc: 'Dedicated customer support team available in Arabic and English' },
              { icon: 'fa-solid:lock', title: 'Secure & Insured', desc: 'Full insurance coverage and secure handling protocols' },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg mb-4">
                  <Icon icon={item.icon} className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark" style={{ backgroundColor: 'var(--primary-red)' }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-on-dark mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-on-dark-secondary max-w-2xl mx-auto mb-8">Join hundreds of businesses that trust TD Logistics for their delivery needs.</p>
          <Link to="/partners" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-red)', justifyContent: 'center' }}>
            Get Your Quote
            <Icon icon="fa-solid:arrow-right" className="text-base ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

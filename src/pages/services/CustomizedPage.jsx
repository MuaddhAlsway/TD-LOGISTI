import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { images } from '../../config/images';

export default function CustomizedPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section section-white" style={{ paddingTop: 'var(--space-24)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Customized Delivery Solutions{' '}
              <span style={{ color: 'var(--primary-red)' }}>Tailored for Your Business</span>
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              From temperature-controlled shipments to specialized handling requirements, TD Logistics creates flexible delivery solutions that adapt to your unique business needs across Saudi Arabia.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            {[
              { icon: 'fa-solid:thermometer-half', title: 'Temperature Control', desc: 'Refrigerated and climate-controlled delivery for pharmaceuticals, food items, and temperature-sensitive products.' },
              { icon: 'fa-solid:shield-alt', title: 'Specialized Handling', desc: 'Expert handling for fragile, high-value, or oversized items with custom packaging and security protocols.' },
              { icon: 'fa-solid:calendar-alt', title: 'Flexible Scheduling', desc: 'Custom delivery windows, recurring schedules, and priority handling to match your operational requirements.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg mx-auto mb-4">
                  <Icon icon={item.icon} className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="text-center" style={{ paddingTop: 'var(--space-24)' }}>
            <div className="flex justify-center items-center gap-6">
              <Link to="/partners" className="btn-primary" style={{ fontSize: 'var(--font-lg)', padding: 'var(--space-4) var(--space-8)' }}>
                Request Custom Quote
                <Icon icon="fa-solid:arrow-right" className="text-base" />
              </Link>
              <Link to="/contact" className="btn-text" style={{ fontSize: 'var(--font-lg)' }}>
                Speak to Specialist
                <Icon icon="fa-solid:arrow-right" className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Delivery Categories */}
      <section className="section section-gray" style={{ paddingTop: 'var(--space-24)' }}>
        <div className="container">
          <div className="text-center mb-16" style={{ paddingBottom: 'var(--space-8)' }}>
            <h2 className="text-3xl font-bold text-primary mb-4">Specialized Delivery Categories</h2>
            <p className="text-lg text-secondary">
              Comprehensive solutions designed for specific industry requirements and unique business challenges.
            </p>
          </div>

          {/* Temperature-Controlled Delivery */}
          <div className="mb-20">
            <div className="grid grid-cols-2 items-center gap-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg">
                    <Icon icon="fa-solid:thermometer-half" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Temperature-Controlled Delivery</h3>
                </div>
                <p className="text-lg text-secondary mb-6">
                  Maintain product integrity with precise temperature control throughout the entire delivery chain for pharmaceuticals, fresh foods, and sensitive materials.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {['Refrigerated vehicles (2°C to 8°C)', 'Frozen storage capability (-18°C to -25°C)', 'Real-time temperature monitoring', 'Cold chain compliance certification'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="check-icon-box">
                        <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                      </div>
                      <span className="text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img src={images.heroTruck} alt="Temperature-controlled delivery" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Fragile & High-Value Items */}
          <div className="mb-20">
            <div className="grid grid-cols-2 items-center gap-16">
              <img src={images.warehouse} alt="Fragile items handling" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg">
                    <Icon icon="fa-solid:gem" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Fragile & High-Value Items</h3>
                </div>
                <p className="text-lg text-secondary mb-6">
                  Expert handling and transport of delicate, valuable, or irreplaceable items with specialized packaging, trained personnel, and comprehensive insurance coverage.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {['Custom protective packaging solutions', 'Certified handling specialists', 'Full value insurance up to SAR 500,000', 'Priority delivery with real-time tracking'].map((feature, idx) => (
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

          {/* Bulk & B2B Solutions */}
          <div className="mb-20">
            <div className="grid grid-cols-2 items-center gap-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg">
                    <Icon icon="fa-solid:warehouse" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Bulk & B2B Solutions</h3>
                </div>
                <p className="text-lg text-secondary mb-6">
                  Streamlined logistics for business-to-business operations, including warehousing, inventory management, and scheduled bulk deliveries to multiple locations.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {['Multi-location delivery coordination', 'Flexible warehousing and fulfillment', 'Scheduled recurring deliveries', 'Volume-based pricing tiers'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="check-icon-box">
                        <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                      </div>
                      <span className="text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img src={images.heroTruck} alt="B2B delivery solutions" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
          </div>

          {/* White Glove Service */}
          <div>
            <div className="grid grid-cols-2 items-center gap-16">
              <img src={images.warehouse} alt="White glove service" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg">
                    <Icon icon="fa-solid:concierge-bell" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">White Glove Service</h3>
                </div>
                <p className="text-lg text-secondary mb-6">
                  Premium end-to-end service including indoor delivery, installation, setup, and packaging removal for furniture, appliances, and other specialized items.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {['Indoor delivery and placement', 'Professional assembly and installation', 'Packaging material removal', 'Appointment scheduling flexibility'].map((feature, idx) => (
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
        </div>
      </section>

      {/* How We Create Your Custom Solution */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-16" style={{ paddingBottom: 'var(--space-8)' }}>
            <h2 className="text-3xl font-bold text-primary mb-4">How We Create Your Custom Solution</h2>
            <p className="text-lg text-secondary">
              Our specialized team works closely with you to design and implement the perfect logistics solution for your unique requirements.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Requirements Analysis', desc: 'Detailed consultation to understand your specific delivery challenges, product requirements, and business objectives.' },
              { num: '2', title: 'Solution Design', desc: 'Custom logistics plan creation including specialized equipment, handling protocols, and delivery schedules.' },
              { num: '3', title: 'Testing & Refinement', desc: 'Pilot program implementation with performance monitoring and solution optimization based on real-world results.' },
              { num: '4', title: 'Full Deployment', desc: 'Complete solution rollout with dedicated account management and ongoing performance monitoring.' },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center items-center w-16 h-16 rounded-full mx-auto mb-6" style={{ backgroundColor: 'var(--primary-red)', color: 'white' }}>
                  <span className="text-xl font-bold">{step.num}</span>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3">{step.title}</h4>
                <p className="text-sm text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="section section-gray">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-secondary">
              Specialized logistics expertise tailored to the unique requirements of different industries across Saudi Arabia.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: 'fa-solid:heartbeat', title: 'Healthcare & Pharmaceuticals', features: ['Temperature-controlled transport', 'Regulatory compliance', 'Chain of custody tracking', 'Emergency delivery options'] },
              { icon: 'fa-solid:utensils', title: 'Food & Beverage', features: ['Cold chain logistics', 'SFDA compliance', 'Same-day fresh delivery', 'Inventory rotation management'] },
              { icon: 'fa-solid:couch', title: 'Furniture & Home Goods', features: ['White glove delivery', 'Assembly services', 'Room of choice placement', 'Old item removal'] },
            ].map((industry, idx) => (
              <div key={idx} className="card">
                <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg mb-6">
                  <Icon icon={industry.icon} className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-4">{industry.title}</h4>
                <ul className="flex flex-col gap-3">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-secondary">
                      <Icon icon="fa-solid:check" className="text-sm" style={{ color: 'var(--success-default)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark" style={{ backgroundColor: 'var(--primary-red)' }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-on-dark mb-4">Let's Build Your Custom Solution</h2>
          <p className="text-lg text-on-dark-secondary max-w-2xl mx-auto mb-8">
            Every business is unique. Contact our specialists to discuss your specific requirements and discover how TD Logistics can create the perfect delivery solution for you.
          </p>
          <div className="flex justify-center items-center gap-6">
            <Link to="/partners" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-red)' }}>
              Request Custom Quote
              <Icon icon="fa-solid:arrow-right" className="text-base" />
            </Link>
            <Link to="/contact" className="btn-text" style={{ color: 'white' }}>
              Contact Specialist
              <Icon icon="fa-solid:arrow-right" className="text-sm" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { images } from '../../config/images';

export default function LastMilePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold text-primary">
                Fast & Reliable <span style={{ color: 'var(--primary-red)' }}>Last-Mile Delivery</span>
              </h1>
              <p className="text-lg text-secondary">
                Get your packages to customers' doorsteps across Saudi Arabia with real-time tracking, flexible delivery options, and professional service.
              </p>
              <Link to="/partners" className="btn-primary" style={{ width: 'fit-content' }}>
                Get Started
                <Icon icon="fa-solid:arrow-right" className="text-base" />
              </Link>
            </div>
            <img src={images.heroTruck} alt="Last-mile delivery" className="w-full rounded-lg shadow-strong" style={{ height: '500px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Complete Last-Mile Solution</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: 'fa-solid:clock', title: 'Same-Day Delivery', desc: 'Get packages delivered the same day in major cities' },
              { icon: 'fa-solid:map-location-dot', title: 'Real-Time Tracking', desc: 'GPS tracking with live updates and notifications' },
              { icon: 'fa-solid:calendar', title: 'Flexible Scheduling', desc: 'Choose delivery time slots that work for you' },
              { icon: 'fa-solid:user-tie', title: 'Professional Team', desc: 'Uniformed, trained delivery professionals' },
            ].map((feature, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex justify-center items-center w-12 h-12 p-3 bg-primary-red-light rounded-lg">
                    <Icon icon={feature.icon} className="text-xl" style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                </div>
                <p className="text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Coverage */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <img src={images.warehouse} alt="Nationwide Coverage" className="w-full rounded-lg shadow-moderate" style={{ height: '400px', objectFit: 'cover' }} />
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-primary">Nationwide Coverage</h2>
              <p className="text-lg text-secondary">Our extensive network covers all major cities and regions across Saudi Arabia with 24/7 operations.</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: '150+', label: 'Cities Covered' },
                  { stat: '98%', label: 'Population Reach' },
                  { stat: '13', label: 'Distribution Hubs' },
                  { stat: '24/7', label: 'Operations' },
                ].map((item, idx) => (
                  <div key={idx} className="card text-center">
                    <p className="text-3xl font-bold text-primary mb-2">{item.stat}</p>
                    <p className="text-secondary">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Partnership Benefits</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: 'fa-solid:chart-line', title: 'Scalable Growth', desc: 'Grow your business without worrying about logistics infrastructure' },
              { icon: 'fa-solid:headset', title: 'Dedicated Support', desc: '24/7 customer support in Arabic and English' },
              { icon: 'fa-solid:lock', title: 'Secure & Reliable', desc: 'Full insurance coverage and secure handling protocols' },
            ].map((benefit, idx) => (
              <div key={idx} className="card text-center">
                <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg mx-auto mb-4">
                  <Icon icon={benefit.icon} className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-secondary">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: 'Standard', price: 'SAR 25', time: 'Next Day', features: ['Standard packaging', 'Basic tracking', 'Business hours support'] },
              { name: 'Express', price: 'SAR 45', time: 'Same Day', features: ['Priority handling', 'Real-time tracking', '24/7 support'], highlight: true },
              { name: 'Premium', price: 'SAR 75', time: '2 Hours', features: ['White-glove service', 'GPS tracking', 'Dedicated support'] },
            ].map((plan, idx) => (
              <div key={idx} className="card" style={{ border: plan.highlight ? '2px solid var(--primary-red)' : '1px solid var(--border-default)', transform: plan.highlight ? 'scale(1.05)' : 'scale(1)' }}>
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold" style={{ color: 'var(--primary-red)' }}>{plan.price}</span>
                  <span className="text-secondary ml-2">per delivery</span>
                </div>
                <p className="text-secondary mb-6">{plan.time} delivery</p>
                <ul className="flex flex-col gap-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-secondary">
                      <Icon icon="fa-solid:check" style={{ color: 'var(--success-default)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/partners" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Choose Plan</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark" style={{ backgroundColor: 'var(--primary-red)' }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-on-dark mb-4">Ready to Transform Your Delivery?</h2>
          <p className="text-lg text-on-dark-secondary max-w-2xl mx-auto mb-8">Join hundreds of businesses using TD Logistics for reliable last-mile delivery.</p>
          <Link to="/partners" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-red)', justifyContent: 'center' }}>
            Get Started Today
            <Icon icon="fa-solid:arrow-right" className="text-base" />
          </Link>
        </div>
      </section>
    </div>
  );
}

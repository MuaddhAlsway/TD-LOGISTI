import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { images } from '../config/images';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold" style={{ lineHeight: '1.25' }}>
                <span className="text-primary">Reliable Logistics.</span>
                <br />
                <span style={{ color: 'var(--primary-red)' }}>Delivered.</span>
              </h1>
              <p className="text-lg text-secondary" style={{ lineHeight: '1.625' }}>
                Saudi Arabia's trusted logistics partner for e-commerce businesses and individual customers. From last-mile delivery to comprehensive logistics solutions, we ensure your shipments reach their destination safely and on time.
              </p>

              {/* Tracking Module */}
              <div className="bg-gray border rounded-lg p-8 shadow-subtle">
                <h3 className="text-xl font-semibold text-primary mb-4">Track Your Shipment</h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter tracking number (e.g. TD123456789)"
                    className="flex-1 px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors"
                  />
                  <button className="btn-primary">
                    <div className="flex justify-center items-center w-5 h-5">
                      <Icon icon="fa-solid:search" className="text-base" />
                    </div>
                    <span>Track</span>
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4">
                <Link
                  to="/partners"
                  className="btn-primary"
                  style={{ fontSize: 'var(--font-lg)', padding: 'var(--space-4) var(--space-8)' }}
                >
                  <span>Partner With Us</span>
                  <div className="flex justify-center items-center w-5 h-5">
                    <Icon icon="fa-solid:arrow-right" className="text-base" />
                  </div>
                </Link>
                <Link
                  to="/services"
                  className="btn-text"
                  style={{ fontSize: 'var(--font-lg)' }}
                >
                  <span>Learn More</span>
                  <div className="flex justify-center items-center w-4 h-4">
                    <Icon icon="fa-solid:arrow-right" className="text-sm" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={images.heroTruck}
                alt="Modern TD Logistics delivery truck fleet parked at distribution center with professional uniformed drivers"
                className="w-full rounded-lg shadow-strong"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="section section-gray">
        <div className="container text-center">
          <h2 className="text-lg font-semibold text-secondary mb-8">Trusted by Leading E-commerce Brands</h2>
          <div className="flex justify-center items-center gap-12" style={{ opacity: '0.6' }}>
            <div className="flex justify-center items-center w-24 h-16">
              <Icon icon="simple-icons:amazon" className="text-4xl" style={{ color: 'rgba(1, 1, 1, 1)' }} />
            </div>
            <div className="flex justify-center items-center w-24 h-16">
              <Icon icon="simple-icons:noon" className="text-4xl" style={{ color: 'rgba(1, 1, 1, 1)' }} />
            </div>
            <div className="flex justify-center items-center w-24 h-16">
              <Icon icon="simple-icons:shopify" className="text-4xl" style={{ color: 'rgba(1, 1, 1, 1)' }} />
            </div>
            <div className="flex justify-center items-center w-24 h-16">
              <Icon icon="simple-icons:woocommerce" className="text-4xl" style={{ color: 'rgba(1, 1, 1, 1)' }} />
            </div>
            <div className="flex justify-center items-center w-24 h-16">
              <Icon icon="simple-icons:magento" className="text-4xl" style={{ color: 'rgba(1, 1, 1, 1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Complete Logistics Solutions</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              From individual package delivery to comprehensive e-commerce fulfillment, we provide the logistics infrastructure your business needs to grow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="card hover:shadow-moderate">
              <div className="flex justify-center items-center w-12 h-12 p-3 bg-primary-red-light rounded-sm mb-4">
                <Icon icon="fa-solid:truck-fast" className="text-xl" style={{ color: 'var(--primary-red)' }} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-primary">Last-Mile Delivery</h3>
                <p className="text-secondary">
                  Fast, reliable delivery to your customers' doorsteps across Saudi Arabia with real-time tracking and flexible delivery options.
                </p>
              </div>
              <Link to="/services/last-mile" className="btn-text mt-4">
                <span>Learn More</span>
                <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="card hover:shadow-moderate">
              <div className="flex justify-center items-center w-12 h-12 p-3 bg-primary-red-light rounded-sm mb-4">
                <Icon icon="fa-solid:credit-card" className="text-xl" style={{ color: 'var(--primary-red)' }} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-primary">E-commerce Solutions</h3>
                <p className="text-secondary">
                  Complete COD collection, returns management, and e-commerce integration to streamline your online business operations.
                </p>
              </div>
              <Link to="/services/ecommerce" className="btn-text mt-4">
                <span>Learn More</span>
                <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="card hover:shadow-moderate">
              <div className="flex justify-center items-center w-12 h-12 p-3 bg-primary-red-light rounded-sm mb-4">
                <Icon icon="fa-solid:cogs" className="text-xl" style={{ color: 'var(--primary-red)' }} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-primary">Customized Delivery</h3>
                <p className="text-secondary">
                  Tailored logistics solutions designed for your specific business needs, from warehousing to specialized handling requirements.
                </p>
              </div>
              <Link to="/services/customized" className="btn-text mt-4">
                <span>Learn More</span>
                <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="card hover:shadow-moderate">
              <div className="flex justify-center items-center w-12 h-12 p-3 bg-primary-red-light rounded-sm mb-4">
                <Icon icon="fa-solid:chart-line" className="text-xl" style={{ color: 'var(--primary-red)' }} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-primary">Technology Features</h3>
                <p className="text-secondary">
                  Advanced tracking systems, API integration, and real-time analytics to give you complete visibility and control over your shipments.
                </p>
              </div>
              <Link to="/services/technology" className="btn-text mt-4">
                <span>Learn More</span>
                <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-gray">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            {/* Image */}
            <div className="relative">
              <img
                src={images.warehouse}
                alt="TD Logistics modern warehouse facility with organized packages and automated sorting systems"
                className="w-full rounded-lg shadow-moderate"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Why Choose TD Logistics?</h2>
                <p className="text-lg text-secondary">
                  Built for the Saudi market with deep understanding of local business needs and customer expectations.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex justify-center items-center w-8 h-8 p-2 bg-success-light rounded-sm flex-shrink-0 mt-1">
                    <Icon icon="fa-solid:check" className="text-sm" style={{ color: 'var(--success-default)' }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">99.2% On-Time Delivery</h4>
                    <p className="text-secondary">
                      Reliable delivery performance across all major Saudi cities with real-time tracking and proactive communication.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex justify-center items-center w-8 h-8 p-2 bg-success-light rounded-sm flex-shrink-0 mt-1">
                    <Icon icon="fa-solid:shield-alt" className="text-sm" style={{ color: 'var(--success-default)' }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Secure & Insured</h4>
                    <p className="text-secondary">
                      Full insurance coverage and secure handling protocols to protect your valuable shipments throughout the delivery process.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex justify-center items-center w-8 h-8 p-2 bg-success-light rounded-sm flex-shrink-0 mt-1">
                    <Icon icon="fa-solid:headset" className="text-sm" style={{ color: 'var(--success-default)' }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">24/7 Customer Support</h4>
                    <p className="text-secondary">
                      Dedicated support team available around the clock in Arabic and English to assist with any delivery concerns.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/partners"
                className="btn-primary"
                style={{ alignSelf: 'flex-start', fontSize: 'var(--font-lg)', padding: 'var(--space-4) var(--space-8)' }}
              >
                <span>Become a Partner</span>
                <div className="flex justify-center items-center w-5 h-5">
                  <Icon icon="fa-solid:arrow-right" className="text-base" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-secondary">
              Trusted by businesses across Saudi Arabia for reliable logistics solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={images.testimonial1}
                  alt="Ahmed Al-Rashid, CEO of Desert Electronics"
                  className="rounded-full"
                  style={{ width: '3.75rem', height: '3.75rem', objectFit: 'cover' }}
                />
                <div>
                  <h4 className="text-base font-semibold text-primary">Ahmed Al-Rashid</h4>
                  <p className="text-sm text-secondary">CEO, Desert Electronics</p>
                </div>
              </div>
              <p className="text-secondary italic">
                "TD Logistics has transformed our e-commerce operations. Their COD collection service is flawless, and customer satisfaction has increased dramatically since we started working with them."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="card">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={images.testimonial2}
                  alt="Fatima Al-Zahra, Operations Manager at Riyadh Fashion"
                  className="rounded-full"
                  style={{ width: '3.75rem', height: '3.75rem', objectFit: 'cover' }}
                />
                <div>
                  <h4 className="text-base font-semibold text-primary">Fatima Al-Zahra</h4>
                  <p className="text-sm text-secondary">Operations Manager, Riyadh Fashion</p>
                </div>
              </div>
              <p className="text-secondary italic">
                "The real-time tracking and professional handling of returns has saved us countless hours. TD Logistics understands the fashion industry's unique requirements perfectly."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="card">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={images.testimonial3}
                  alt="Omar bin Sultan, Founder of Tech Gadgets Saudi"
                  className="rounded-full"
                  style={{ width: '3.75rem', height: '3.75rem', objectFit: 'cover' }}
                />
                <div>
                  <h4 className="text-base font-semibold text-primary">Omar bin Sultan</h4>
                  <p className="text-sm text-secondary">Founder, Tech Gadgets Saudi</p>
                </div>
              </div>
              <p className="text-secondary italic">
                "As a growing startup, we needed a logistics partner that could scale with us. TD Logistics has been incredibly flexible and their technology integration is seamless."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark" style={{ backgroundColor: 'var(--primary-red)' }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-on-dark mb-4">Ready to Transform Your Logistics?</h2>
          <p className="text-lg text-on-dark-secondary max-w-2xl mx-auto mb-8">
            Join hundreds of businesses that trust TD Logistics for their delivery needs. Get a custom quote tailored to your specific requirements.
          </p>
          <div className="flex justify-center items-center gap-6">
            <Link
              to="/partners"
              className="btn-primary"
              style={{ backgroundColor: 'white', color: 'var(--primary-red)', fontSize: 'var(--font-lg)', padding: 'var(--space-4) var(--space-8)' }}
            >
              <span>Get Custom Quote</span>
              <div className="flex justify-center items-center w-5 h-5">
                <Icon icon="fa-solid:arrow-right" className="text-base" />
              </div>
            </Link>
            <Link
              to="/contact"
              className="btn-text"
              style={{ color: 'white', fontSize: 'var(--font-lg)' }}
            >
              <span>Contact Sales</span>
              <div className="flex justify-center items-center w-4 h-4">
                <Icon icon="fa-solid:arrow-right" className="text-sm" />
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

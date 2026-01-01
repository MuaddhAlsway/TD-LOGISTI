import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { images } from '../config/images';

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold" style={{ lineHeight: '1.25' }}>
                <span className="text-primary">Support &</span>
                <br />
                <span style={{ color: 'var(--primary-red)' }}>Contact</span>
              </h1>
              <p className="text-lg text-secondary" style={{ lineHeight: '1.625' }}>
                Get immediate assistance from our dedicated customer service team. We're here to support your logistics needs 24/7 across Saudi Arabia.
              </p>

              {/* Quick Contact Info */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center w-8 h-8 p-2 bg-success-light rounded-sm">
                    <Icon icon="fa-solid:phone" className="text-sm" style={{ color: 'var(--success-default)' }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">24/7 Hotline</p>
                    <p className="text-sm text-secondary">+966 11 234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center w-8 h-8 p-2 bg-info-light rounded-sm">
                    <Icon icon="fa-solid:envelope" className="text-sm" style={{ color: 'var(--info-default)' }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">Email Support</p>
                    <p className="text-sm text-secondary">support@tdlogistics.sa</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/966123456789"
                  className="btn-primary"
                  style={{ fontSize: 'var(--font-lg)', padding: 'var(--space-4) var(--space-8)' }}
                >
                  <div className="flex justify-center items-center w-5 h-5">
                    <Icon icon="fa-brands:whatsapp" className="text-base" />
                  </div>
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+966112345678"
                  className="btn-text"
                  style={{ fontSize: 'var(--font-lg)' }}
                >
                  Call Now
                  <div className="flex justify-center items-center w-4 h-4">
                    <Icon icon="fa-solid:phone" className="text-sm" />
                  </div>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={images.support}
                alt="TD Logistics customer service representative"
                className="w-full rounded-lg shadow-strong"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section section-gray">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Choose the contact method that works best for you. Our team is available across all channels to provide immediate assistance.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Phone Support */}
            <div className="card text-center hover:shadow-moderate">
              <div className="flex justify-center items-center w-16 h-16 p-4 bg-success-light rounded-lg mx-auto mb-4">
                <Icon icon="fa-solid:phone" className="text-2xl" style={{ color: 'var(--success-default)' }} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Phone Support</h3>
              <p className="text-secondary mb-4">
                Immediate assistance from our customer service representatives available 24/7.
              </p>
              <div className="flex flex-col gap-2 mb-4">
                <p className="text-lg font-semibold text-primary">+966 11 234 5678</p>
                <p className="text-sm text-secondary">Available 24/7</p>
              </div>
              <a href="tel:+966112345678" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Call Now
              </a>
            </div>

            {/* WhatsApp Chat */}
            <div className="card text-center hover:shadow-moderate">
              <div className="flex justify-center items-center w-16 h-16 p-4 rounded-lg mx-auto mb-4" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)' }}>
                <Icon icon="fa-brands:whatsapp" className="text-2xl" style={{ color: '#25D366' }} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">WhatsApp Chat</h3>
              <p className="text-secondary mb-4">
                Quick responses via WhatsApp for tracking updates, delivery inquiries, and support.
              </p>
              <div className="flex flex-col gap-2 mb-4">
                <p className="text-lg font-semibold text-primary">+966 50 123 4567</p>
                <p className="text-sm text-secondary">Response within minutes</p>
              </div>
              <a
                href="https://wa.me/966501234567"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', backgroundColor: '#25D366' }}
              >
                Start Chat
              </a>
            </div>

            {/* Email Support */}
            <div className="card text-center hover:shadow-moderate">
              <div className="flex justify-center items-center w-16 h-16 p-4 bg-info-light rounded-lg mx-auto mb-4">
                <Icon icon="fa-solid:envelope" className="text-2xl" style={{ color: 'var(--info-default)' }} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email Support</h3>
              <p className="text-secondary mb-4">
                Detailed support for complex inquiries, complaints, and partnership discussions.
              </p>
              <div className="flex flex-col gap-2 mb-4">
                <p className="text-lg font-semibold text-primary">support@tdlogistics.sa</p>
                <p className="text-sm text-secondary">Response within 2 hours</p>
              </div>
              <a
                href="mailto:support@tdlogistics.sa"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', backgroundColor: 'var(--info-default)' }}
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Locations */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">First Name</label>
                    <input type="text" placeholder="Enter your first name" className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Last Name</label>
                    <input type="text" placeholder="Enter your last name" className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
                  <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Phone Number</label>
                  <input type="tel" placeholder="+966 5X XXX XXXX" className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors">
                    <option>Select inquiry type</option>
                    <option>Tracking Issue</option>
                    <option>Delivery Problem</option>
                    <option>Partnership Inquiry</option>
                    <option>General Support</option>
                    <option>Complaint</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Message</label>
                  <textarea placeholder="Describe your inquiry in detail..." rows="4" className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  <span>Send Message</span>
                  <div className="flex justify-center items-center w-5 h-5">
                    <Icon icon="fa-solid:paper-plane" className="text-base" />
                  </div>
                </button>
              </form>
            </div>

            {/* Locations */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Our Locations</h2>
              <div className="card mb-8">
                <h3 className="text-lg font-semibold text-primary mb-3">Headquarters - Riyadh</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex justify-center items-center w-5 h-5 mt-1">
                      <Icon icon="fa-solid:map-marker-alt" className="text-base" style={{ color: 'var(--primary-red)' }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">King Fahd Road, Al Olaya District</p>
                      <p className="text-sm text-secondary">Riyadh 12244, Saudi Arabia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center w-5 h-5">
                      <Icon icon="fa-solid:clock" className="text-base" style={{ color: 'var(--primary-red)' }} />
                    </div>
                    <p className="text-sm text-secondary">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: 'Jeddah Branch', address: 'Tahlia Street, Jeddah 21424' },
                  { name: 'Dammam Branch', address: 'King Abdulaziz Street, Dammam 32244' },
                  { name: 'Khobar Branch', address: 'Prince Faisal Street, Al Khobar 34424' },
                ].map((branch, idx) => (
                  <div key={idx} className="card">
                    <h4 className="text-base font-semibold text-primary mb-2">{branch.name}</h4>
                    <div className="flex items-start gap-3">
                      <div className="flex justify-center items-center w-4 h-4 mt-1">
                        <Icon icon="fa-solid:map-marker-alt" className="text-sm" style={{ color: 'var(--primary-red)' }} />
                      </div>
                      <p className="text-sm text-secondary">{branch.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-secondary">Quick answers to common support inquiries.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[
              { q: 'How can I track my shipment?', a: 'Use our tracking tool on the homepage by entering your tracking number (TD + 9 digits). You can also track via WhatsApp or call our hotline for real-time updates.' },
              { q: 'What are your delivery hours?', a: 'We deliver Sunday through Thursday from 9:00 AM to 8:00 PM, and Saturdays from 10:00 AM to 6:00 PM. Friday deliveries are available in select areas.' },
              { q: 'How do I report a delivery issue?', a: 'Contact us immediately via phone (+966 11 234 5678), WhatsApp, or email. Provide your tracking number and describe the issue for fastest resolution.' },
              { q: 'Can I reschedule my delivery?', a: 'Yes, you can reschedule up to 2 hours before the scheduled delivery time via WhatsApp, phone, or through our customer portal. No additional charges apply.' },
            ].map((faq, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.q}</h3>
                <p className="text-base text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="section section-dark" style={{ backgroundColor: 'var(--primary-red)' }}>
        <div className="container text-center">
          <div className="flex justify-center items-center w-16 h-16 p-4 rounded-lg mx-auto mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <Icon icon="fa-solid:exclamation-triangle" className="text-2xl" style={{ color: 'white' }} />
          </div>
          <h2 className="text-3xl font-bold text-on-dark mb-4">Emergency Support</h2>
          <p className="text-lg text-on-dark-secondary max-w-2xl mx-auto mb-8">
            For urgent delivery issues, lost packages, or time-sensitive support, contact our emergency hotline available 24/7.
          </p>
          <div className="flex justify-center items-center gap-6">
            <a href="tel:+966112345678" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-red)', justifyContent: 'center' }}>
              <div className="flex justify-center items-center w-5 h-5">
                <Icon icon="fa-solid:phone" className="text-base" />
              </div>
              Emergency Hotline
            </a>
            <a href="https://wa.me/966123456789" className="btn-text" style={{ color: 'white', fontSize: 'var(--font-lg)' }}>
              WhatsApp Emergency
              <div className="flex justify-center items-center w-4 h-4">
                <Icon icon="fa-brands:whatsapp" className="text-sm" />
              </div>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

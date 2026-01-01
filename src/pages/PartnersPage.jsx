import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { images } from '../config/images';

export default function PartnersPage() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industryType: '',
    businessType: '',
    monthlyOrders: '',
    locations: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (location) => {
    setFormData(prev => ({
      ...prev,
      locations: prev.locations.includes(location)
        ? prev.locations.filter(l => l !== location)
        : [...prev.locations, location]
    }));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-8">
              <h1 className="text-5xl font-bold">
                <span className="text-primary">Partner with Saudi's</span>
                <br />
                <span style={{ color: 'var(--primary-red)' }}>Leading Logistics</span>
                <br />
                <span className="text-primary">Provider</span>
              </h1>
              <p className="text-lg text-secondary">
                Transform your e-commerce operations with TD Logistics' comprehensive solutions. From last-mile delivery to COD collection, we handle the complexity while you focus on growing your business.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  '99.2% On-Time Delivery Rate',
                  'Nationwide Coverage Across Saudi Arabia',
                  'Dedicated Account Management',
                  'Competitive Pricing & Flexible Terms',
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="check-icon-box">
                      <Icon icon="fa-solid:check" className="text-xs" style={{ color: 'var(--success-default)' }} />
                    </div>
                    <span className="text-primary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={images.warehouse} alt="Partnership opportunity" className="w-full rounded-lg shadow-strong" style={{ height: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Get Your Custom Quote</h2>
              <p className="text-lg text-secondary">Tell us about your business and we'll create a tailored logistics solution for you.</p>
            </div>
            <div className="flex justify-between items-center mb-12">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex justify-center items-center w-10 h-10 rounded-full font-bold" style={{ backgroundColor: formStep >= step ? 'var(--primary-red)' : 'var(--border-default)', color: formStep >= step ? 'white' : 'var(--text-tertiary)' }}>
                    {step}
                  </div>
                  {step < 3 && <div className="flex-1 h-1 mx-4" style={{ backgroundColor: formStep > step ? 'var(--primary-red)' : 'var(--border-default)' }}></div>}
                </div>
              ))}
            </div>
            <form className="card">
              {formStep === 1 && (
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-semibold text-primary">Business Information</h3>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Company Name</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Your company name" className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Industry Type</label>
                    <select name="industryType" value={formData.industryType} onChange={handleInputChange} className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors">
                      <option value="">Select industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="retail">Retail</option>
                      <option value="fashion">Fashion</option>
                      <option value="electronics">Electronics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button type="button" onClick={() => setFormStep(2)} className="btn-primary" style={{ alignSelf: 'flex-end' }}>
                    Next
                    <Icon icon="fa-solid:arrow-right" className="text-base" />
                  </button>
                </div>
              )}
              {formStep === 2 && (
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-semibold text-primary">Business Details</h3>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Business Type</label>
                    <select name="businessType" value={formData.businessType} onChange={handleInputChange} className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors">
                      <option value="">Select business type</option>
                      <option value="b2c">B2C (Direct to Consumer)</option>
                      <option value="b2b">B2B (Business to Business)</option>
                      <option value="marketplace">Marketplace Seller</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Monthly Orders</label>
                    <select name="monthlyOrders" value={formData.monthlyOrders} onChange={handleInputChange} className="w-full px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors">
                      <option value="">Select range</option>
                      <option value="0-100">0-100</option>
                      <option value="100-500">100-500</option>
                      <option value="500-1000">500-1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setFormStep(1)} className="btn-secondary" style={{ flex: 1 }}>Back</button>
                    <button type="button" onClick={() => setFormStep(3)} className="btn-primary" style={{ flex: 1 }}>
                      Next
                      <Icon icon="fa-solid:arrow-right" className="text-base" />
                    </button>
                  </div>
                </div>
              )}
              {formStep === 3 && (
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-semibold text-primary">Service Locations</h3>
                  <p className="text-secondary">Select the cities where you need our services:</p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Riyadh', 'Jeddah', 'Dammam', 'Medina', 'Khobar', 'Taif'].map((city) => (
                      <label key={city} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={formData.locations.includes(city)} onChange={() => handleLocationChange(city)} className="w-5 h-5" />
                        <span className="text-primary">{city}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setFormStep(2)} className="btn-secondary" style={{ flex: 1 }}>Back</button>
                    <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                      Get Quote
                      <Icon icon="fa-solid:arrow-right" className="text-base" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Partner With TD Logistics?</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">We're not just a logistics provider—we're your growth partner.</p>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'fa-solid:chart-line', title: 'Scalable Growth Solutions', desc: 'Grow your business without worrying about logistics infrastructure' },
              { icon: 'fa-solid:credit-card', title: 'Complete COD Management', desc: 'Secure cash collection with automated reconciliation' },
              { icon: 'fa-solid:plug', title: 'API Integration', desc: 'Seamless integration with your e-commerce platform' },
              { icon: 'fa-solid:undo', title: 'Returns Management', desc: 'Hassle-free returns processing and restocking' },
              { icon: 'fa-solid:headset', title: 'Dedicated Account Management', desc: '24/7 customer support in Arabic and English' },
              { icon: 'fa-solid:lock', title: 'Comprehensive Insurance', desc: 'Full insurance coverage and secure handling protocols' },
            ].map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg mx-auto mb-4">
                  <Icon icon={item.icon} className="text-2xl" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-text" style={{ fontSize: 'var(--font-lg)' }}>
              Learn More About Partnership
              <Icon icon="fa-solid:arrow-right" className="text-base" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

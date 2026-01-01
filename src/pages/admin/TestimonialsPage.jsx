import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { images } from '../../config/images';

const initialTestimonials = [
  { id: 1, name: 'Ahmed Al-Rashid', role: 'CEO', company: 'Desert Electronics', image: images.testimonial1, content: 'TD Logistics has transformed our e-commerce operations. Their COD collection service is flawless.', rating: 5, status: 'published', date: '2025-12-15' },
  { id: 2, name: 'Fatima Al-Zahra', role: 'Operations Manager', company: 'Riyadh Fashion', image: images.testimonial2, content: 'The real-time tracking and professional handling of returns has saved us countless hours.', rating: 5, status: 'published', date: '2025-12-10' },
  { id: 3, name: 'Omar bin Sultan', role: 'Founder', company: 'Tech Gadgets Saudi', image: images.testimonial3, content: 'As a growing startup, we needed a logistics partner that could scale with us.', rating: 5, status: 'published', date: '2025-12-05' },
  { id: 4, name: 'Sara Al-Mutairi', role: 'Supply Chain Director', company: 'Gulf Retail Group', image: images.testimonial1, content: 'Outstanding service quality and reliability. Their nationwide coverage has helped us expand.', rating: 4, status: 'draft', date: '2025-12-01' },
];

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [formData, setFormData] = useState({ name: '', role: '', company: '', content: '', rating: 5, status: 'draft' });

  const filteredTestimonials = testimonials.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || t.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || t.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleOpenModal = (testimonial = null) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData({ name: testimonial.name, role: testimonial.role, company: testimonial.company, content: testimonial.content, rating: testimonial.rating, status: testimonial.status });
    } else {
      setEditingTestimonial(null);
      setFormData({ name: '', role: '', company: '', content: '', rating: 5, status: 'draft' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => { setIsModalOpen(false); setEditingTestimonial(null); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => t.id === editingTestimonial.id ? { ...t, ...formData } : t));
    } else {
      setTestimonials([{ id: Date.now(), ...formData, image: images.testimonial1, date: new Date().toISOString().split('T')[0] }, ...testimonials]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => { if (window.confirm('Delete this testimonial?')) setTestimonials(testimonials.filter(t => t.id !== id)); };
  const handleToggleStatus = (id) => { setTestimonials(testimonials.map(t => t.id === id ? { ...t, status: t.status === 'published' ? 'draft' : 'published' } : t)); };

  const renderStars = (rating, interactive = false, onChange = null) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <button key={star} type="button" onClick={() => interactive && onChange && onChange(star)} className={interactive ? 'cursor-pointer' : 'cursor-default'}>
          <Icon icon={star <= rating ? 'fa-solid:star' : 'fa-regular:star'} className="text-lg" style={{ color: star <= rating ? '#F59E0B' : 'var(--text-tertiary)' }} />
        </button>
      ))}
    </div>
  );

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: 'var(--bg-container-secondary)' }}>
      {/* Header */}
      <div className="bg-white border-b" style={{ borderColor: 'var(--border-default)' }}>
        <div style={{ padding: '1.5rem 2.5rem' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray transition-colors">
                <Icon icon="fa-solid:arrow-left" className="text-secondary" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-primary">Testimonials</h1>
                <p className="text-secondary">Manage customer reviews</p>
              </div>
            </div>
            <button onClick={() => handleOpenModal()} className="btn-primary">
              <Icon icon="fa-solid:plus" className="text-sm" />
              Add Testimonial
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: '1.5rem 2.5rem' }}>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="card" style={{ borderLeft: '4px solid var(--success-default)' }}>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--success-light)' }}>
                <Icon icon="fa-solid:quote-right" className="text-xl" style={{ color: 'var(--success-default)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{testimonials.length}</p>
                <p className="text-sm text-secondary">Total</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ borderLeft: '4px solid var(--info-default)' }}>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--info-light)' }}>
                <Icon icon="fa-solid:check-circle" className="text-xl" style={{ color: 'var(--info-default)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{testimonials.filter(t => t.status === 'published').length}</p>
                <p className="text-sm text-secondary">Published</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ borderLeft: '4px solid var(--warning-default)' }}>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--warning-light)' }}>
                <Icon icon="fa-solid:file-alt" className="text-xl" style={{ color: 'var(--warning-default)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{testimonials.filter(t => t.status === 'draft').length}</p>
                <p className="text-sm text-secondary">Drafts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Icon icon="fa-solid:search" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
                <input type="text" placeholder="Search by name or company..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }} />
              </div>
            </div>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }}>
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="flex items-start gap-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-secondary">{testimonial.role}, {testimonial.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: testimonial.status === 'published' ? 'var(--success-light)' : 'var(--warning-light)', color: testimonial.status === 'published' ? 'var(--success-default)' : 'var(--warning-default)' }}>
                      {testimonial.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <div className="mt-2">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-secondary italic mb-4">"{testimonial.content}"</p>
              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <span className="text-xs text-tertiary">{testimonial.date}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleToggleStatus(testimonial.id)} className="p-2 rounded-sm hover:bg-light-gray transition-colors" title={testimonial.status === 'published' ? 'Unpublish' : 'Publish'}>
                    <Icon icon={testimonial.status === 'published' ? 'fa-solid:eye-slash' : 'fa-solid:eye'} className="text-secondary" />
                  </button>
                  <button onClick={() => handleOpenModal(testimonial)} className="p-2 rounded-sm hover:bg-light-gray transition-colors" title="Edit">
                    <Icon icon="fa-solid:edit" className="text-secondary" />
                  </button>
                  <button onClick={() => handleDelete(testimonial.id)} className="p-2 rounded-sm hover:bg-error-light transition-colors" title="Delete">
                    <Icon icon="fa-solid:trash" style={{ color: 'var(--error-default)' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredTestimonials.length === 0 && (
          <div className="card text-center py-12">
            <Icon icon="fa-solid:quote-right" className="text-4xl text-secondary mb-4" />
            <p className="text-secondary">No testimonials found</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={handleCloseModal} />
          <div className="relative bg-white rounded-lg shadow-strong w-full max-w-lg mx-4" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--border-default)' }}>
              <h2 className="text-xl font-bold text-primary">{editingTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
              <button onClick={handleCloseModal} className="p-2 hover:bg-light-gray rounded-sm transition-colors">
                <Icon icon="fa-solid:times" className="text-secondary" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Customer Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Role *</label>
                    <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }} placeholder="e.g., CEO" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Company *</label>
                    <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Testimonial *</label>
                  <textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }} rows={4} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Rating</label>
                    {renderStars(formData.rating, true, (rating) => setFormData({ ...formData, rating }))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Status</label>
                    <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }}>
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-4 mt-6 pt-6 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <button type="button" onClick={handleCloseModal} className="btn-secondary">Cancel</button>
                <button type="submit" className="btn-primary">{editingTestimonial ? 'Save Changes' : 'Add Testimonial'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

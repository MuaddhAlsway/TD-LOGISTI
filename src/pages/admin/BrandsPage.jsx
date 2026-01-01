import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const initialBrands = [
  { id: 1, name: 'Amazon', icon: 'simple-icons:amazon', website: 'https://amazon.sa', description: 'Global e-commerce marketplace', category: 'E-commerce', active: true },
  { id: 2, name: 'Noon', icon: 'simple-icons:noon', website: 'https://noon.com', description: 'Middle East online shopping platform', category: 'E-commerce', active: true },
  { id: 3, name: 'Shopify', icon: 'simple-icons:shopify', website: 'https://shopify.com', description: 'E-commerce platform for online stores', category: 'Platform', active: true },
  { id: 4, name: 'WooCommerce', icon: 'simple-icons:woocommerce', website: 'https://woocommerce.com', description: 'WordPress e-commerce plugin', category: 'Platform', active: true },
  { id: 5, name: 'Magento', icon: 'simple-icons:magento', website: 'https://magento.com', description: 'Enterprise e-commerce solution', category: 'Platform', active: true },
  { id: 6, name: 'Alibaba', icon: 'simple-icons:alibaba', website: 'https://alibaba.com', description: 'B2B e-commerce platform', category: 'E-commerce', active: false },
];

const categories = ['E-commerce', 'Platform', 'Marketplace', 'Retail', 'Technology'];

const popularIcons = [
  { icon: 'simple-icons:amazon', name: 'Amazon' },
  { icon: 'simple-icons:noon', name: 'Noon' },
  { icon: 'simple-icons:shopify', name: 'Shopify' },
  { icon: 'simple-icons:woocommerce', name: 'WooCommerce' },
  { icon: 'simple-icons:magento', name: 'Magento' },
  { icon: 'simple-icons:alibaba', name: 'Alibaba' },
  { icon: 'simple-icons:ebay', name: 'eBay' },
  { icon: 'simple-icons:etsy', name: 'Etsy' },
  { icon: 'simple-icons:stripe', name: 'Stripe' },
  { icon: 'simple-icons:paypal', name: 'PayPal' },
  { icon: 'simple-icons:salesforce', name: 'Salesforce' },
  { icon: 'simple-icons:sap', name: 'SAP' },
];

export default function BrandsPage() {
  const [brands, setBrands] = useState(initialBrands);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  const [formData, setFormData] = useState({ 
    name: '', 
    icon: '', 
    website: '',
    description: '',
    category: 'E-commerce',
    active: true 
  });

  const filteredBrands = brands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'active' && brand.active) ||
                         (filterStatus === 'inactive' && !brand.active);
    const matchesCategory = filterCategory === 'all' || brand.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setBrands(brands.map(b => b.id === editingId ? { ...b, ...formData } : b));
    } else {
      setBrands([...brands, { id: Date.now(), ...formData }]);
    }
    resetForm();
  };

  const handleEdit = (brand) => {
    setFormData({ 
      name: brand.name, 
      icon: brand.icon, 
      website: brand.website || '',
      description: brand.description || '',
      category: brand.category || 'E-commerce',
      active: brand.active 
    });
    setEditingId(brand.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this brand?')) {
      setBrands(brands.filter(b => b.id !== id));
      setSelectedBrands(selectedBrands.filter(sid => sid !== id));
    }
  };

  const handleToggleActive = (id) => {
    setBrands(brands.map(b => b.id === id ? { ...b, active: !b.active } : b));
  };

  const resetForm = () => {
    setFormData({ name: '', icon: '', website: '', description: '', category: 'E-commerce', active: true });
    setEditingId(null);
    setShowForm(false);
  };

  // Bulk actions
  const handleSelectAll = () => {
    if (selectedBrands.length === filteredBrands.length) {
      setSelectedBrands([]);
    } else {
      setSelectedBrands(filteredBrands.map(b => b.id));
    }
  };

  const handleSelectBrand = (id) => {
    if (selectedBrands.includes(id)) {
      setSelectedBrands(selectedBrands.filter(sid => sid !== id));
    } else {
      setSelectedBrands([...selectedBrands, id]);
    }
  };

  const handleBulkActivate = () => {
    setBrands(brands.map(b => selectedBrands.includes(b.id) ? { ...b, active: true } : b));
    setSelectedBrands([]);
  };

  const handleBulkDeactivate = () => {
    setBrands(brands.map(b => selectedBrands.includes(b.id) ? { ...b, active: false } : b));
    setSelectedBrands([]);
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedBrands.length} brands?`)) {
      setBrands(brands.filter(b => !selectedBrands.includes(b.id)));
      setSelectedBrands([]);
    }
  };

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
                <h1 className="text-2xl font-bold text-primary">Trusted Brands</h1>
                <p className="text-secondary">Manage partner brands displayed on the homepage</p>
              </div>
            </div>
            <button onClick={() => setShowForm(true)} className="btn-primary">
              <Icon icon="fa-solid:plus" className="text-sm" />
              Add Brand
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: '1.5rem 2.5rem' }}>
        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 p-3 bg-info-light rounded-lg">
                <Icon icon="fa-solid:building" className="text-xl" style={{ color: 'var(--info-default)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{brands.length}</p>
                <p className="text-sm text-secondary">Total Brands</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 p-3 bg-success-light rounded-lg">
                <Icon icon="fa-solid:check-circle" className="text-xl" style={{ color: 'var(--success-default)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{brands.filter(b => b.active).length}</p>
                <p className="text-sm text-secondary">Active</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 p-3 bg-warning-light rounded-lg">
                <Icon icon="fa-solid:eye-slash" className="text-xl" style={{ color: 'var(--warning-default)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{brands.filter(b => !b.active).length}</p>
                <p className="text-sm text-secondary">Inactive</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 p-3 bg-primary-red-light rounded-lg">
                <Icon icon="fa-solid:tags" className="text-xl" style={{ color: 'var(--primary-red)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{[...new Set(brands.map(b => b.category))].length}</p>
                <p className="text-sm text-secondary">Categories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="card mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Icon icon="fa-solid:search" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-light-gray border rounded-sm focus:outline-none focus:border-emphasis focus:bg-white transition-colors"
                />
              </div>
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 bg-light-gray border rounded-sm focus:outline-none focus:border-emphasis focus:bg-white transition-colors"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-3 bg-light-gray border rounded-sm focus:outline-none focus:border-emphasis focus:bg-white transition-colors"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <div className="flex items-center gap-2 border-l pl-4" style={{ borderColor: 'var(--border-default)' }}>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-sm transition-colors ${viewMode === 'grid' ? 'bg-primary-red-light' : 'hover:bg-light-gray'}`}
              >
                <Icon icon="fa-solid:th-large" style={{ color: viewMode === 'grid' ? 'var(--primary-red)' : 'var(--text-secondary)' }} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-sm transition-colors ${viewMode === 'list' ? 'bg-primary-red-light' : 'hover:bg-light-gray'}`}
              >
                <Icon icon="fa-solid:list" style={{ color: viewMode === 'list' ? 'var(--primary-red)' : 'var(--text-secondary)' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedBrands.length > 0 && (
          <div className="card mb-6" style={{ backgroundColor: 'var(--primary-red-light)' }}>
            <div className="flex items-center justify-between">
              <p className="font-medium" style={{ color: 'var(--primary-red)' }}>
                {selectedBrands.length} brand{selectedBrands.length > 1 ? 's' : ''} selected
              </p>
              <div className="flex items-center gap-3">
                <button onClick={handleBulkActivate} className="px-4 py-2 bg-white rounded-sm text-sm font-medium hover:bg-gray transition-colors" style={{ color: 'var(--success-default)' }}>
                  <Icon icon="fa-solid:check" className="mr-2" />
                  Activate
                </button>
                <button onClick={handleBulkDeactivate} className="px-4 py-2 bg-white rounded-sm text-sm font-medium hover:bg-gray transition-colors" style={{ color: 'var(--warning-default)' }}>
                  <Icon icon="fa-solid:eye-slash" className="mr-2" />
                  Deactivate
                </button>
                <button onClick={handleBulkDelete} className="px-4 py-2 bg-white rounded-sm text-sm font-medium hover:bg-gray transition-colors" style={{ color: 'var(--error-default)' }}>
                  <Icon icon="fa-solid:trash" className="mr-2" />
                  Delete
                </button>
                <button onClick={() => setSelectedBrands([])} className="px-4 py-2 bg-white rounded-sm text-sm font-medium hover:bg-gray transition-colors text-secondary">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-3 gap-6">
            {filteredBrands.map((brand) => (
              <div key={brand.id} className="card relative">
                <div className="absolute top-4 left-4">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.id)}
                    onChange={() => handleSelectBrand(brand.id)}
                    className="w-4 h-4"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg" style={{ backgroundColor: 'var(--bg-container-secondary)' }}>
                    <Icon icon={brand.icon} className="text-4xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary">{brand.name}</h3>
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: brand.active ? 'var(--success-light)' : 'var(--error-light)', color: brand.active ? 'var(--success-default)' : 'var(--error-default)' }}>
                      {brand.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-secondary mb-2">{brand.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-light-gray rounded text-xs text-secondary">{brand.category}</span>
                  {brand.website && (
                    <a href={brand.website} target="_blank" rel="noopener noreferrer" className="text-xs text-link hover:underline">
                      <Icon icon="fa-solid:external-link-alt" className="mr-1" />
                      Website
                    </a>
                  )}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleToggleActive(brand.id)} className="flex-1 py-2 rounded-lg border text-sm font-medium transition-colors hover:bg-gray" style={{ borderColor: 'var(--border-default)' }}>
                    {brand.active ? 'Deactivate' : 'Activate'}
                  </button>
                  <button onClick={() => handleEdit(brand)} className="flex items-center justify-center w-10 h-10 rounded-lg border transition-colors hover:bg-gray" style={{ borderColor: 'var(--border-default)' }}>
                    <Icon icon="fa-solid:pen" className="text-sm text-secondary" />
                  </button>
                  <button onClick={() => handleDelete(brand.id)} className="flex items-center justify-center w-10 h-10 rounded-lg border transition-colors hover:bg-error-light" style={{ borderColor: 'var(--border-default)' }}>
                    <Icon icon="fa-solid:trash" className="text-sm" style={{ color: 'var(--error-default)' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="card" style={{ padding: 0 }}>
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--border-default)' }}>
                  <th className="text-left p-4">
                    <input type="checkbox" checked={selectedBrands.length === filteredBrands.length && filteredBrands.length > 0} onChange={handleSelectAll} className="w-4 h-4" />
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-secondary">Brand</th>
                  <th className="text-left p-4 text-sm font-semibold text-secondary">Category</th>
                  <th className="text-left p-4 text-sm font-semibold text-secondary">Website</th>
                  <th className="text-left p-4 text-sm font-semibold text-secondary">Status</th>
                  <th className="text-right p-4 text-sm font-semibold text-secondary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBrands.map((brand) => (
                  <tr key={brand.id} className="border-b hover:bg-gray transition-colors" style={{ borderColor: 'var(--border-default)' }}>
                    <td className="p-4">
                      <input type="checkbox" checked={selectedBrands.includes(brand.id)} onChange={() => handleSelectBrand(brand.id)} className="w-4 h-4" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: 'var(--bg-container-secondary)' }}>
                          <Icon icon={brand.icon} className="text-2xl text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-primary">{brand.name}</p>
                          <p className="text-sm text-secondary">{brand.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-light-gray rounded text-xs text-secondary">{brand.category}</span>
                    </td>
                    <td className="p-4">
                      {brand.website ? (
                        <a href={brand.website} target="_blank" rel="noopener noreferrer" className="text-sm text-link hover:underline">
                          {brand.website.replace('https://', '')}
                        </a>
                      ) : (
                        <span className="text-sm text-tertiary">—</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: brand.active ? 'var(--success-light)' : 'var(--error-light)', color: brand.active ? 'var(--success-default)' : 'var(--error-default)' }}>
                        {brand.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleToggleActive(brand.id)} className="p-2 rounded-sm hover:bg-light-gray transition-colors" title={brand.active ? 'Deactivate' : 'Activate'}>
                          <Icon icon={brand.active ? 'fa-solid:eye-slash' : 'fa-solid:eye'} className="text-secondary" />
                        </button>
                        <button onClick={() => handleEdit(brand)} className="p-2 rounded-sm hover:bg-light-gray transition-colors" title="Edit">
                          <Icon icon="fa-solid:edit" className="text-secondary" />
                        </button>
                        <button onClick={() => handleDelete(brand.id)} className="p-2 rounded-sm hover:bg-error-light transition-colors" title="Delete">
                          <Icon icon="fa-solid:trash" style={{ color: 'var(--error-default)' }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredBrands.length === 0 && (
              <div className="text-center py-12">
                <Icon icon="fa-solid:building" className="text-4xl text-secondary mb-4" />
                <p className="text-secondary">No brands found</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={resetForm} />
          <div className="relative bg-white rounded-lg shadow-strong w-full max-w-lg mx-4" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--border-default)' }}>
              <h2 className="text-xl font-bold text-primary">{editingId ? 'Edit Brand' : 'Add New Brand'}</h2>
              <button onClick={resetForm} className="p-2 hover:bg-light-gray rounded-sm transition-colors">
                <Icon icon="fa-solid:times" className="text-secondary" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Brand Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g., Amazon" className="w-full px-4 py-3 bg-light-gray border rounded-sm focus:outline-none focus:border-emphasis focus:bg-white transition-colors" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Description</label>
                  <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Brief description of the brand..." className="w-full px-4 py-3 bg-light-gray border rounded-sm focus:outline-none focus:border-emphasis focus:bg-white transition-colors" rows={2} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Icon (Iconify format) *</label>
                  <input type="text" value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} placeholder="e.g., simple-icons:amazon" className="w-full px-4 py-3 bg-light-gray border rounded-sm focus:outline-none focus:border-emphasis focus:bg-white transition-colors" required />
                  <div className="mt-3">
                    <p className="text-xs text-secondary mb-2">Popular icons:</p>
                    <div className="flex flex-wrap gap-2">
                      {popularIcons.map((item) => (
                        <button key={item.icon} type="button" onClick={() => setFormData({ ...formData, icon: item.icon })} className="flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-gray transition-colors" style={{ borderColor: formData.icon === item.icon ? 'var(--primary-red)' : 'var(--border-default)' }} title={item.name}>
                          <Icon icon={item.icon} className="text-xl text-primary" />
                        </button>
                      ))}
                    </div>
                  </div>
                  {formData.icon && (
                    <div className="mt-3 p-4 bg-light-gray rounded-lg text-center">
                      <p className="text-xs text-secondary mb-2">Preview:</p>
                      <Icon icon={formData.icon} className="text-5xl text-primary" />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Category</label>
                    <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-3 bg-light-gray border rounded-sm focus:outline-none focus:border-emphasis focus:bg-white transition-colors">
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Website URL</label>
                    <input type="url" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} placeholder="https://example.com" className="w-full px-4 py-3 bg-light-gray border rounded-sm focus:outline-none focus:border-emphasis focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="active" checked={formData.active} onChange={(e) => setFormData({ ...formData, active: e.target.checked })} className="w-4 h-4" />
                  <label htmlFor="active" className="text-sm text-primary">Active (visible on website)</label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 mt-6 pt-6 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <button type="button" onClick={resetForm} className="btn-secondary">Cancel</button>
                <button type="submit" className="btn-primary">{editingId ? 'Save Changes' : 'Add Brand'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

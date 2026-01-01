import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useBlog } from '../../context/BlogContext';

const categories = ['Industry Trends', 'E-commerce', 'Technology', 'Tips & Guides', 'Company News'];

export default function BlogManagePage() {
  const { posts, addPost, updatePost, deletePost } = useBlog();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: 'Industry Trends',
    content: '',
    readTime: '5 min read',
    status: 'draft',
    featured: false,
  });

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || post.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleOpenModal = (post = null) => {
    if (post) {
      setEditingPost(post);
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        content: post.content || '',
        readTime: post.readTime,
        status: post.status,
        featured: post.featured,
      });
    } else {
      setEditingPost(null);
      setFormData({
        title: '',
        excerpt: '',
        category: 'Industry Trends',
        content: '',
        readTime: '5 min read',
        status: 'draft',
        featured: false,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPost(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      updatePost(editingPost.id, formData);
    } else {
      addPost(formData);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
    }
  };

  const handleToggleStatus = (id, currentStatus) => {
    updatePost(id, { status: currentStatus === 'published' ? 'draft' : 'published' });
  };

  const handleToggleFeatured = (id, currentFeatured) => {
    updatePost(id, { featured: !currentFeatured });
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
                <h1 className="text-2xl font-bold text-primary">Blog Management</h1>
                <p className="text-secondary">Create and manage blog posts</p>
              </div>
            </div>
            <button onClick={() => handleOpenModal()} className="btn-primary">
              <Icon icon="fa-solid:plus" className="text-sm" />
              New Post
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: '1.5rem 2.5rem' }}>
        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="card" style={{ borderLeft: '4px solid var(--primary-red)' }}>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                <Icon icon="fa-solid:newspaper" className="text-xl" style={{ color: 'var(--primary-red)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{posts.length}</p>
                <p className="text-sm text-secondary">Total Posts</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ borderLeft: '4px solid var(--success-default)' }}>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--success-light)' }}>
                <Icon icon="fa-solid:check-circle" className="text-xl" style={{ color: 'var(--success-default)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{posts.filter(p => p.status === 'published').length}</p>
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
                <p className="text-2xl font-bold text-primary">{posts.filter(p => p.status === 'draft').length}</p>
                <p className="text-sm text-secondary">Drafts</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ borderLeft: '4px solid var(--info-default)' }}>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--info-light)' }}>
                <Icon icon="fa-solid:star" className="text-xl" style={{ color: 'var(--info-default)' }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{posts.filter(p => p.featured).length}</p>
                <p className="text-sm text-secondary">Featured</p>
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
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border rounded-sm focus:outline-none transition-colors"
                  style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }}
                />
              </div>
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border rounded-sm focus:outline-none transition-colors"
              style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }}
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-3 border rounded-sm focus:outline-none transition-colors"
              style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }}
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Posts Table */}
        <div className="card" style={{ padding: 0 }}>
          <table className="w-full">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-container-secondary)' }}>
                <th className="text-left p-4 text-sm font-semibold text-secondary">Post</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary">Category</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary">Status</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary">Featured</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary">Date</th>
                <th className="text-right p-4 text-sm font-semibold text-secondary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray transition-colors" style={{ borderColor: 'var(--border-default)' }}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={post.image} alt={post.title} className="w-16 h-12 rounded object-cover" />
                      <div>
                        <p className="font-medium text-primary">{post.title}</p>
                        <p className="text-sm text-secondary">{post.readTime}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-medium" style={{ backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)' }}>
                      {post.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <span 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: post.status === 'published' ? 'var(--success-light)' : 'var(--warning-light)',
                        color: post.status === 'published' ? 'var(--success-default)' : 'var(--warning-default)'
                      }}
                    >
                      {post.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4">
                    <button onClick={() => handleToggleFeatured(post.id, post.featured)} className="p-2 rounded-sm hover:bg-light-gray transition-colors">
                      <Icon icon={post.featured ? 'fa-solid:star' : 'fa-regular:star'} className="text-lg" style={{ color: post.featured ? '#F59E0B' : 'var(--text-tertiary)' }} />
                    </button>
                  </td>
                  <td className="p-4 text-sm text-secondary">{post.date}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => handleToggleStatus(post.id, post.status)} className="p-2 rounded-sm hover:bg-light-gray transition-colors" title={post.status === 'published' ? 'Unpublish' : 'Publish'}>
                        <Icon icon={post.status === 'published' ? 'fa-solid:eye-slash' : 'fa-solid:eye'} className="text-secondary" />
                      </button>
                      <button onClick={() => handleOpenModal(post)} className="p-2 rounded-sm hover:bg-light-gray transition-colors" title="Edit">
                        <Icon icon="fa-solid:edit" className="text-secondary" />
                      </button>
                      <button onClick={() => handleDelete(post.id)} className="p-2 rounded-sm hover:bg-error-light transition-colors" title="Delete">
                        <Icon icon="fa-solid:trash" style={{ color: 'var(--error-default)' }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Icon icon="fa-solid:newspaper" className="text-4xl text-secondary mb-4" />
              <p className="text-secondary">No posts found</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={handleCloseModal} />
          <div className="relative bg-white rounded-lg shadow-strong w-full max-w-2xl mx-4" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--border-default)' }}>
              <h2 className="text-xl font-bold text-primary">{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
              <button onClick={handleCloseModal} className="p-2 hover:bg-light-gray rounded-sm transition-colors">
                <Icon icon="fa-solid:times" className="text-secondary" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Title *</label>
                  <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }} placeholder="Enter post title" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Excerpt *</label>
                  <textarea value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }} placeholder="Brief description..." rows={2} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Content *</label>
                  <textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }} placeholder="Write your blog post content (supports HTML)..." rows={8} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Category</label>
                    <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }}>
                      {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Read Time</label>
                    <input type="text" value={formData.readTime} onChange={(e) => setFormData({ ...formData, readTime: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }} placeholder="e.g., 5 min read" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Status</label>
                    <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-4 py-3 border rounded-sm" style={{ backgroundColor: 'var(--bg-container-tertiary)', borderColor: 'var(--border-default)' }}>
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={formData.featured} onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} className="w-5 h-5" />
                      <span className="text-sm text-primary">Featured Post</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-4 mt-6 pt-6 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <button type="button" onClick={handleCloseModal} className="btn-secondary">Cancel</button>
                <button type="submit" className="btn-primary">{editingPost ? 'Save Changes' : 'Create Post'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

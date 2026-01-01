import { createContext, useContext, useState } from 'react';
import { images } from '../config/images';

const AdminContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export function AdminProvider({ children }) {
  // Trusted Brands State
  const [brands, setBrands] = useState([
    { id: 1, name: 'Amazon', icon: 'simple-icons:amazon', active: true },
    { id: 2, name: 'Noon', icon: 'simple-icons:noon', active: true },
    { id: 3, name: 'Shopify', icon: 'simple-icons:shopify', active: true },
    { id: 4, name: 'WooCommerce', icon: 'simple-icons:woocommerce', active: true },
    { id: 5, name: 'Magento', icon: 'simple-icons:magento', active: true },
  ]);

  // Testimonials State
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      position: 'CEO, Desert Electronics',
      image: images.testimonial1,
      review: 'TD Logistics has transformed our e-commerce operations. Their COD collection service is flawless, and customer satisfaction has increased dramatically since we started working with them.',
      active: true,
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      position: 'Operations Manager, Riyadh Fashion',
      image: images.testimonial2,
      review: 'The real-time tracking and professional handling of returns has saved us countless hours. TD Logistics understands the fashion industry\'s unique requirements perfectly.',
      active: true,
    },
    {
      id: 3,
      name: 'Omar bin Sultan',
      position: 'Founder, Tech Gadgets Saudi',
      image: images.testimonial3,
      review: 'As a growing startup, we needed a logistics partner that could scale with us. TD Logistics has been incredibly flexible and their technology integration is seamless.',
      active: true,
    },
  ]);

  // Blog Posts State
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'The Future of Last-Mile Delivery in Saudi Arabia',
      excerpt: 'Explore how technology and innovation are transforming last-mile delivery services across the Kingdom.',
      category: 'Industry Trends',
      date: '2025-12-28',
      readTime: '5 min read',
      image: images.heroTruck,
      featured: true,
      active: true,
      content: `<p>The logistics landscape in <strong>Saudi Arabia</strong> is undergoing a remarkable transformation...</p>`,
    },
    {
      id: 2,
      title: 'How E-commerce Businesses Can Optimize Their Logistics',
      excerpt: 'Practical tips and strategies for online retailers to streamline their supply chain.',
      category: 'E-commerce',
      date: '2025-12-20',
      readTime: '4 min read',
      image: images.warehouse,
      featured: true,
      active: true,
      content: `<p>For e-commerce businesses in Saudi Arabia, logistics optimization is essential...</p>`,
    },
    {
      id: 3,
      title: 'Understanding COD: Best Practices for Saudi Market',
      excerpt: 'Cash on Delivery remains king in Saudi Arabia. Learn how to manage COD efficiently.',
      category: 'Tips & Guides',
      date: '2025-12-15',
      readTime: '6 min read',
      image: images.heroTruck,
      featured: false,
      active: true,
      content: `<p>Cash on Delivery (COD) remains the preferred payment method...</p>`,
    },
  ]);

  const [categories] = useState(['Industry Trends', 'E-commerce', 'Technology', 'Tips & Guides', 'Company News']);

  // Brand Functions
  const addBrand = (brand) => {
    setBrands([...brands, { ...brand, id: Date.now() }]);
  };

  const updateBrand = (id, updates) => {
    setBrands(brands.map(b => b.id === id ? { ...b, ...updates } : b));
  };

  const deleteBrand = (id) => {
    setBrands(brands.filter(b => b.id !== id));
  };

  // Testimonial Functions
  const addTestimonial = (testimonial) => {
    setTestimonials([...testimonials, { ...testimonial, id: Date.now() }]);
  };

  const updateTestimonial = (id, updates) => {
    setTestimonials(testimonials.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const deleteTestimonial = (id) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  // Blog Functions
  const addBlogPost = (post) => {
    setBlogPosts([...blogPosts, { ...post, id: Date.now() }]);
  };

  const updateBlogPost = (id, updates) => {
    setBlogPosts(blogPosts.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteBlogPost = (id) => {
    setBlogPosts(blogPosts.filter(p => p.id !== id));
  };

  const toggleFeatured = (id) => {
    setBlogPosts(blogPosts.map(p => p.id === id ? { ...p, featured: !p.featured } : p));
  };

  const value = {
    brands,
    addBrand,
    updateBrand,
    deleteBrand,
    testimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    blogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    toggleFeatured,
    categories,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

import { createContext, useContext, useState } from 'react';
import { images } from '../config/images';

const initialPosts = [
  {
    id: 1,
    title: 'The Future of Last-Mile Delivery in Saudi Arabia',
    excerpt: 'Explore how technology and innovation are transforming last-mile delivery services across the Kingdom, from drone deliveries to smart lockers.',
    category: 'Industry Trends',
    date: '2025-12-28',
    readTime: '5 min read',
    image: images.heroTruck,
    status: 'published',
    featured: true,
    content: `<p>The logistics landscape in <strong>Saudi Arabia</strong> is undergoing a remarkable transformation, driven by technological innovation and changing consumer expectations.</p><h2>The Rise of Smart Delivery Solutions</h2><p>Smart lockers are emerging as a game-changer in urban areas across <strong>Riyadh</strong>, <strong>Jeddah</strong>, and <strong>Dammam</strong>.</p>`,
  },
  {
    id: 2,
    title: 'How E-commerce Businesses Can Optimize Their Logistics',
    excerpt: 'Practical tips and strategies for online retailers to streamline their supply chain and improve customer satisfaction.',
    category: 'E-commerce',
    date: '2025-12-20',
    readTime: '4 min read',
    image: images.warehouse,
    status: 'published',
    featured: true,
    content: `<p>For e-commerce businesses in Saudi Arabia, logistics optimization is no longer optional—it's <strong>essential for survival and growth</strong>.</p><h2>Choose the Right Logistics Partner</h2><p>Your logistics partner is an extension of your brand.</p>`,
  },
  {
    id: 3,
    title: 'Understanding COD: Best Practices for Saudi Market',
    excerpt: 'Cash on Delivery remains king in Saudi Arabia. Learn how to manage COD efficiently and reduce failed deliveries.',
    category: 'Tips & Guides',
    date: '2025-12-15',
    readTime: '6 min read',
    image: images.heroTruck,
    status: 'published',
    featured: false,
    content: `<p>Cash on Delivery (COD) remains the preferred payment method for many Saudi consumers, accounting for <strong>over 60% of e-commerce transactions</strong>.</p>`,
  },
  {
    id: 4,
    title: 'API Integration: Connecting Your Store to TD Logistics',
    excerpt: 'A step-by-step guide to integrating your e-commerce platform with our logistics API for seamless order fulfillment.',
    category: 'Technology',
    date: '2025-12-10',
    readTime: '8 min read',
    image: images.warehouse,
    status: 'published',
    featured: false,
    content: `<p>Integrating your e-commerce platform with TD Logistics API streamlines your fulfillment process.</p>`,
  },
  {
    id: 5,
    title: 'Sustainable Logistics: Our Green Initiative',
    excerpt: 'Discover how TD Logistics is reducing its carbon footprint through electric vehicles and eco-friendly packaging.',
    category: 'Company News',
    date: '2025-12-05',
    readTime: '3 min read',
    image: images.heroTruck,
    status: 'published',
    featured: false,
    content: `<p>At TD Logistics, we believe that <strong>environmental responsibility and business success go hand in hand</strong>.</p>`,
  },
  {
    id: 6,
    title: 'Peak Season Preparation: Holiday Shipping Guide',
    excerpt: 'Get ready for the busiest shipping season with our comprehensive guide to handling increased order volumes.',
    category: 'Tips & Guides',
    date: '2025-11-28',
    readTime: '5 min read',
    image: images.warehouse,
    status: 'draft',
    featured: false,
    content: `<p>Peak season can make or break your e-commerce business. <strong>Proper preparation</strong> ensures you can handle increased volumes.</p>`,
  },
];

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      image: images.heroTruck,
    };
    setPosts([newPost, ...posts]);
    return newPost;
  };

  const updatePost = (id, updates) => {
    setPosts(posts.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const getPublishedPosts = () => {
    return posts.filter(p => p.status === 'published');
  };

  const getFeaturedPosts = () => {
    return posts.filter(p => p.status === 'published' && p.featured);
  };

  const getPostById = (id) => {
    return posts.find(p => p.id === parseInt(id));
  };

  return (
    <BlogContext.Provider value={{
      posts,
      addPost,
      updatePost,
      deletePost,
      getPublishedPosts,
      getFeaturedPosts,
      getPostById,
    }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}

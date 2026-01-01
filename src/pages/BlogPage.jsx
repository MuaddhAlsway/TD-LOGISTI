import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useBlog } from '../context/BlogContext';

const categories = ['All', 'Industry Trends', 'E-commerce', 'Technology', 'Tips & Guides', 'Company News'];

export default function BlogPage() {
  const { getPublishedPosts, getFeaturedPosts } = useBlog();
  const [activeCategory, setActiveCategory] = useState('All');

  const publishedPosts = getPublishedPosts();
  
  const filteredPosts = activeCategory === 'All' 
    ? publishedPosts 
    : publishedPosts.filter(post => post.category === activeCategory);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Logistics <span style={{ color: 'var(--primary-red)' }}>Insights & News</span>
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and news from the world of logistics and e-commerce delivery in Saudi Arabia.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(category)}
                className={`rounded-sm text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'text-white'
                    : 'bg-light-gray text-secondary hover:bg-gray'
                }`}
                style={{ 
                  padding: 'var(--space-4) var(--space-8)',
                  ...(activeCategory === category ? { backgroundColor: 'var(--primary-red)' } : {})
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section section-gray">
        <div className="container" style={{ paddingLeft: 'var(--space-12)', paddingRight: 'var(--space-12)' }}>
          <h2 className="text-2xl font-bold text-primary mb-8">Featured Articles</h2>
          <div className="grid grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="card hover:shadow-moderate overflow-hidden" style={{ padding: 0 }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className="rounded-sm text-xs font-medium"
                      style={{ backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)', padding: 'var(--space-2) var(--space-4)' }}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-secondary">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{post.title}</h3>
                  <p className="text-secondary mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary flex items-center gap-2">
                      <Icon icon="fa-solid:clock" className="text-sm" />
                      {post.readTime}
                    </span>
                    <Link to={`/blog/${post.id}`} className="btn-text">
                      Read More
                      <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section section-white">
        <div className="container" style={{ paddingLeft: 'var(--space-12)', paddingRight: 'var(--space-12)' }}>
          <h2 className="text-2xl font-bold text-primary mb-8">Latest Articles</h2>
          <div className="grid grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="card hover:shadow-moderate overflow-hidden" style={{ padding: 0 }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div style={{ padding: 'var(--space-6) var(--space-8)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="rounded-sm text-xs font-medium"
                      style={{ backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)', padding: 'var(--space-2) var(--space-4)' }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-secondary">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{post.title}</h3>
                  <p className="text-sm text-secondary mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="btn-text text-sm">
                      Read More
                      <Icon icon="fa-solid:arrow-right" className="text-xs ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-primary" style={{ backgroundColor: 'var(--primary-dark)' }}>
              Load More Articles
              <Icon icon="fa-solid:chevron-down" className="text-sm" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="flex justify-center items-center w-16 h-16 p-4 bg-primary-red-light rounded-lg mx-auto mb-6">
              <Icon icon="fa-solid:envelope" className="text-2xl" style={{ color: 'var(--primary-red)' }} />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-secondary mb-6 max-w-lg mx-auto">
              Get the latest logistics insights, industry news, and exclusive tips delivered straight to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-light-gray border rounded-sm text-primary focus:outline-none focus:border-emphasis focus:bg-white transition-colors"
              />
              <button className="btn-primary">
                Subscribe
                <Icon icon="fa-solid:paper-plane" className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark" style={{ backgroundColor: 'var(--primary-red)' }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-on-dark mb-4">Ready to Optimize Your Logistics?</h2>
          <p className="text-lg text-on-dark-secondary max-w-2xl mx-auto mb-8">
            Partner with TD Logistics and experience reliable, technology-driven delivery solutions.
          </p>
          <div className="flex justify-center items-center gap-6">
            <Link
              to="/partners"
              className="btn-primary"
              style={{ backgroundColor: 'white', color: 'var(--primary-red)' }}
            >
              Get Started
              <Icon icon="fa-solid:arrow-right" className="text-base" />
            </Link>
            <Link
              to="/contact"
              className="btn-text"
              style={{ color: 'white' }}
            >
              Contact Us
              <Icon icon="fa-solid:arrow-right" className="text-sm" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

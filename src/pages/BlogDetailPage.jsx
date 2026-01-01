import { useParams, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useBlog } from '../context/BlogContext';

export default function BlogDetailPage() {
  const { id } = useParams();
  const { getPostById, getPublishedPosts } = useBlog();
  
  const post = getPostById(id);
  const publishedPosts = getPublishedPosts();

  if (!post || post.status !== 'published') {
    return (
      <div className="w-full">
        <section className="section section-white">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Article Not Found</h1>
            <p className="text-secondary mb-8">The article you're looking for doesn't exist or is not published.</p>
            <Link to="/blog" className="btn-primary">
              Back to Blog
              <Icon icon="fa-solid:arrow-left" className="text-base ml-2" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const relatedPosts = publishedPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section section-white" style={{ paddingTop: 'var(--space-12)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link to="/" className="text-secondary hover:text-primary">Home</Link>
            <Icon icon="fa-solid:chevron-right" className="text-xs text-secondary" />
            <Link to="/blog" className="text-secondary hover:text-primary">Blog</Link>
            <Icon icon="fa-solid:chevron-right" className="text-xs text-secondary" />
            <span className="text-primary">{post.category}</span>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <span
              className="inline-block rounded-sm text-sm font-medium mb-4"
              style={{ backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)', padding: 'var(--space-2) var(--space-4)' }}
            >
              {post.category}
            </span>
            <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-secondary">
              <span className="flex items-center gap-2">
                <Icon icon="fa-solid:calendar" className="text-sm" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Icon icon="fa-solid:clock" className="text-sm" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg shadow-moderate mb-8"
            style={{ height: '400px', objectFit: 'cover' }}
          />

          {/* Article Content */}
          <div 
            className="article-content mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="border-t border-b py-6 mb-12" style={{ borderColor: 'var(--border-default)' }}>
            <div className="flex items-center justify-between">
              <span className="text-secondary font-medium">Share this article:</span>
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-light-gray hover:bg-gray transition-colors">
                  <Icon icon="fa-brands:twitter" className="text-lg text-secondary" />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-light-gray hover:bg-gray transition-colors">
                  <Icon icon="fa-brands:linkedin" className="text-lg text-secondary" />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-light-gray hover:bg-gray transition-colors">
                  <Icon icon="fa-solid:envelope" className="text-lg text-secondary" />
                </a>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <Link to="/blog" className="btn-text mb-12">
            <Icon icon="fa-solid:arrow-left" className="text-sm mr-2" />
            Back to All Articles
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="section section-gray">
          <div className="container">
            <h2 className="text-2xl font-bold text-primary mb-8">Related Articles</h2>
            <div className="grid grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="card hover:shadow-moderate overflow-hidden" style={{ padding: 0 }}>
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="p-6">
                    <span
                      className="inline-block rounded-sm text-xs font-medium mb-3"
                      style={{ backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)', padding: 'var(--space-1) var(--space-3)' }}
                    >
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-primary mb-2">{relatedPost.title}</h3>
                    <p className="text-secondary text-sm mb-4">{relatedPost.excerpt}</p>
                    <Link to={`/blog/${relatedPost.id}`} className="btn-text text-sm">
                      Read More
                      <Icon icon="fa-solid:arrow-right" className="text-xs ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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
              <Icon icon="fa-solid:arrow-right" className="text-base ml-2" />
            </Link>
            <Link
              to="/contact"
              className="btn-text"
              style={{ color: 'white' }}
            >
              Contact Us
              <Icon icon="fa-solid:arrow-right" className="text-sm ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

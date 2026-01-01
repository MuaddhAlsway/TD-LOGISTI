import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function DashboardPage() {
  const stats = [
    { 
      label: 'Blog Posts', 
      value: 6, 
      change: '+2 this month',
      icon: 'fa-solid:newspaper', 
      color: 'var(--primary-red)',
      bgColor: 'var(--primary-red-light)',
      link: '/admin/blog'
    },
    { 
      label: 'Testimonials', 
      value: 4, 
      change: '+1 this week',
      icon: 'fa-solid:quote-right', 
      color: 'var(--success-default)',
      bgColor: 'var(--success-light)',
      link: '/admin/testimonials'
    },
    { 
      label: 'Partner Brands', 
      value: 5, 
      change: 'All active',
      icon: 'fa-solid:handshake', 
      color: 'var(--info-default)',
      bgColor: 'var(--info-light)',
      link: '/admin/brands'
    },
    { 
      label: 'Page Views', 
      value: '12.4K', 
      change: '+18% vs last month',
      icon: 'fa-solid:chart-line', 
      color: 'var(--warning-default)',
      bgColor: 'var(--warning-light)',
      link: '/admin'
    },
  ];

  const quickActions = [
    { icon: 'fa-solid:plus', label: 'New Blog Post', desc: 'Create and publish articles', link: '/admin/blog', color: 'var(--primary-red)' },
    { icon: 'fa-solid:user-plus', label: 'Add Testimonial', desc: 'Add customer reviews', link: '/admin/testimonials', color: 'var(--success-default)' },
    { icon: 'fa-solid:building', label: 'Manage Brands', desc: 'Update partner logos', link: '/admin/brands', color: 'var(--info-default)' },
  ];

  const recentActivity = [
    { action: 'Blog post published', item: 'The Future of Last-Mile Delivery', time: '2 hours ago', icon: 'fa-solid:newspaper', color: 'var(--primary-red)' },
    { action: 'Testimonial added', item: 'Ahmed Al-Rashid - Desert Electronics', time: '1 day ago', icon: 'fa-solid:quote-right', color: 'var(--success-default)' },
    { action: 'Brand updated', item: 'Amazon logo refreshed', time: '2 days ago', icon: 'fa-solid:building', color: 'var(--info-default)' },
    { action: 'Blog post drafted', item: 'Peak Season Preparation Guide', time: '3 days ago', icon: 'fa-solid:file-alt', color: 'var(--warning-default)' },
  ];

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: 'var(--bg-container-secondary)' }}>
      {/* Header */}
      <div className="bg-white border-b" style={{ borderColor: 'var(--border-default)' }}>
        <div style={{ padding: '2rem 2.5rem' }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: 'var(--primary-red)' }}>
                  <Icon icon="fa-solid:truck-fast" className="text-lg text-white" />
                </div>
                <span className="text-lg font-bold" style={{ color: 'var(--primary-red)' }}>TD LOGISTICS</span>
                <span className="px-2 py-1 text-xs font-medium rounded" style={{ backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)' }}>Admin</span>
              </div>
              <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
              <p className="text-secondary mt-1">Welcome back! Here's what's happening with your website.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/" className="btn-secondary" target="_blank">
                <Icon icon="fa-solid:external-link-alt" className="text-sm" />
                View Website
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '2rem 2.5rem' }}>
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8" style={{ maxWidth: '100%' }}>
          {stats.map((stat, idx) => (
            <Link 
              key={idx} 
              to={stat.link} 
              className="card hover:shadow-moderate transition-all"
              style={{ borderLeft: `4px solid ${stat.color}` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-secondary mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs mt-2" style={{ color: stat.color }}>{stat.change}</p>
                </div>
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-lg"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <Icon icon={stat.icon} className="text-xl" style={{ color: stat.color }} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6" style={{ maxWidth: '100%' }}>
          {/* Quick Actions */}
          <div className="col-span-2">
            <div className="card">
              <h2 className="text-xl font-bold text-primary mb-6">Quick Actions</h2>
              <div className="grid grid-cols-3 gap-4">
                {quickActions.map((action, idx) => (
                  <Link 
                    key={idx}
                    to={action.link}
                    className="flex flex-col items-center p-6 rounded-lg border-2 border-dashed transition-all hover:border-solid hover:shadow-subtle"
                    style={{ borderColor: 'var(--border-default)' }}
                  >
                    <div 
                      className="flex items-center justify-center w-14 h-14 rounded-full mb-4"
                      style={{ backgroundColor: `${action.color}15` }}
                    >
                      <Icon icon={action.icon} className="text-2xl" style={{ color: action.color }} />
                    </div>
                    <p className="font-semibold text-primary text-center">{action.label}</p>
                    <p className="text-xs text-secondary text-center mt-1">{action.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Admin Navigation */}
            <div className="card mt-6">
              <h2 className="text-xl font-bold text-primary mb-6">Content Management</h2>
              <div className="flex flex-col gap-2">
                <Link 
                  to="/admin/blog"
                  className="flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-subtle"
                  style={{ borderColor: 'var(--border-default)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                      <Icon icon="fa-solid:newspaper" style={{ color: 'var(--primary-red)' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Blog Management</p>
                      <p className="text-sm text-secondary">Create, edit, and publish blog posts</p>
                    </div>
                  </div>
                  <Icon icon="fa-solid:chevron-right" className="text-secondary" />
                </Link>

                <Link 
                  to="/admin/testimonials"
                  className="flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-subtle"
                  style={{ borderColor: 'var(--border-default)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: 'var(--success-light)' }}>
                      <Icon icon="fa-solid:quote-right" style={{ color: 'var(--success-default)' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Testimonials</p>
                      <p className="text-sm text-secondary">Manage customer reviews and feedback</p>
                    </div>
                  </div>
                  <Icon icon="fa-solid:chevron-right" className="text-secondary" />
                </Link>

                <Link 
                  to="/admin/brands"
                  className="flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-subtle"
                  style={{ borderColor: 'var(--border-default)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: 'var(--info-light)' }}>
                      <Icon icon="fa-solid:handshake" style={{ color: 'var(--info-default)' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Partner Brands</p>
                      <p className="text-sm text-secondary">Update trusted brand logos</p>
                    </div>
                  </div>
                  <Icon icon="fa-solid:chevron-right" className="text-secondary" />
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="card">
              <h2 className="text-xl font-bold text-primary mb-6">Recent Activity</h2>
              <div className="flex flex-col gap-4">
                {recentActivity.map((activity, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0"
                    style={{ borderColor: 'var(--border-default)' }}
                  >
                    <div 
                      className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `${activity.color}15` }}
                    >
                      <Icon icon={activity.icon} className="text-sm" style={{ color: activity.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-primary">{activity.action}</p>
                      <p className="text-sm text-secondary truncate">{activity.item}</p>
                      <p className="text-xs text-tertiary mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Website Status */}
            <div className="card mt-6">
              <h2 className="text-xl font-bold text-primary mb-4">Website Status</h2>
              <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--success-light)' }}>
                <Icon icon="fa-solid:check-circle" className="text-xl" style={{ color: 'var(--success-default)' }} />
                <div>
                  <p className="font-semibold" style={{ color: 'var(--success-default)' }}>All Systems Operational</p>
                  <p className="text-sm text-secondary">Website is running smoothly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = login(username, password);
    
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid username or password');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--bg-footer)' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--primary-red)' }}>
              <Icon icon="fa-solid:truck-fast" className="text-2xl text-white" />
            </div>
            <span className="text-2xl font-bold" style={{ color: 'var(--primary-red)' }}>TD LOGISTICS</span>
          </Link>
          <h1 className="text-xl font-semibold text-white">Admin Panel</h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>Sign in to manage your website</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-strong p-8">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-6 p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: 'var(--error-light)' }}>
                <Icon icon="fa-solid:exclamation-circle" style={{ color: 'var(--error-default)' }} />
                <p className="text-sm" style={{ color: 'var(--error-default)' }}>{error}</p>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-primary mb-2">Username</label>
              <div className="relative">
                <Icon icon="fa-solid:user" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: 'var(--border-default)',
                    backgroundColor: 'var(--bg-container-tertiary)'
                  }}
                  placeholder="Enter username"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-primary mb-2">Password</label>
              <div className="relative">
                <Icon icon="fa-solid:lock" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: 'var(--border-default)',
                    backgroundColor: 'var(--bg-container-tertiary)'
                  }}
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors"
                >
                  <Icon icon={showPassword ? 'fa-solid:eye-slash' : 'fa-solid:eye'} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2"
              style={{ 
                backgroundColor: isLoading ? 'var(--text-tertiary)' : 'var(--primary-red)',
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? (
                <>
                  <Icon icon="fa-solid:spinner" className="animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <Icon icon="fa-solid:sign-in-alt" />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'var(--border-default)' }}>
            <Link to="/" className="text-sm text-secondary hover:text-primary transition-colors inline-flex items-center gap-2">
              <Icon icon="fa-solid:arrow-left" />
              Back to Website
            </Link>
          </div>
        </div>

        {/* Demo credentials hint */}
        <div className="mt-6 p-4 rounded-lg text-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Demo: username <span className="font-mono px-1 py-0.5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}>admin</span> / password <span className="font-mono px-1 py-0.5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}>admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
}

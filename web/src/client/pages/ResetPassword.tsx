import { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

export function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Request reset (no token)
  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    const response = await api.post('/auth/reset-password/request', { email });
    setLoading(false);

    if (response.success) {
      setMessage('If an account exists with that email, a reset link has been sent.');
    } else {
      setError(response.error || 'Failed to send reset link');
    }
  };

  // Reset password (with token)
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    setError('');

    const response = await api.post('/auth/reset-password', { token, password });
    setLoading(false);

    if (response.success) {
      setMessage('Password reset successfully!');
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setError(response.error || 'Failed to reset password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-miro-bg p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-miro-yellow rounded-2xl mb-4">
            <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none">
              <path
                d="M25.47 7.41H22.8l-4.77 7.74-4.77-7.74H8L14.4 18 8 28.59h5.29l4.74-7.74 4.74 7.74H28L21.6 18 28 7.41h-2.53z"
                fill="#050038"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {token ? 'Reset your password' : 'Forgot password?'}
          </h1>
          <p className="text-gray-600 mt-1">
            {token
              ? 'Enter your new password below'
              : "Enter your email and we'll send you a reset link"}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          {message && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {token ? (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm new password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button type="submit" disabled={loading} className="w-full btn btn-primary py-3">
                {loading ? 'Resetting...' : 'Reset password'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRequestReset} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <button type="submit" disabled={loading} className="w-full btn btn-primary py-3">
                {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-gray-600">
            Remember your password?{' '}
            <Link to="/login" className="text-miro-blue hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

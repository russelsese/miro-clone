import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { api } from '../lib/api';

export function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setStatus('error');
      setError('Invalid verification link');
      return;
    }

    verifyEmail(token);
  }, [searchParams]);

  const verifyEmail = async (token: string) => {
    const response = await api.get(`/auth/verify-email?token=${token}`);
    if (response.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setError(response.error || 'Verification failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-miro-bg p-4">
      <div className="w-full max-w-md text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {status === 'loading' && (
            <>
              <div className="spinner w-12 h-12 mx-auto mb-4" />
              <h1 className="text-xl font-semibold text-gray-900">Verifying your email...</h1>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 mb-2">Email verified!</h1>
              <p className="text-gray-600 mb-6">
                Your email has been successfully verified. You can now use all features.
              </p>
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 mb-2">Verification failed</h1>
              <p className="text-gray-600 mb-6">{error}</p>
              <Link to="/login" className="btn btn-primary">
                Go to Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

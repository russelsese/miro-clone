import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { api } from '../lib/api';
import { useAuthStore } from '../store/auth';

interface InvitationInfo {
  invitation: {
    id: string;
    boardId: string;
    email: string;
    role: string;
  };
  board: {
    id: string;
    name: string;
  } | null;
}

export function Invite() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const { user, checkAuth } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [accepting, setAccepting] = useState(false);
  const [info, setInfo] = useState<InvitationInfo | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    checkAuth();
    loadInvitation();
  }, [token]);

  const loadInvitation = async () => {
    if (!token) {
      setError('Invalid invitation link');
      setLoading(false);
      return;
    }

    const response = await api.get<InvitationInfo>(`/boards/invite/${token}`);
    setLoading(false);

    if (response.success && response.data) {
      setInfo(response.data);
    } else {
      setError(response.error || 'Invalid or expired invitation');
    }
  };

  const acceptInvitation = async () => {
    if (!token) return;

    setAccepting(true);
    const response = await api.post<{ board: { id: string } }>(`/boards/invite/${token}/accept`);
    setAccepting(false);

    if (response.success && response.data) {
      navigate(`/board/${response.data.board.id}`);
    } else {
      setError(response.error || 'Failed to accept invitation');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-miro-bg">
        <div className="spinner w-8 h-8" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-miro-bg p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Invitation Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link to="/dashboard" className="btn btn-primary">
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-miro-bg p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-miro-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-xl font-semibold text-gray-900 mb-2">You're invited!</h1>
        <p className="text-gray-600 mb-4">
          You've been invited to join{' '}
          <strong>{info?.board?.name || 'a board'}</strong> as a{' '}
          <span className="capitalize">{info?.invitation.role}</span>.
        </p>

        {user ? (
          <button
            onClick={acceptInvitation}
            disabled={accepting}
            className="btn btn-primary w-full"
          >
            {accepting ? 'Accepting...' : 'Accept Invitation'}
          </button>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-gray-500">Sign in to accept this invitation</p>
            <Link
              to={`/login?redirect=/invite/${token}`}
              className="btn btn-primary w-full inline-block"
            >
              Sign in
            </Link>
            <Link
              to={`/signup?redirect=/invite/${token}`}
              className="btn btn-secondary w-full inline-block"
            >
              Create account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

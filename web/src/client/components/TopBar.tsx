import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBoardStore } from '../store/board';
import { useAuthStore } from '../store/auth';
import { api } from '../lib/api';
import { ShareModal } from './ShareModal';

export function TopBar() {
  const navigate = useNavigate();
  const { board, users, role } = useBoardStore();
  const { user } = useAuthStore();

  const [showShareModal, setShowShareModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(board?.name || '');

  const getInitials = (displayName: string) => {
    return displayName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleRename = async () => {
    if (!board || name.trim() === board.name) {
      setEditing(false);
      return;
    }

    await api.patch(`/boards/${board.id}`, { name: name.trim() });
    setEditing(false);
  };

  const canEdit = role === 'owner' || role === 'editor';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-12 bg-white border-b border-gray-200 flex items-center px-3 z-50">
        {/* Left section */}
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div
            onClick={() => navigate('/dashboard')}
            className="flex items-center justify-center w-9 h-9 bg-miro-yellow rounded-lg cursor-pointer hover:opacity-90"
          >
            <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
              <path
                d="M25.47 7.41H22.8l-4.77 7.74-4.77-7.74H8L14.4 18 8 28.59h5.29l4.74-7.74 4.74 7.74H28L21.6 18 28 7.41h-2.53z"
                fill="#050038"
              />
            </svg>
          </div>

          <div className="w-px h-6 bg-gray-200 mx-1" />

          {/* Breadcrumb */}
          <div className="flex items-center text-sm">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-2 py-1 rounded"
            >
              Boards
            </button>
            <span className="text-gray-300 mx-1">/</span>
            {editing && role === 'owner' ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleRename}
                onKeyDown={(e) => e.key === 'Enter' && handleRename()}
                className="px-2 py-1 border border-miro-blue rounded text-sm font-medium"
                autoFocus
              />
            ) : (
              <span
                onClick={() => role === 'owner' && setEditing(true)}
                className={`font-medium text-gray-900 px-2 py-1 rounded max-w-[200px] truncate ${
                  role === 'owner' ? 'hover:bg-gray-100 cursor-pointer' : ''
                }`}
                title={board?.name}
              >
                {board?.name}
              </span>
            )}
          </div>
        </div>

        {/* Center - spacer */}
        <div className="flex-1" />

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* Collaborators */}
          {users.length > 0 && (
            <div className="collaborators mr-2">
              {users.slice(0, 5).map((u, i) => (
                <div
                  key={u.userId}
                  className="collaborator-avatar"
                  style={{ backgroundColor: u.color }}
                  title={u.displayName}
                >
                  {getInitials(u.displayName)}
                </div>
              ))}
              {users.length > 5 && (
                <div className="collaborator-avatar bg-gray-400">
                  +{users.length - 5}
                </div>
              )}
            </div>
          )}

          <div className="w-px h-6 bg-gray-200" />

          {/* Share button */}
          {(role === 'owner' || role === 'editor') && (
            <button
              onClick={() => setShowShareModal(true)}
              className="btn btn-primary text-sm py-1.5 px-4 flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          )}

          {/* User avatar */}
          {user && (
            <div
              className="avatar bg-gradient-to-br from-purple-500 to-blue-500 cursor-pointer"
              title={user.displayName}
            >
              {getInitials(user.displayName)}
            </div>
          )}
        </div>
      </header>

      {/* Share Modal */}
      {showShareModal && (
        <ShareModal onClose={() => setShowShareModal(false)} />
      )}
    </>
  );
}

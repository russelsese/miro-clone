import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { api } from '../lib/api';
import type { Board } from '../../shared/types';

export function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewBoardModal, setShowNewBoardModal] = useState(false);
  const [newBoardName, setNewBoardName] = useState('');
  const [creating, setCreating] = useState(false);
  const [filter, setFilter] = useState<'all' | 'starred' | 'trash'>('all');

  useEffect(() => {
    loadBoards();
  }, [filter, searchQuery]);

  const loadBoards = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (filter === 'starred') params.set('starred', 'true');
    if (filter === 'trash') params.set('trash', 'true');

    const response = await api.get<{ boards: Board[] }>(`/boards?${params}`);
    if (response.success && response.data) {
      setBoards(response.data.boards);
    }
    setLoading(false);
  };

  const createBoard = async () => {
    if (!newBoardName.trim()) return;

    setCreating(true);
    const response = await api.post<{ board: Board }>('/boards', {
      name: newBoardName.trim(),
    });

    if (response.success && response.data) {
      navigate(`/board/${response.data.board.id}`);
    }
    setCreating(false);
    setShowNewBoardModal(false);
    setNewBoardName('');
  };

  const deleteBoard = async (boardId: string) => {
    if (!confirm('Move this board to trash?')) return;

    await api.delete(`/boards/${boardId}`);
    loadBoards();
  };

  const restoreBoard = async (boardId: string) => {
    await api.post(`/boards/${boardId}/restore`);
    loadBoards();
  };

  const toggleStar = async (boardId: string, starred: boolean) => {
    if (starred) {
      await api.delete(`/boards/${boardId}/star`);
    } else {
      await api.post(`/boards/${boardId}/star`);
    }
    loadBoards();
  };

  const duplicateBoard = async (boardId: string) => {
    const response = await api.post<{ board: Board }>(`/boards/${boardId}/duplicate`);
    if (response.success) {
      loadBoards();
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-miro-bg">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-9 h-9 bg-miro-yellow rounded-lg">
              <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
                <path
                  d="M25.47 7.41H22.8l-4.77 7.74-4.77-7.74H8L14.4 18 8 28.59h5.29l4.74-7.74 4.74 7.74H28L21.6 18 28 7.41h-2.53z"
                  fill="#050038"
                />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Boards</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search boards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-miro-blue"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* User menu */}
            <div className="flex items-center gap-2">
              <div className="avatar bg-gradient-to-br from-purple-500 to-blue-500">
                {getInitials(user?.displayName || 'U')}
              </div>
              <button
                onClick={() => logout()}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Actions bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-miro-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All boards
            </button>
            <button
              onClick={() => setFilter('starred')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === 'starred'
                  ? 'bg-miro-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Starred
            </button>
            <button
              onClick={() => setFilter('trash')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === 'trash'
                  ? 'bg-miro-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Trash
            </button>
          </div>

          <button
            onClick={() => setShowNewBoardModal(true)}
            className="btn btn-primary flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New board
          </button>
        </div>

        {/* Boards grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="spinner w-8 h-8" />
          </div>
        ) : boards.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-gray-900 mb-1">
              {filter === 'trash' ? 'Trash is empty' : 'No boards yet'}
            </h2>
            <p className="text-gray-600 mb-4">
              {filter === 'trash'
                ? 'Deleted boards will appear here'
                : 'Create your first board to get started'}
            </p>
            {filter !== 'trash' && (
              <button
                onClick={() => setShowNewBoardModal(true)}
                className="btn btn-primary"
              >
                Create board
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {boards.map((board) => (
              <div
                key={board.id}
                className="board-card group"
                onClick={() => !board.deletedAt && navigate(`/board/${board.id}`)}
              >
                <div className="board-card-thumbnail">
                  <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                    />
                  </svg>
                </div>
                <div className="board-card-info">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{board.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {new Date(board.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {!board.deletedAt && (
                        <>
                          <button
                            onClick={() => toggleStar(board.id, board.starred)}
                            className="p-1 hover:bg-gray-100 rounded"
                            title={board.starred ? 'Unstar' : 'Star'}
                          >
                            <svg
                              className={`w-4 h-4 ${board.starred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => duplicateBoard(board.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                            title="Duplicate"
                          >
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => deleteBoard(board.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                            title="Delete"
                          >
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </>
                      )}
                      {board.deletedAt && (
                        <button
                          onClick={() => restoreBoard(board.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                          title="Restore"
                        >
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                  {board.role && board.role !== 'owner' && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                      {board.role}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* New board modal */}
      {showNewBoardModal && (
        <div className="modal-backdrop" onClick={() => setShowNewBoardModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="text-lg font-semibold">Create new board</h2>
            </div>
            <div className="modal-body">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Board name
              </label>
              <input
                type="text"
                value={newBoardName}
                onChange={(e) => setNewBoardName(e.target.value)}
                className="input"
                placeholder="My new board"
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && createBoard()}
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={() => setShowNewBoardModal(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={createBoard}
                disabled={!newBoardName.trim() || creating}
                className="btn btn-primary"
              >
                {creating ? 'Creating...' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

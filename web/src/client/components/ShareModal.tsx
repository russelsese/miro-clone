import { useState, useEffect } from 'react';
import { useBoardStore } from '../store/board';
import { api } from '../lib/api';
import type { BoardMember, ShareLink, UserRole } from '../../shared/types';

interface ShareModalProps {
  onClose: () => void;
}

export function ShareModal({ onClose }: ShareModalProps) {
  const { board, role } = useBoardStore();

  const [members, setMembers] = useState<BoardMember[]>([]);
  const [shareLinks, setShareLinks] = useState<ShareLink[]>([]);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<UserRole>('editor');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tab, setTab] = useState<'members' | 'links'>('members');

  useEffect(() => {
    if (board) {
      loadMembers();
      if (role === 'owner') {
        loadShareLinks();
      }
    }
  }, [board, role]);

  const loadMembers = async () => {
    if (!board) return;
    const response = await api.get<{ members: BoardMember[] }>(`/boards/${board.id}/members`);
    if (response.success && response.data) {
      setMembers(response.data.members);
    }
  };

  const loadShareLinks = async () => {
    if (!board) return;
    const response = await api.get<{ links: ShareLink[] }>(`/boards/${board.id}/share-links`);
    if (response.success && response.data) {
      setShareLinks(response.data.links);
    }
  };

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!board || !inviteEmail.trim()) return;

    setLoading(true);
    setError('');

    const response = await api.post(`/boards/${board.id}/members`, {
      email: inviteEmail.trim(),
      role: inviteRole,
    });

    setLoading(false);

    if (response.success) {
      setInviteEmail('');
      loadMembers();
    } else {
      setError(response.error || 'Failed to invite');
    }
  };

  const handleUpdateRole = async (userId: string, newRole: UserRole) => {
    if (!board) return;
    await api.patch(`/boards/${board.id}/members/${userId}`, { role: newRole });
    loadMembers();
  };

  const handleRemoveMember = async (userId: string) => {
    if (!board) return;
    if (!confirm('Remove this member from the board?')) return;
    await api.delete(`/boards/${board.id}/members/${userId}`);
    loadMembers();
  };

  const handleCreateLink = async (linkRole: UserRole) => {
    if (!board) return;
    const response = await api.post(`/boards/${board.id}/share-links`, { role: linkRole });
    if (response.success) {
      loadShareLinks();
    }
  };

  const handleToggleLink = async (linkId: string, enabled: boolean) => {
    if (!board) return;
    await api.patch(`/boards/${board.id}/share-links/${linkId}`, { enabled });
    loadShareLinks();
  };

  const handleDeleteLink = async (linkId: string) => {
    if (!board) return;
    await api.delete(`/boards/${board.id}/share-links/${linkId}`);
    loadShareLinks();
  };

  const copyLink = (token: string) => {
    const url = `${window.location.origin}/board/${board?.id}?token=${token}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
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
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal w-[480px]" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header flex items-center justify-between">
          <h2 className="text-lg font-semibold">Share "{board?.name}"</h2>
          <button onClick={onClose} className="btn-icon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setTab('members')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              tab === 'members'
                ? 'border-miro-blue text-miro-blue'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Members
          </button>
          {role === 'owner' && (
            <button
              onClick={() => setTab('links')}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                tab === 'links'
                  ? 'border-miro-blue text-miro-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Share Links
            </button>
          )}
        </div>

        <div className="modal-body max-h-[400px] overflow-y-auto">
          {tab === 'members' && (
            <>
              {/* Invite form */}
              <form onSubmit={handleInvite} className="mb-4">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="Email address"
                    className="input flex-1"
                    required
                  />
                  <select
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value as UserRole)}
                    className="input w-28"
                  >
                    <option value="editor">Editor</option>
                    <option value="commenter">Commenter</option>
                    <option value="viewer">Viewer</option>
                  </select>
                  <button type="submit" disabled={loading} className="btn btn-primary">
                    {loading ? '...' : 'Invite'}
                  </button>
                </div>
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
              </form>

              {/* Members list */}
              <div className="space-y-2">
                {members.map((member) => (
                  <div
                    key={member.userId}
                    className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="avatar bg-gradient-to-br from-purple-500 to-blue-500">
                        {getInitials(member.user?.displayName || 'U')}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{member.user?.displayName}</p>
                        <p className="text-xs text-gray-500">{member.user?.email}</p>
                      </div>
                    </div>
                    {member.role === 'owner' ? (
                      <span className="text-xs text-gray-500 capitalize">{member.role}</span>
                    ) : role === 'owner' ? (
                      <div className="flex items-center gap-2">
                        <select
                          value={member.role}
                          onChange={(e) => handleUpdateRole(member.userId, e.target.value as UserRole)}
                          className="text-sm border border-gray-200 rounded px-2 py-1"
                        >
                          <option value="editor">Editor</option>
                          <option value="commenter">Commenter</option>
                          <option value="viewer">Viewer</option>
                        </select>
                        <button
                          onClick={() => handleRemoveMember(member.userId)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-500 capitalize">{member.role}</span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'links' && role === 'owner' && (
            <>
              {/* Create link buttons */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Create a shareable link:</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCreateLink('viewer')}
                    className="btn btn-secondary text-sm"
                  >
                    Viewer link
                  </button>
                  <button
                    onClick={() => handleCreateLink('editor')}
                    className="btn btn-secondary text-sm"
                  >
                    Editor link
                  </button>
                </div>
              </div>

              {/* Share links list */}
              <div className="space-y-3">
                {shareLinks.map((link) => (
                  <div
                    key={link.id}
                    className="p-3 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium capitalize">{link.role} access</span>
                      <div className="flex items-center gap-2">
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={link.enabled}
                            onChange={(e) => handleToggleLink(link.id, e.target.checked)}
                            className="rounded"
                          />
                          Active
                        </label>
                        <button
                          onClick={() => handleDeleteLink(link.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="share-link-input">
                      <input
                        type="text"
                        value={`${window.location.origin}/board/${board?.id}?token=${link.token}`}
                        readOnly
                      />
                      <button
                        onClick={() => copyLink(link.token)}
                        className="text-miro-blue hover:text-miro-blue-hover text-sm font-medium"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ))}

                {shareLinks.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No share links created yet
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

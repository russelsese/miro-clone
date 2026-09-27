import { useState } from 'react';
import { useBoardStore } from '../store/board';
import { useAuthStore } from '../store/auth';
import { api } from '../lib/api';
import type { Comment } from '../../shared/types';

interface CommentsPanelProps {
  onClose: () => void;
}

export function CommentsPanel({ onClose }: CommentsPanelProps) {
  const { board, comments, addComment, updateComment, removeComment, role } = useBoardStore();
  const { user } = useAuthStore();

  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [loading, setLoading] = useState(false);

  const canComment = role === 'owner' || role === 'editor' || role === 'commenter';

  const handleAddComment = async (e: React.FormEvent, parentId?: string) => {
    e.preventDefault();
    if (!board) return;

    const text = parentId ? replyText : newComment;
    if (!text.trim()) return;

    setLoading(true);
    const response = await api.post<{ comment: Comment }>(`/${board.id}/comments`, {
      body: text.trim(),
      x: 100,
      y: 100,
      parentId,
    });
    setLoading(false);

    if (response.success && response.data) {
      if (parentId) {
        // Add reply to parent
        const parent = comments.find((c) => c.id === parentId);
        if (parent) {
          const replies = [...(parent.replies || []), response.data.comment];
          updateComment(parentId, { replies } as Partial<Comment>);
        }
        setReplyText('');
        setReplyingTo(null);
      } else {
        addComment(response.data.comment);
        setNewComment('');
      }
    }
  };

  const handleResolve = async (commentId: string, resolved: boolean) => {
    const response = await api.post(
      `/comments/${commentId}/${resolved ? 'unresolve' : 'resolve'}`
    );
    if (response.success) {
      updateComment(commentId, { resolved: !resolved });
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!confirm('Delete this comment?')) return;
    const response = await api.delete(`/comments/${commentId}`);
    if (response.success) {
      removeComment(commentId);
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

  const formatTime = (date: string) => {
    const d = new Date(date);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return d.toLocaleDateString();
  };

  return (
    <div className="fixed right-4 top-16 bottom-4 w-80 bg-white rounded-lg shadow-lg z-40 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <h3 className="font-semibold">Comments</h3>
        <button onClick={onClose} className="btn-icon">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Comments list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {comments.filter((c) => !c.parentId).map((comment) => (
          <div
            key={comment.id}
            className={`border rounded-lg p-3 ${comment.resolved ? 'bg-gray-50 opacity-75' : ''}`}
          >
            {/* Comment header */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="avatar w-6 h-6 text-xs bg-gradient-to-br from-purple-500 to-blue-500">
                  {getInitials(comment.author?.displayName || 'U')}
                </div>
                <div>
                  <p className="text-sm font-medium">{comment.author?.displayName}</p>
                  <p className="text-xs text-gray-500">{formatTime(comment.createdAt)}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleResolve(comment.id, comment.resolved)}
                  className="btn-icon"
                  title={comment.resolved ? 'Unresolve' : 'Resolve'}
                >
                  <svg
                    className={`w-4 h-4 ${comment.resolved ? 'text-green-600' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                {comment.authorId === user?.id && (
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="btn-icon text-gray-400 hover:text-red-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Comment body */}
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{comment.body}</p>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="mt-3 pl-4 border-l-2 border-gray-200 space-y-2">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="avatar w-5 h-5 text-[10px] bg-gradient-to-br from-purple-500 to-blue-500">
                        {getInitials(reply.author?.displayName || 'U')}
                      </div>
                      <span className="font-medium">{reply.author?.displayName}</span>
                      <span className="text-xs text-gray-500">{formatTime(reply.createdAt)}</span>
                    </div>
                    <p className="text-gray-700">{reply.body}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Reply button */}
            {canComment && (
              <div className="mt-2">
                {replyingTo === comment.id ? (
                  <form onSubmit={(e) => handleAddComment(e, comment.id)} className="flex gap-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Reply..."
                      className="input text-sm flex-1"
                      autoFocus
                    />
                    <button type="submit" disabled={loading} className="btn btn-primary text-sm py-1">
                      Send
                    </button>
                    <button
                      type="button"
                      onClick={() => setReplyingTo(null)}
                      className="btn btn-ghost text-sm py-1"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setReplyingTo(comment.id)}
                    className="text-sm text-miro-blue hover:underline"
                  >
                    Reply
                  </button>
                )}
              </div>
            )}
          </div>
        ))}

        {comments.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p>No comments yet</p>
          </div>
        )}
      </div>

      {/* New comment input */}
      {canComment && (
        <form onSubmit={(e) => handleAddComment(e)} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="input flex-1"
            />
            <button type="submit" disabled={loading || !newComment.trim()} className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

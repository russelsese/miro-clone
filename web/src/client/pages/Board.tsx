import { useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useBoardStore } from '../store/board';
import { useCanvasStore } from '../store/canvas';
import { useAuthStore } from '../store/auth';
import { Canvas } from '../components/Canvas';
import { Toolbar } from '../components/Toolbar';
import { TopBar } from '../components/TopBar';
import { ZoomControls } from '../components/ZoomControls';
import { useWebSocket } from '../hooks/useWebSocket';
import { RemoteCursors } from '../components/RemoteCursors';
import { CommentsPanel } from '../components/CommentsPanel';

export function Board() {
  const { boardId } = useParams<{ boardId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const shareToken = searchParams.get('token');

  const { user } = useAuthStore();
  const { board, loading, error, loadBoard, reset, connected, reconnecting } = useBoardStore();
  const { resetZoom } = useCanvasStore();

  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize WebSocket connection
  const ws = useWebSocket(boardId || null, shareToken || undefined);

  // Load board data
  useEffect(() => {
    if (boardId) {
      loadBoard(boardId, shareToken || undefined);
    }

    return () => {
      reset();
      resetZoom();
    };
  }, [boardId, shareToken]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle if typing in input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      const { setTool } = useCanvasStore.getState();

      // Tool shortcuts
      switch (e.key.toLowerCase()) {
        case 'v':
          setTool('select');
          break;
        case 'h':
          setTool('hand');
          break;
        case 's':
          setTool('sticky');
          break;
        case 't':
          setTool('text');
          break;
        case 'r':
          setTool('shape');
          break;
        case 'p':
          setTool('pen');
          break;
        case 'e':
          setTool('eraser');
          break;
        case 'l':
          setTool('line');
          break;
        case 'c':
          if (!e.ctrlKey && !e.metaKey) {
            setTool('comment');
          }
          break;
        case 'escape':
          setTool('select');
          useBoardStore.getState().clearSelection();
          break;
      }

      // Undo/Redo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          // Redo - handled in WebSocket
        } else {
          // Undo - handled in WebSocket
        }
      }

      // Delete
      if (e.key === 'Delete' || e.key === 'Backspace') {
        // Handle in canvas
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-miro-bg">
        <div className="text-center">
          <div className="spinner w-12 h-12 mx-auto mb-4" />
          <p className="text-gray-600">Loading board...</p>
        </div>
      </div>
    );
  }

  if (error || !board) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-miro-bg">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Unable to load board</h2>
          <p className="text-gray-600 mb-4">{error || 'Board not found'}</p>
          <button onClick={() => navigate('/dashboard')} className="btn btn-primary">
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden relative">
      {/* Top bar */}
      <TopBar />

      {/* Left toolbar */}
      <Toolbar />

      {/* Canvas */}
      <div className="absolute inset-0 top-12">
        <Canvas />
        <RemoteCursors />
      </div>

      {/* Zoom controls */}
      <ZoomControls />

      {/* Connection status */}
      {reconnecting && (
        <div className="offline-banner">
          <div className="spinner w-4 h-4" />
          Reconnecting...
        </div>
      )}

      {!connected && !reconnecting && (
        <div className="offline-banner bg-red-100 text-red-800">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Offline - changes may not be saved
        </div>
      )}
    </div>
  );
}

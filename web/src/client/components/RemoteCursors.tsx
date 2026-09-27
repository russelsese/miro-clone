import { useBoardStore } from '../store/board';
import { useCanvasStore } from '../store/canvas';
import { useAuthStore } from '../store/auth';

export function RemoteCursors() {
  const { users, cursors } = useBoardStore();
  const { canvasToScreen, zoom, panX, panY } = useCanvasStore();
  const { user } = useAuthStore();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ top: 48 }}>
      {users.map((u) => {
        // Don't show own cursor
        if (u.userId === user?.id) return null;

        const cursor = cursors.get(u.userId);
        if (!cursor) return null;

        const { x, y } = canvasToScreen(cursor.x, cursor.y);

        return (
          <div
            key={u.userId}
            className="remote-cursor"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
            >
              <path
                d="M1 1L1 16L5 12L8 18L11 17L8 11L14 11L1 1Z"
                fill={u.color}
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <div
              className="cursor-label"
              style={{ backgroundColor: u.color }}
            >
              {u.displayName}
            </div>
          </div>
        );
      })}
    </div>
  );
}

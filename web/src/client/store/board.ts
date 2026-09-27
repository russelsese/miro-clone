import { create } from 'zustand';
import { api } from '../lib/api';
import type {
  Board,
  CanvasObject,
  Comment,
  PresenceUser,
  UserRole,
  OpPayload,
} from '../../shared/types';

interface BoardState {
  // Board data
  board: Board | null;
  objects: Map<string, CanvasObject>;
  comments: Comment[];
  role: UserRole | null;

  // Selection
  selectedIds: Set<string>;

  // Presence
  users: PresenceUser[];
  cursors: Map<string, { x: number; y: number }>;

  // Connection state
  connected: boolean;
  reconnecting: boolean;

  // Undo/redo stacks
  undoStack: OpPayload[];
  redoStack: OpPayload[];

  // Loading
  loading: boolean;
  error: string | null;

  // Actions
  loadBoard: (boardId: string, shareToken?: string) => Promise<boolean>;
  setObjects: (objects: CanvasObject[]) => void;
  addObject: (object: CanvasObject) => void;
  updateObject: (id: string, updates: Partial<CanvasObject>) => void;
  deleteObject: (id: string) => void;

  // Selection
  select: (ids: string[]) => void;
  addToSelection: (id: string) => void;
  removeFromSelection: (id: string) => void;
  clearSelection: () => void;

  // Presence
  setUsers: (users: PresenceUser[]) => void;
  addUser: (user: PresenceUser) => void;
  removeUser: (userId: string) => void;
  updateCursor: (userId: string, x: number, y: number) => void;

  // Connection
  setConnected: (connected: boolean) => void;
  setReconnecting: (reconnecting: boolean) => void;

  // Undo/redo
  pushUndo: (op: OpPayload) => void;
  undo: () => OpPayload | null;
  redo: () => OpPayload | null;
  clearHistory: () => void;

  // Comments
  setComments: (comments: Comment[]) => void;
  addComment: (comment: Comment) => void;
  updateComment: (id: string, updates: Partial<Comment>) => void;
  removeComment: (id: string) => void;

  // Reset
  reset: () => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: null,
  objects: new Map(),
  comments: [],
  role: null,
  selectedIds: new Set(),
  users: [],
  cursors: new Map(),
  connected: false,
  reconnecting: false,
  undoStack: [],
  redoStack: [],
  loading: false,
  error: null,

  loadBoard: async (boardId: string, shareToken?: string) => {
    try {
      set({ loading: true, error: null });

      const tokenParam = shareToken ? `?token=${shareToken}` : '';
      const boardRes = await api.get<{ board: Board }>(`/boards/${boardId}${tokenParam}`);

      if (!boardRes.success || !boardRes.data) {
        set({ loading: false, error: boardRes.error || 'Failed to load board' });
        return false;
      }

      const objectsRes = await api.get<{ objects: CanvasObject[] }>(
        `/boards/${boardId}/objects${tokenParam}`
      );
      const commentsRes = await api.get<{ comments: Comment[] }>(
        `/boards/${boardId}/comments${tokenParam}`
      );

      const objectsMap = new Map<string, CanvasObject>();
      if (objectsRes.success && objectsRes.data?.objects) {
        for (const obj of objectsRes.data.objects) {
          objectsMap.set(obj.id, obj);
        }
      }

      set({
        board: boardRes.data.board,
        objects: objectsMap,
        comments: commentsRes.data?.comments || [],
        role: boardRes.data.board.role || null,
        loading: false,
      });

      return true;
    } catch (err) {
      console.error('Load board error:', err);
      set({ loading: false, error: 'Failed to load board' });
      return false;
    }
  },

  setObjects: (objects: CanvasObject[]) => {
    const map = new Map<string, CanvasObject>();
    for (const obj of objects) {
      map.set(obj.id, obj);
    }
    set({ objects: map });
  },

  addObject: (object: CanvasObject) => {
    set((state) => {
      const newObjects = new Map(state.objects);
      newObjects.set(object.id, object);
      return { objects: newObjects };
    });
  },

  updateObject: (id: string, updates: Partial<CanvasObject>) => {
    set((state) => {
      const existing = state.objects.get(id);
      if (!existing) return state;

      const newObjects = new Map(state.objects);
      newObjects.set(id, { ...existing, ...updates } as CanvasObject);
      return { objects: newObjects };
    });
  },

  deleteObject: (id: string) => {
    set((state) => {
      const newObjects = new Map(state.objects);
      newObjects.delete(id);
      const newSelected = new Set(state.selectedIds);
      newSelected.delete(id);
      return { objects: newObjects, selectedIds: newSelected };
    });
  },

  select: (ids: string[]) => {
    set({ selectedIds: new Set(ids) });
  },

  addToSelection: (id: string) => {
    set((state) => {
      const newSelected = new Set(state.selectedIds);
      newSelected.add(id);
      return { selectedIds: newSelected };
    });
  },

  removeFromSelection: (id: string) => {
    set((state) => {
      const newSelected = new Set(state.selectedIds);
      newSelected.delete(id);
      return { selectedIds: newSelected };
    });
  },

  clearSelection: () => {
    set({ selectedIds: new Set() });
  },

  setUsers: (users: PresenceUser[]) => {
    set({ users });
  },

  addUser: (user: PresenceUser) => {
    set((state) => {
      const exists = state.users.some((u) => u.userId === user.userId);
      if (exists) return state;
      return { users: [...state.users, user] };
    });
  },

  removeUser: (userId: string) => {
    set((state) => ({
      users: state.users.filter((u) => u.userId !== userId),
      cursors: new Map([...state.cursors].filter(([id]) => id !== userId)),
    }));
  },

  updateCursor: (userId: string, x: number, y: number) => {
    set((state) => {
      const newCursors = new Map(state.cursors);
      newCursors.set(userId, { x, y });
      return { cursors: newCursors };
    });
  },

  setConnected: (connected: boolean) => {
    set({ connected, reconnecting: false });
  },

  setReconnecting: (reconnecting: boolean) => {
    set({ reconnecting });
  },

  pushUndo: (op: OpPayload) => {
    set((state) => ({
      undoStack: [...state.undoStack.slice(-99), op],
      redoStack: [],
    }));
  },

  undo: () => {
    const { undoStack } = get();
    if (undoStack.length === 0) return null;

    const op = undoStack[undoStack.length - 1];
    set((state) => ({
      undoStack: state.undoStack.slice(0, -1),
      redoStack: [...state.redoStack, op],
    }));
    return op;
  },

  redo: () => {
    const { redoStack } = get();
    if (redoStack.length === 0) return null;

    const op = redoStack[redoStack.length - 1];
    set((state) => ({
      redoStack: state.redoStack.slice(0, -1),
      undoStack: [...state.undoStack, op],
    }));
    return op;
  },

  clearHistory: () => {
    set({ undoStack: [], redoStack: [] });
  },

  setComments: (comments: Comment[]) => {
    set({ comments });
  },

  addComment: (comment: Comment) => {
    set((state) => ({ comments: [...state.comments, comment] }));
  },

  updateComment: (id: string, updates: Partial<Comment>) => {
    set((state) => ({
      comments: state.comments.map((c) =>
        c.id === id ? { ...c, ...updates } : c
      ),
    }));
  },

  removeComment: (id: string) => {
    set((state) => ({
      comments: state.comments.filter((c) => c.id !== id),
    }));
  },

  reset: () => {
    set({
      board: null,
      objects: new Map(),
      comments: [],
      role: null,
      selectedIds: new Set(),
      users: [],
      cursors: new Map(),
      connected: false,
      reconnecting: false,
      undoStack: [],
      redoStack: [],
      loading: false,
      error: null,
    });
  },
}));

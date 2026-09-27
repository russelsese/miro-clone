// User types
export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl: string | null;
  emailVerified: boolean;
  createdAt: string;
}

export type UserRole = 'owner' | 'editor' | 'commenter' | 'viewer';

// Board types
export interface Board {
  id: string;
  name: string;
  ownerId: string;
  thumbnailUrl: string | null;
  isTemplate: boolean;
  starred: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  memberCount?: number;
  role?: UserRole;
}

export interface BoardMember {
  boardId: string;
  userId: string;
  role: UserRole;
  invitedBy: string | null;
  createdAt: string;
  user?: User;
}

// Canvas object types
export type ObjectType =
  | 'sticky'
  | 'shape'
  | 'text'
  | 'line'
  | 'freehand'
  | 'image'
  | 'frame';

export type ShapeType = 'rectangle' | 'circle' | 'triangle' | 'diamond';

export interface BaseObject {
  id: string;
  boardId: string;
  type: ObjectType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  zIndex: number;
  locked: boolean;
  createdBy: string;
  updatedBy: string;
  updatedAt: string;
}

export interface StickyObject extends BaseObject {
  type: 'sticky';
  text: string;
  color: string;
  fontSize: number;
  fontWeight: 'normal' | 'bold';
  fontStyle: 'normal' | 'italic';
  textAlign: 'left' | 'center' | 'right';
}

export interface ShapeObject extends BaseObject {
  type: 'shape';
  shapeType: ShapeType;
  text: string;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  fontSize: number;
  fontWeight: 'normal' | 'bold';
  fontStyle: 'normal' | 'italic';
  textAlign: 'left' | 'center' | 'right';
}

export interface TextObject extends BaseObject {
  type: 'text';
  text: string;
  color: string;
  fontSize: number;
  fontWeight: 'normal' | 'bold';
  fontStyle: 'normal' | 'italic';
  textDecoration: 'none' | 'underline';
  textAlign: 'left' | 'center' | 'right';
}

export interface LineObject extends BaseObject {
  type: 'line';
  points: number[]; // [x1, y1, x2, y2, ...]
  strokeColor: string;
  strokeWidth: number;
  startArrow: boolean;
  endArrow: boolean;
  connectedStart: string | null; // object id
  connectedEnd: string | null; // object id
}

export interface FreehandObject extends BaseObject {
  type: 'freehand';
  points: number[]; // [x1, y1, x2, y2, ...]
  strokeColor: string;
  strokeWidth: number;
}

export interface ImageObject extends BaseObject {
  type: 'image';
  src: string;
  originalWidth: number;
  originalHeight: number;
}

export interface FrameObject extends BaseObject {
  type: 'frame';
  title: string;
  backgroundColor: string;
  children: string[]; // object ids
}

export type CanvasObject =
  | StickyObject
  | ShapeObject
  | TextObject
  | LineObject
  | FreehandObject
  | ImageObject
  | FrameObject;

// Comment types
export interface Comment {
  id: string;
  boardId: string;
  objectId: string | null;
  parentId: string | null;
  authorId: string;
  body: string;
  resolved: boolean;
  x: number;
  y: number;
  createdAt: string;
  author?: User;
  replies?: Comment[];
}

// Share link types
export interface ShareLink {
  id: string;
  boardId: string;
  role: UserRole;
  token: string;
  enabled: boolean;
}

// WebSocket message types
export type WSMessageType =
  | 'join'
  | 'joined'
  | 'op'
  | 'cursor'
  | 'presence'
  | 'ping'
  | 'pong'
  | 'error';

export interface WSMessage {
  type: WSMessageType;
  boardId?: string;
  seq?: number;
  payload?: unknown;
}

export interface JoinPayload {
  boardId: string;
}

export interface JoinedPayload {
  objects: CanvasObject[];
  users: PresenceUser[];
  seq: number;
  role: UserRole;
}

export type OpType = 'create' | 'update' | 'delete';

export interface OpPayload {
  op: OpType;
  objectId: string;
  data?: Partial<CanvasObject>;
  clientSeq?: number;
}

export interface CursorPayload {
  userId: string;
  x: number;
  y: number;
}

export interface PresenceUser {
  userId: string;
  displayName: string;
  avatarUrl: string | null;
  color: string;
  editing?: string; // object id being edited
}

export interface PresencePayload {
  event: 'join' | 'leave' | 'editing';
  user: PresenceUser;
}

export interface ErrorPayload {
  code: string;
  message: string;
  objectId?: string;
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// Sticky note colors
export const STICKY_COLORS = [
  '#ffd966', // yellow
  '#cce5ff', // blue-light
  '#b7f0c8', // green
  '#ffb3c1', // pink
  '#ffd6a5', // orange
  '#d8b4fe', // purple
  '#99e2d0', // teal
  '#ffffff', // white
] as const;

// Shape defaults
export const SHAPE_DEFAULTS = {
  fillColor: '#ffffff',
  strokeColor: '#1a1a1a',
  strokeWidth: 2,
} as const;

// User presence colors (assigned to collaborators)
export const PRESENCE_COLORS = [
  '#ff6b6b', // red
  '#4ecdc4', // teal
  '#45b7d1', // blue
  '#96ceb4', // green
  '#ffeaa7', // yellow
  '#dfe6e9', // gray
  '#a29bfe', // purple
  '#fd79a8', // pink
] as const;

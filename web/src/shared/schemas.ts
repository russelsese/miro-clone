import { z } from 'zod';

// Auth schemas
export const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  displayName: z.string().min(1, 'Display name is required').max(100),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const updateProfileSchema = z.object({
  displayName: z.string().min(1).max(100).optional(),
  avatarUrl: z.string().url().nullable().optional(),
});

export const resetPasswordRequestSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Board schemas
export const createBoardSchema = z.object({
  name: z.string().min(1, 'Board name is required').max(200),
  templateId: z.string().optional(),
});

export const updateBoardSchema = z.object({
  name: z.string().min(1).max(200).optional(),
});

export const boardQuerySchema = z.object({
  q: z.string().optional(),
  sort: z.enum(['recent', 'name', 'created']).optional(),
  starred: z.enum(['true', 'false']).optional(),
  trash: z.enum(['true', 'false']).optional(),
});

// Member schemas
export const inviteMemberSchema = z.object({
  email: z.string().email('Invalid email address'),
  role: z.enum(['editor', 'commenter', 'viewer']),
});

export const updateMemberSchema = z.object({
  role: z.enum(['editor', 'commenter', 'viewer']),
});

// Share link schemas
export const createShareLinkSchema = z.object({
  role: z.enum(['editor', 'commenter', 'viewer']),
});

// Object schemas
const baseObjectSchema = z.object({
  x: z.number(),
  y: z.number(),
  width: z.number().positive(),
  height: z.number().positive(),
  rotation: z.number().default(0),
  locked: z.boolean().default(false),
});

export const stickySchema = baseObjectSchema.extend({
  type: z.literal('sticky'),
  text: z.string().max(10000).default(''),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/).default('#ffd966'),
  fontSize: z.number().min(8).max(72).default(14),
  fontWeight: z.enum(['normal', 'bold']).default('normal'),
  fontStyle: z.enum(['normal', 'italic']).default('normal'),
  textAlign: z.enum(['left', 'center', 'right']).default('left'),
});

export const shapeSchema = baseObjectSchema.extend({
  type: z.literal('shape'),
  shapeType: z.enum(['rectangle', 'circle', 'triangle', 'diamond']),
  text: z.string().max(10000).default(''),
  fillColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).default('#ffffff'),
  strokeColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).default('#1a1a1a'),
  strokeWidth: z.number().min(0).max(20).default(2),
  fontSize: z.number().min(8).max(72).default(14),
  fontWeight: z.enum(['normal', 'bold']).default('normal'),
  fontStyle: z.enum(['normal', 'italic']).default('normal'),
  textAlign: z.enum(['left', 'center', 'right']).default('center'),
});

export const textSchema = baseObjectSchema.extend({
  type: z.literal('text'),
  text: z.string().max(50000).default(''),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/).default('#1a1a1a'),
  fontSize: z.number().min(8).max(200).default(16),
  fontWeight: z.enum(['normal', 'bold']).default('normal'),
  fontStyle: z.enum(['normal', 'italic']).default('normal'),
  textDecoration: z.enum(['none', 'underline']).default('none'),
  textAlign: z.enum(['left', 'center', 'right']).default('left'),
});

export const lineSchema = baseObjectSchema.extend({
  type: z.literal('line'),
  points: z.array(z.number()).min(4),
  strokeColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).default('#1a1a1a'),
  strokeWidth: z.number().min(1).max(20).default(2),
  startArrow: z.boolean().default(false),
  endArrow: z.boolean().default(true),
  connectedStart: z.string().nullable().default(null),
  connectedEnd: z.string().nullable().default(null),
});

export const freehandSchema = baseObjectSchema.extend({
  type: z.literal('freehand'),
  points: z.array(z.number()).min(2),
  strokeColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).default('#1a1a1a'),
  strokeWidth: z.number().min(1).max(50).default(3),
});

export const imageSchema = baseObjectSchema.extend({
  type: z.literal('image'),
  src: z.string().max(1000),
  originalWidth: z.number().positive(),
  originalHeight: z.number().positive(),
});

export const frameSchema = baseObjectSchema.extend({
  type: z.literal('frame'),
  title: z.string().max(200).default('Frame'),
  backgroundColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).default('#ffffff'),
  children: z.array(z.string()).default([]),
});

export const canvasObjectSchema = z.discriminatedUnion('type', [
  stickySchema,
  shapeSchema,
  textSchema,
  lineSchema,
  freehandSchema,
  imageSchema,
  frameSchema,
]);

export const updateObjectSchema = z.object({
  x: z.number().optional(),
  y: z.number().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  rotation: z.number().optional(),
  locked: z.boolean().optional(),
  text: z.string().max(50000).optional(),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
  fillColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
  strokeColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
  strokeWidth: z.number().min(0).max(50).optional(),
  fontSize: z.number().min(8).max(200).optional(),
  fontWeight: z.enum(['normal', 'bold']).optional(),
  fontStyle: z.enum(['normal', 'italic']).optional(),
  textDecoration: z.enum(['none', 'underline']).optional(),
  textAlign: z.enum(['left', 'center', 'right']).optional(),
  points: z.array(z.number()).optional(),
  startArrow: z.boolean().optional(),
  endArrow: z.boolean().optional(),
  connectedStart: z.string().nullable().optional(),
  connectedEnd: z.string().nullable().optional(),
  title: z.string().max(200).optional(),
  backgroundColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
  children: z.array(z.string()).optional(),
  zIndex: z.number().optional(),
});

// Comment schemas
export const createCommentSchema = z.object({
  objectId: z.string().nullable().optional(),
  parentId: z.string().nullable().optional(),
  body: z.string().min(1, 'Comment body is required').max(10000),
  x: z.number(),
  y: z.number(),
});

export const updateCommentSchema = z.object({
  body: z.string().min(1).max(10000).optional(),
  resolved: z.boolean().optional(),
});

// WebSocket message schemas
export const wsJoinSchema = z.object({
  type: z.literal('join'),
  boardId: z.string(),
});

export const wsOpSchema = z.object({
  type: z.literal('op'),
  boardId: z.string(),
  payload: z.object({
    op: z.enum(['create', 'update', 'delete']),
    objectId: z.string(),
    data: z.any().optional(),
    clientSeq: z.number().optional(),
  }),
});

export const wsCursorSchema = z.object({
  type: z.literal('cursor'),
  boardId: z.string(),
  payload: z.object({
    x: z.number(),
    y: z.number(),
  }),
});

export const wsPresenceSchema = z.object({
  type: z.literal('presence'),
  boardId: z.string(),
  payload: z.object({
    event: z.enum(['editing']),
    objectId: z.string().nullable(),
  }),
});

export const wsPingSchema = z.object({
  type: z.literal('ping'),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type CreateBoardInput = z.infer<typeof createBoardSchema>;
export type UpdateBoardInput = z.infer<typeof updateBoardSchema>;
export type InviteMemberInput = z.infer<typeof inviteMemberSchema>;
export type CreateShareLinkInput = z.infer<typeof createShareLinkSchema>;
export type CreateCommentInput = z.infer<typeof createCommentSchema>;
export type UpdateCommentInput = z.infer<typeof updateCommentSchema>;
export type CanvasObjectInput = z.infer<typeof canvasObjectSchema>;
export type UpdateObjectInput = z.infer<typeof updateObjectSchema>;

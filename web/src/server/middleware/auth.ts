import { Request, Response, NextFunction } from 'express';
import { getUserById } from '../db/users.js';
import { getUserRoleOnBoard, getBoardById } from '../db/boards.js';
import { getShareLinkByToken } from '../db/shareLinks.js';
import type { UserRole } from '../../shared/types.js';

declare module 'express-session' {
  interface SessionData {
    userId?: string;
    anonymousId?: string;
    anonymousName?: string;
    shareToken?: string;
  }
}

declare module 'express' {
  interface Request {
    boardRole?: UserRole;
    isAnonymous?: boolean;
  }
}

// Require authenticated user
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({
      success: false,
      error: 'Authentication required',
    });
  }

  const user = getUserById(req.session.userId);
  if (!user) {
    req.session.destroy(() => {});
    return res.status(401).json({
      success: false,
      error: 'User not found',
    });
  }

  next();
}

// Optional auth - sets userId if available
export function optionalAuth(req: Request, _res: Response, next: NextFunction) {
  // Just continue - session will be checked elsewhere
  next();
}

// Require board access with minimum role
export function requireBoardAccess(minRole: UserRole = 'viewer') {
  return (req: Request, res: Response, next: NextFunction) => {
    const boardId = req.params.boardId || req.params.id;
    if (!boardId) {
      return res.status(400).json({
        success: false,
        error: 'Board ID required',
      });
    }

    const board = getBoardById(boardId);
    if (!board) {
      return res.status(404).json({
        success: false,
        error: 'Board not found',
      });
    }

    if (board.deletedAt && minRole !== 'owner') {
      return res.status(404).json({
        success: false,
        error: 'Board not found',
      });
    }

    // Check for share token in query or session
    const shareToken = (req.query.token as string) || req.session.shareToken;

    if (shareToken) {
      const shareLink = getShareLinkByToken(shareToken);
      if (shareLink && shareLink.boardId === boardId && shareLink.enabled) {
        // Anonymous access via share link
        if (!req.session.anonymousId) {
          req.session.anonymousId = `guest-${Date.now()}`;
          req.session.anonymousName = `Guest ${Math.floor(Math.random() * 1000)}`;
        }
        req.session.shareToken = shareToken;
        req.boardRole = shareLink.role;
        req.isAnonymous = !req.session.userId;

        if (!hasMinimumRole(shareLink.role, minRole)) {
          return res.status(403).json({
            success: false,
            error: 'Insufficient permissions',
          });
        }

        return next();
      }
    }

    // Check authenticated user's role
    if (!req.session.userId) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required',
      });
    }

    const role = getUserRoleOnBoard(boardId, req.session.userId);
    if (!role) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }

    req.boardRole = role;
    req.isAnonymous = false;

    if (!hasMinimumRole(role, minRole)) {
      return res.status(403).json({
        success: false,
        error: 'Insufficient permissions',
      });
    }

    next();
  };
}

// Check if role meets minimum requirement
function hasMinimumRole(role: UserRole, minRole: UserRole): boolean {
  const roleHierarchy: Record<UserRole, number> = {
    owner: 4,
    editor: 3,
    commenter: 2,
    viewer: 1,
  };

  return roleHierarchy[role] >= roleHierarchy[minRole];
}

// Helper to get user ID (authenticated or anonymous)
export function getUserIdFromRequest(req: Request): string | null {
  return req.session.userId || req.session.anonymousId || null;
}

// Helper to check if user can edit
export function canEdit(req: Request): boolean {
  return req.boardRole === 'owner' || req.boardRole === 'editor';
}

// Helper to check if user can comment
export function canComment(req: Request): boolean {
  return req.boardRole === 'owner' || req.boardRole === 'editor' || req.boardRole === 'commenter';
}

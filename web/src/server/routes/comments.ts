import { Router, Request, Response } from 'express';
import { createCommentSchema, updateCommentSchema } from '../../shared/schemas.js';
import {
  createComment,
  getCommentById,
  updateComment,
  deleteComment,
  resolveComment,
  unresolveComment,
  extractMentions,
} from '../db/comments.js';
import { getBoardById, getBoardMembers } from '../db/boards.js';
import { getUserById } from '../db/users.js';
import { requireBoardAccess, canComment } from '../middleware/auth.js';
import { sendMentionNotificationEmail } from '../services/email.js';

const router = Router();

// Create comment
router.post('/:boardId/comments', requireBoardAccess('commenter'), async (req: Request, res: Response) => {
  try {
    if (!canComment(req)) {
      return res.status(403).json({
        success: false,
        error: 'You do not have permission to comment',
      });
    }

    const parsed = createCommentSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const { objectId, parentId, body, x, y } = parsed.data;

    const comment = createComment(
      req.params.boardId,
      req.session.userId!,
      body,
      x,
      y,
      objectId,
      parentId
    );

    // Process @mentions
    const mentions = extractMentions(body);
    if (mentions.length > 0) {
      const board = getBoardById(req.params.boardId);
      const members = getBoardMembers(req.params.boardId);
      const commenter = getUserById(req.session.userId!);

      for (const mention of mentions) {
        // Find member by display name (simplified - in production, use user ID)
        const member = members.find(
          (m) =>
            m.user?.displayName.toLowerCase().includes(mention.toLowerCase()) &&
            m.userId !== req.session.userId
        );

        if (member?.user) {
          sendMentionNotificationEmail(
            member.user.email,
            commenter!.displayName,
            board!.name,
            body,
            req.params.boardId
          ).catch(console.error);
        }
      }
    }

    res.json({
      success: true,
      data: { comment },
    });
  } catch (err) {
    console.error('Create comment error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to create comment',
    });
  }
});

// Update comment
router.patch('/comments/:commentId', async (req: Request, res: Response) => {
  try {
    const comment = getCommentById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found',
      });
    }

    // Only author can edit body, anyone with comment access can resolve
    const parsed = updateCommentSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const { body, resolved } = parsed.data;

    // Check permissions for body edit
    if (body !== undefined && comment.authorId !== req.session.userId) {
      return res.status(403).json({
        success: false,
        error: 'Only the author can edit this comment',
      });
    }

    const updated = updateComment(req.params.commentId, { body, resolved });

    res.json({
      success: true,
      data: { comment: updated },
    });
  } catch (err) {
    console.error('Update comment error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to update comment',
    });
  }
});

// Resolve comment
router.post('/comments/:commentId/resolve', async (req: Request, res: Response) => {
  try {
    const comment = resolveComment(req.params.commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found',
      });
    }

    res.json({
      success: true,
      data: { comment },
    });
  } catch (err) {
    console.error('Resolve comment error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to resolve comment',
    });
  }
});

// Unresolve comment
router.post('/comments/:commentId/unresolve', async (req: Request, res: Response) => {
  try {
    const comment = unresolveComment(req.params.commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found',
      });
    }

    res.json({
      success: true,
      data: { comment },
    });
  } catch (err) {
    console.error('Unresolve comment error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to unresolve comment',
    });
  }
});

// Delete comment
router.delete('/comments/:commentId', async (req: Request, res: Response) => {
  try {
    const comment = getCommentById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found',
      });
    }

    // Only author can delete
    if (comment.authorId !== req.session.userId) {
      return res.status(403).json({
        success: false,
        error: 'Only the author can delete this comment',
      });
    }

    deleteComment(req.params.commentId);

    res.json({ success: true });
  } catch (err) {
    console.error('Delete comment error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to delete comment',
    });
  }
});

export default router;

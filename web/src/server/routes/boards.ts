import { Router, Request, Response } from 'express';
import {
  createBoardSchema,
  updateBoardSchema,
  boardQuerySchema,
  inviteMemberSchema,
  updateMemberSchema,
  createShareLinkSchema,
} from '../../shared/schemas.js';
import {
  createBoard,
  getBoardById,
  getUserBoards,
  updateBoard,
  duplicateBoard,
  softDeleteBoard,
  restoreBoard,
  starBoard,
  unstarBoard,
  getBoardMembers,
  addBoardMember,
  updateBoardMember,
  removeBoardMember,
  getTemplates,
} from '../db/boards.js';
import { getBoardObjects } from '../db/objects.js';
import { getBoardComments } from '../db/comments.js';
import {
  getBoardShareLinks,
  createShareLink,
  toggleShareLink,
  deleteShareLink,
  createInvitation,
  getInvitationByToken,
  deleteInvitationByToken,
} from '../db/shareLinks.js';
import { getUserByEmail, getUserById } from '../db/users.js';
import { requireAuth, requireBoardAccess, canEdit } from '../middleware/auth.js';
import { sendBoardInviteEmail } from '../services/email.js';

const router = Router();

// List user's boards
router.get('/', requireAuth, (req: Request, res: Response) => {
  try {
    const parsed = boardQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: 'Invalid query parameters',
      });
    }

    const { q, sort, starred, trash } = parsed.data;

    const boards = getUserBoards(req.session.userId!, {
      search: q,
      sort: sort as 'recent' | 'name' | 'created' | undefined,
      starred: starred === 'true',
      trash: trash === 'true',
    });

    res.json({
      success: true,
      data: { boards },
    });
  } catch (err) {
    console.error('List boards error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to list boards',
    });
  }
});

// Get templates
router.get('/templates', requireAuth, (_req: Request, res: Response) => {
  try {
    const templates = getTemplates();
    res.json({
      success: true,
      data: { templates },
    });
  } catch (err) {
    console.error('Get templates error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to get templates',
    });
  }
});

// Create a new board
router.post('/', requireAuth, (req: Request, res: Response) => {
  try {
    const parsed = createBoardSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const { name, templateId } = parsed.data;

    let board;
    if (templateId) {
      // Duplicate from template
      board = duplicateBoard(templateId, req.session.userId!);
      if (board) {
        // Rename from "Template (copy)" to specified name
        board = updateBoard(board.id, { name });
      }
    } else {
      board = createBoard(name, req.session.userId!);
    }

    if (!board) {
      return res.status(500).json({
        success: false,
        error: 'Failed to create board',
      });
    }

    res.json({
      success: true,
      data: { board },
    });
  } catch (err) {
    console.error('Create board error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to create board',
    });
  }
});

// Get board by ID
router.get('/:id', requireBoardAccess('viewer'), (req: Request, res: Response) => {
  try {
    const board = getBoardById(req.params.id, req.session.userId);
    if (!board) {
      return res.status(404).json({
        success: false,
        error: 'Board not found',
      });
    }

    res.json({
      success: true,
      data: {
        board: {
          ...board,
          role: req.boardRole,
        },
      },
    });
  } catch (err) {
    console.error('Get board error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to get board',
    });
  }
});

// Update board
router.patch('/:id', requireBoardAccess('owner'), (req: Request, res: Response) => {
  try {
    const parsed = updateBoardSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const board = updateBoard(req.params.id, parsed.data);
    if (!board) {
      return res.status(404).json({
        success: false,
        error: 'Board not found',
      });
    }

    res.json({
      success: true,
      data: { board },
    });
  } catch (err) {
    console.error('Update board error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to update board',
    });
  }
});

// Duplicate board
router.post('/:id/duplicate', requireBoardAccess('viewer'), (req: Request, res: Response) => {
  try {
    const board = duplicateBoard(req.params.id, req.session.userId!);
    if (!board) {
      return res.status(404).json({
        success: false,
        error: 'Board not found',
      });
    }

    res.json({
      success: true,
      data: { board },
    });
  } catch (err) {
    console.error('Duplicate board error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to duplicate board',
    });
  }
});

// Delete board (soft delete)
router.delete('/:id', requireBoardAccess('owner'), (req: Request, res: Response) => {
  try {
    const success = softDeleteBoard(req.params.id);
    if (!success) {
      return res.status(404).json({
        success: false,
        error: 'Board not found',
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error('Delete board error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to delete board',
    });
  }
});

// Restore board from trash
router.post('/:id/restore', requireBoardAccess('owner'), (req: Request, res: Response) => {
  try {
    const board = restoreBoard(req.params.id);
    if (!board) {
      return res.status(404).json({
        success: false,
        error: 'Board not found',
      });
    }

    res.json({
      success: true,
      data: { board },
    });
  } catch (err) {
    console.error('Restore board error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to restore board',
    });
  }
});

// Star board
router.post('/:id/star', requireBoardAccess('viewer'), (req: Request, res: Response) => {
  try {
    starBoard(req.params.id, req.session.userId!);
    res.json({ success: true });
  } catch (err) {
    console.error('Star board error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to star board',
    });
  }
});

// Unstar board
router.delete('/:id/star', requireBoardAccess('viewer'), (req: Request, res: Response) => {
  try {
    unstarBoard(req.params.id, req.session.userId!);
    res.json({ success: true });
  } catch (err) {
    console.error('Unstar board error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to unstar board',
    });
  }
});

// Get board objects
router.get('/:id/objects', requireBoardAccess('viewer'), (req: Request, res: Response) => {
  try {
    const objects = getBoardObjects(req.params.id);
    res.json({
      success: true,
      data: { objects },
    });
  } catch (err) {
    console.error('Get objects error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to get objects',
    });
  }
});

// Get board members
router.get('/:id/members', requireBoardAccess('viewer'), (req: Request, res: Response) => {
  try {
    const members = getBoardMembers(req.params.id);
    res.json({
      success: true,
      data: { members },
    });
  } catch (err) {
    console.error('Get members error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to get members',
    });
  }
});

// Invite member to board
router.post('/:id/members', requireBoardAccess('editor'), async (req: Request, res: Response) => {
  try {
    const parsed = inviteMemberSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const { email, role } = parsed.data;
    const board = getBoardById(req.params.id);

    // Check if user already exists and is already a member
    const existingUser = getUserByEmail(email);
    if (existingUser) {
      const member = addBoardMember(req.params.id, existingUser.id, role, req.session.userId!);
      if (!member) {
        return res.status(400).json({
          success: false,
          error: 'User is already a member of this board',
        });
      }
      return res.json({
        success: true,
        data: { member },
      });
    }

    // Create invitation for non-existing user
    const inviter = getUserById(req.session.userId!);
    const invitation = createInvitation(req.params.id, email, role, req.session.userId!);

    // Send invitation email
    sendBoardInviteEmail(email, inviter!.displayName, board!.name, role, invitation.token).catch(
      console.error
    );

    res.json({
      success: true,
      data: { invitation },
    });
  } catch (err) {
    console.error('Invite member error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to invite member',
    });
  }
});

// Update member role
router.patch(
  '/:id/members/:userId',
  requireBoardAccess('owner'),
  (req: Request, res: Response) => {
    try {
      const parsed = updateMemberSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          error: parsed.error.errors[0].message,
        });
      }

      const { role } = parsed.data;

      // Can't change owner's role
      const board = getBoardById(req.params.id);
      if (board?.ownerId === req.params.userId) {
        return res.status(400).json({
          success: false,
          error: "Cannot change board owner's role",
        });
      }

      const member = updateBoardMember(req.params.id, req.params.userId, role);
      if (!member) {
        return res.status(404).json({
          success: false,
          error: 'Member not found',
        });
      }

      res.json({
        success: true,
        data: { member },
      });
    } catch (err) {
      console.error('Update member error:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to update member',
      });
    }
  }
);

// Remove member from board
router.delete(
  '/:id/members/:userId',
  requireBoardAccess('owner'),
  (req: Request, res: Response) => {
    try {
      // Can't remove owner
      const board = getBoardById(req.params.id);
      if (board?.ownerId === req.params.userId) {
        return res.status(400).json({
          success: false,
          error: 'Cannot remove board owner',
        });
      }

      const success = removeBoardMember(req.params.id, req.params.userId);
      if (!success) {
        return res.status(404).json({
          success: false,
          error: 'Member not found',
        });
      }

      res.json({ success: true });
    } catch (err) {
      console.error('Remove member error:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to remove member',
      });
    }
  }
);

// Leave board (for non-owners)
router.post('/:id/leave', requireBoardAccess('viewer'), (req: Request, res: Response) => {
  try {
    const board = getBoardById(req.params.id);
    if (board?.ownerId === req.session.userId) {
      return res.status(400).json({
        success: false,
        error: 'Board owner cannot leave. Transfer ownership or delete the board.',
      });
    }

    removeBoardMember(req.params.id, req.session.userId!);
    res.json({ success: true });
  } catch (err) {
    console.error('Leave board error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to leave board',
    });
  }
});

// Get share links
router.get('/:id/share-links', requireBoardAccess('owner'), (req: Request, res: Response) => {
  try {
    const links = getBoardShareLinks(req.params.id);
    res.json({
      success: true,
      data: { links },
    });
  } catch (err) {
    console.error('Get share links error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to get share links',
    });
  }
});

// Create share link
router.post('/:id/share-links', requireBoardAccess('owner'), (req: Request, res: Response) => {
  try {
    const parsed = createShareLinkSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const { role } = parsed.data;
    const link = createShareLink(req.params.id, role);

    res.json({
      success: true,
      data: { link },
    });
  } catch (err) {
    console.error('Create share link error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to create share link',
    });
  }
});

// Toggle share link
router.patch(
  '/:id/share-links/:linkId',
  requireBoardAccess('owner'),
  (req: Request, res: Response) => {
    try {
      const { enabled } = req.body;
      const link = toggleShareLink(req.params.linkId, enabled);
      if (!link) {
        return res.status(404).json({
          success: false,
          error: 'Share link not found',
        });
      }

      res.json({
        success: true,
        data: { link },
      });
    } catch (err) {
      console.error('Toggle share link error:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to toggle share link',
      });
    }
  }
);

// Delete share link
router.delete(
  '/:id/share-links/:linkId',
  requireBoardAccess('owner'),
  (req: Request, res: Response) => {
    try {
      deleteShareLink(req.params.linkId);
      res.json({ success: true });
    } catch (err) {
      console.error('Delete share link error:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to delete share link',
      });
    }
  }
);

// Get board comments
router.get('/:id/comments', requireBoardAccess('viewer'), (req: Request, res: Response) => {
  try {
    const comments = getBoardComments(req.params.id);
    res.json({
      success: true,
      data: { comments },
    });
  } catch (err) {
    console.error('Get comments error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to get comments',
    });
  }
});

// Accept invitation
router.get('/invite/:token', async (req: Request, res: Response) => {
  try {
    const invitation = getInvitationByToken(req.params.token);
    if (!invitation) {
      return res.status(404).json({
        success: false,
        error: 'Invalid or expired invitation',
      });
    }

    const board = getBoardById(invitation.boardId);

    res.json({
      success: true,
      data: {
        invitation,
        board: board ? { id: board.id, name: board.name } : null,
      },
    });
  } catch (err) {
    console.error('Get invitation error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to get invitation',
    });
  }
});

// Accept invitation (after auth)
router.post('/invite/:token/accept', requireAuth, (req: Request, res: Response) => {
  try {
    const invitation = getInvitationByToken(req.params.token);
    if (!invitation) {
      return res.status(404).json({
        success: false,
        error: 'Invalid or expired invitation',
      });
    }

    // Add user as member
    addBoardMember(invitation.boardId, req.session.userId!, invitation.role, invitation.invitedBy);

    // Delete invitation
    deleteInvitationByToken(req.params.token);

    const board = getBoardById(invitation.boardId, req.session.userId!);

    res.json({
      success: true,
      data: { board },
    });
  } catch (err) {
    console.error('Accept invitation error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to accept invitation',
    });
  }
});

export default router;

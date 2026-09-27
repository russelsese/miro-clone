import { Router, Request, Response } from 'express';
import {
  signupSchema,
  loginSchema,
  updateProfileSchema,
  resetPasswordRequestSchema,
  resetPasswordSchema,
} from '../../shared/schemas.js';
import {
  createUser,
  getUserByEmail,
  getUserById,
  verifyPassword,
  verifyEmail,
  createPasswordResetToken,
  resetPassword,
  updateUser,
  createGoogleUser,
  getUserByGoogleId,
} from '../db/users.js';
import { getInvitationsForEmail } from '../db/shareLinks.js';
import { addBoardMember } from '../db/boards.js';
import { sendVerificationEmail, sendPasswordResetEmail } from '../services/email.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// Session type augmentation
declare module 'express-session' {
  interface SessionData {
    userId?: string;
  }
}

// Sign up with email/password
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const parsed = signupSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const { email, password, displayName } = parsed.data;

    // Check if email already exists
    const existing = getUserByEmail(email);
    if (existing) {
      return res.status(400).json({
        success: false,
        error: 'Email already registered',
      });
    }

    const { user, verificationToken } = createUser(email, password, displayName);

    // Send verification email (async, don't wait)
    sendVerificationEmail(email, verificationToken).catch(console.error);

    // Process any pending invitations
    const invitations = getInvitationsForEmail(email);
    for (const inv of invitations) {
      addBoardMember(inv.boardId, user.id, inv.role, inv.invitedBy);
    }

    // Create session
    req.session.userId = user.id;

    res.json({
      success: true,
      data: { user },
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to create account',
    });
  }
});

// Log in with email/password
router.post('/login', (req: Request, res: Response) => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const { email, password } = parsed.data;

    const user = verifyPassword(email, password);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password',
      });
    }

    req.session.userId = user.id;

    res.json({
      success: true,
      data: { user },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to log in',
    });
  }
});

// Log out
router.post('/logout', (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({
        success: false,
        error: 'Failed to log out',
      });
    }

    res.clearCookie('connect.sid');
    res.json({ success: true });
  });
});

// Get current user
router.get('/me', requireAuth, (req: Request, res: Response) => {
  const user = getUserById(req.session.userId!);
  if (!user) {
    return res.status(401).json({
      success: false,
      error: 'User not found',
    });
  }

  res.json({
    success: true,
    data: { user },
  });
});

// Update profile
router.patch('/me', requireAuth, (req: Request, res: Response) => {
  try {
    const parsed = updateProfileSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const user = updateUser(req.session.userId!, parsed.data);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    res.json({
      success: true,
      data: { user },
    });
  } catch (err) {
    console.error('Update profile error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to update profile',
    });
  }
});

// Verify email
router.get('/verify-email', (req: Request, res: Response) => {
  const { token } = req.query;

  if (!token || typeof token !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid verification token',
    });
  }

  const user = verifyEmail(token);
  if (!user) {
    return res.status(400).json({
      success: false,
      error: 'Invalid or expired verification token',
    });
  }

  res.json({
    success: true,
    data: { user },
  });
});

// Request password reset
router.post('/reset-password/request', async (req: Request, res: Response) => {
  try {
    const parsed = resetPasswordRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const { email } = parsed.data;
    const token = createPasswordResetToken(email);

    if (token) {
      // Send reset email (async, don't wait)
      sendPasswordResetEmail(email, token).catch(console.error);
    }

    // Always return success to prevent email enumeration
    res.json({
      success: true,
      message: 'If an account exists with that email, a reset link has been sent',
    });
  } catch (err) {
    console.error('Password reset request error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to process request',
    });
  }
});

// Reset password
router.post('/reset-password', (req: Request, res: Response) => {
  try {
    const parsed = resetPasswordSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.errors[0].message,
      });
    }

    const { token, password } = parsed.data;
    const user = resetPassword(token, password);

    if (!user) {
      return res.status(400).json({
        success: false,
        error: 'Invalid or expired reset token',
      });
    }

    res.json({
      success: true,
      data: { user },
    });
  } catch (err) {
    console.error('Password reset error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to reset password',
    });
  }
});

// Google OAuth callback (simplified - in production, use proper OAuth flow)
router.post('/google', async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        success: false,
        error: 'Missing Google credential',
      });
    }

    // In production, verify the credential with Google's API
    // For MVP, we'll decode the JWT payload (not verify - this is for demo only)
    const payloadBase64 = credential.split('.')[1];
    const payload = JSON.parse(Buffer.from(payloadBase64, 'base64').toString());

    const { sub: googleId, email, name, picture } = payload;

    if (!googleId || !email) {
      return res.status(400).json({
        success: false,
        error: 'Invalid Google credential',
      });
    }

    // Check if user exists by Google ID
    let user = getUserByGoogleId(googleId);

    if (!user) {
      // Check if user exists by email
      const existingUser = getUserByEmail(email);
      if (existingUser) {
        // Link Google account to existing user
        // (In production, you might want to confirm this with the user first)
        return res.status(400).json({
          success: false,
          error: 'An account with this email already exists. Please log in with email/password.',
        });
      }

      // Create new user
      user = createGoogleUser(googleId, email, name || email.split('@')[0], picture || null);

      // Process any pending invitations
      const invitations = getInvitationsForEmail(email);
      for (const inv of invitations) {
        addBoardMember(inv.boardId, user.id, inv.role, inv.invitedBy);
      }
    }

    req.session.userId = user.id;

    res.json({
      success: true,
      data: { user },
    });
  } catch (err) {
    console.error('Google auth error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to authenticate with Google',
    });
  }
});

export default router;

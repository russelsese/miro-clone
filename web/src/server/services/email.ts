// Email service using SendGrid
// Falls back to console logging if SENDGRID_API_KEY is not set

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@miro-clone.local';
const APP_URL = process.env.APP_URL || 'http://localhost:5173';

interface EmailParams {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!SENDGRID_API_KEY) {
    // Log email to console in development
    console.log('\n=== EMAIL (dev mode) ===');
    console.log(`To: ${params.to}`);
    console.log(`Subject: ${params.subject}`);
    console.log(`Body:\n${params.text}`);
    console.log('========================\n');
    return true;
  }

  try {
    const sgMail = await import('@sendgrid/mail');
    sgMail.default.setApiKey(SENDGRID_API_KEY);

    await sgMail.default.send({
      to: params.to,
      from: FROM_EMAIL,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

export async function sendVerificationEmail(
  email: string,
  token: string
): Promise<boolean> {
  const verifyUrl = `${APP_URL}/verify-email?token=${token}`;

  return sendEmail({
    to: email,
    subject: 'Verify your email - Miro Clone',
    text: `
Welcome to Miro Clone!

Please verify your email address by clicking the link below:

${verifyUrl}

This link will expire in 24 hours.

If you didn't create an account, you can safely ignore this email.
    `.trim(),
    html: `
      <h1>Welcome to Miro Clone!</h1>
      <p>Please verify your email address by clicking the button below:</p>
      <p>
        <a href="${verifyUrl}" style="background: #4262ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Verify Email
        </a>
      </p>
      <p>Or copy and paste this link: ${verifyUrl}</p>
      <p>This link will expire in 24 hours.</p>
      <p>If you didn't create an account, you can safely ignore this email.</p>
    `,
  });
}

export async function sendPasswordResetEmail(
  email: string,
  token: string
): Promise<boolean> {
  const resetUrl = `${APP_URL}/reset-password?token=${token}`;

  return sendEmail({
    to: email,
    subject: 'Reset your password - Miro Clone',
    text: `
You requested a password reset for your Miro Clone account.

Click the link below to reset your password:

${resetUrl}

This link will expire in 1 hour.

If you didn't request this, you can safely ignore this email.
    `.trim(),
    html: `
      <h1>Reset your password</h1>
      <p>You requested a password reset for your Miro Clone account.</p>
      <p>
        <a href="${resetUrl}" style="background: #4262ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Reset Password
        </a>
      </p>
      <p>Or copy and paste this link: ${resetUrl}</p>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `,
  });
}

export async function sendBoardInviteEmail(
  email: string,
  inviterName: string,
  boardName: string,
  role: string,
  token: string
): Promise<boolean> {
  const inviteUrl = `${APP_URL}/invite/${token}`;

  return sendEmail({
    to: email,
    subject: `${inviterName} invited you to a board - Miro Clone`,
    text: `
${inviterName} has invited you to collaborate on "${boardName}" as a ${role}.

Click the link below to join:

${inviteUrl}

If you don't have an account, you'll be asked to sign up first.
    `.trim(),
    html: `
      <h1>You've been invited!</h1>
      <p><strong>${inviterName}</strong> has invited you to collaborate on "<strong>${boardName}</strong>" as a <strong>${role}</strong>.</p>
      <p>
        <a href="${inviteUrl}" style="background: #4262ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Join Board
        </a>
      </p>
      <p>Or copy and paste this link: ${inviteUrl}</p>
      <p>If you don't have an account, you'll be asked to sign up first.</p>
    `,
  });
}

export async function sendMentionNotificationEmail(
  email: string,
  mentionerName: string,
  boardName: string,
  commentBody: string,
  boardId: string
): Promise<boolean> {
  const boardUrl = `${APP_URL}/board/${boardId}`;

  return sendEmail({
    to: email,
    subject: `${mentionerName} mentioned you in a comment - Miro Clone`,
    text: `
${mentionerName} mentioned you in a comment on "${boardName}":

"${commentBody}"

Click here to view: ${boardUrl}
    `.trim(),
    html: `
      <h1>You were mentioned in a comment</h1>
      <p><strong>${mentionerName}</strong> mentioned you in a comment on "<strong>${boardName}</strong>":</p>
      <blockquote style="border-left: 3px solid #4262ff; padding-left: 12px; margin: 16px 0;">
        ${commentBody}
      </blockquote>
      <p>
        <a href="${boardUrl}" style="background: #4262ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          View Board
        </a>
      </p>
    `,
  });
}

export async function sendAccessRequestEmail(
  ownerEmail: string,
  requesterName: string,
  boardName: string,
  message: string | null,
  boardId: string
): Promise<boolean> {
  const boardUrl = `${APP_URL}/board/${boardId}/settings`;

  return sendEmail({
    to: ownerEmail,
    subject: `${requesterName} requested access to your board - Miro Clone`,
    text: `
${requesterName} has requested access to your board "${boardName}".

${message ? `Message: "${message}"` : ''}

You can approve or deny this request in your board settings:
${boardUrl}
    `.trim(),
    html: `
      <h1>Access Request</h1>
      <p><strong>${requesterName}</strong> has requested access to your board "<strong>${boardName}</strong>".</p>
      ${message ? `<p>Message: "<em>${message}</em>"</p>` : ''}
      <p>
        <a href="${boardUrl}" style="background: #4262ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Review Request
        </a>
      </p>
    `,
  });
}

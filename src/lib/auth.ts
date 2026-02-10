// Simple admin authentication for API routes
// In production, use a proper auth solution (e.g., Clerk, Auth0)

export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'change-this-password'

export function requireAuth(
  handler: (req: any, res: any) => Promise<void>
) {
  return async (req: any, res: any) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const token = authHeader.substring(7)

    if (token !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    return handler(req, res)
  }
}

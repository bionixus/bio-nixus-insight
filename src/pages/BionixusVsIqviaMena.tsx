import { Navigate } from 'react-router-dom';

/**
 * Cannibal URL. Production 301s /bionixus-vs-iqvia-mena → /iqvia-alternative
 * (server.js + vercel.json). This component is a safety net if the SPA still mounts.
 */
export default function BionixusVsIqviaMena() {
  return <Navigate to="/iqvia-alternative" replace />;
}

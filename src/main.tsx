import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./index.css";

function showError(message: string, detail?: string) {
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = `<div style="padding:2rem;font-family:system-ui;max-width:600px;margin:0 auto;">
      <h1 style="color:#c00;">Error</h1>
      <p style="margin:1rem 0;">${message}</p>
      ${detail ? `<pre style="background:#f5f5f5;padding:1rem;overflow:auto;font-size:12px;">${detail}</pre>` : ""}
    </div>`;
  }
}

try {
  const rootEl = document.getElementById("root");
  if (!rootEl) {
    showError("Root element #root not found. Check index.html.");
  } else {
    createRoot(rootEl).render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
  }
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  const detail = err instanceof Error ? err.stack : undefined;
  showError("Failed to load app.", `${message}\n\n${detail ?? ""}`);
  console.error(err);
}

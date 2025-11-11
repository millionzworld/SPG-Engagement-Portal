import { useEffect } from "react";

export default function PreMoveInPortalWireframe() {
  useEffect(() => console.log("[App] render"), []);
  return (
    <div style={{ padding: 24 }}>
      <h1>SPG Portal — Smoke Test</h1>
      <p>If you see this, React mounted correctly.</p>
    </div>
  );
}

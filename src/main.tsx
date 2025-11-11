import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PreMoveInPortalWireframe from "./App";

console.log("[main] boot"); // should appear in console

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PreMoveInPortalWireframe />
  </React.StrictMode>
);

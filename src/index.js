import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import app from "./app";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <app />
  </StrictMode>
);

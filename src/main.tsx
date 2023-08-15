// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
const BASENAME = import.meta.env.VITE_PUBLIC_BASENAME || "/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={BASENAME}>
    <App />
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Root from "./components/root/Root";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

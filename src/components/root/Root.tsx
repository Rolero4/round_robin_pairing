import React from "react";
import { Outlet } from "react-router-dom";
import "./Root.scss";

const Root = () => {
  return (
    <>
      <main className="main-content">
        <Outlet context={{}} />
      </main>
    </>
  );
};

export default Root;

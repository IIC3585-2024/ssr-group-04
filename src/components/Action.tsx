import React from "react";
import "./Action.css";

function Action({ children }: { children?: React.ReactNode }) {
  return <div className="action">{children}</div>;
}

export default Action;

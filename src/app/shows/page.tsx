import React from "react";
import "./page.css";
import Show from "@/components/Show";

function SeriesView() {
  return (
    <div>
      <h1>Shows</h1>
      <div className="show-list">
        <Show />
        <Show />
        <Show />
        <Show />
      </div>
    </div>
  );
}

export default SeriesView;

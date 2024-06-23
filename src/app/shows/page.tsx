import React from "react";
import "./page.css";
import Show from "@/components/Show";

function SeriesView() {
  return (
    <div>
      <h1>Shows</h1>
      <div className="show-list">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index}>
            <a href={`/shows/${index + 1}`}>
              <Show />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeriesView;

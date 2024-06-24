import React from "react";
import "./page.css";
import ShowPreview from "./ShowPreview";
import { Show } from "@/interfaces/Show";

async function SeriesView() {
  const shows = await getShows();

  return (
    <div>
      <h1>Shows</h1>
      <div className="show-list">
        {shows.map((show) => (
          <div key={show.id}>
            <a href={`/shows/${show.id}`}>
              <ShowPreview show={show} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeriesView;

async function getShows(): Promise<Show[]> {
  const response = await fetch("https://api.tvmaze.com/shows?page=1&limit=1");
  const data = await response.json();
  return data;
}

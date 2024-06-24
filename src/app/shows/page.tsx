"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import ShowPreview from "./ShowPreview";
import { IShow } from "@/interfaces/IShow";
import { debounce } from "@/lib/debounce";

function SeriesView() {
  const [shows, setShows] = useState<IShow[]>([]);
  const [search, setSearch] = useState<string | undefined>(undefined);

  useEffect(() => {
    getShows({ query: search }).then((data) => {
      setShows(data);
    });
  }, [search]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h1>Shows</h1>
      <input
        type="text"
        name="Search"
        placeholder="Search..."
        className="search-bar"
        id="Search"
        onChange={debounce(handleSearch, 300)}
      />
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

async function getShows({ query }: { query?: string } = {}): Promise<IShow[]> {
  const params = new URLSearchParams();
  if (query) {
    params.append("q", query);
  }

  const uri = query
    ? `https://api.tvmaze.com/search/shows?${params.toString()}`
    : "https://api.tvmaze.com/shows";
  console.log(uri);

  const response = await fetch(uri);

  let data = await response.json();

  if (query) {
    data = data.map((item: { show: IShow }) => item.show);
  }
  return data;
}

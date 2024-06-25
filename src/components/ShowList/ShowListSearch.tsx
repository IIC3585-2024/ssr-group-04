"use client";

import { IShow } from "@/interfaces/IShow";
import React, { useEffect, useState } from "react";
import "./ShowsList.css";
import LoadingSpinner from "../LoadingSpinner";
import { debounce } from "@/lib/debounce";
import ShowsList from "./ShowsList";

function ShowsListSearch() {
  const [shows, setShows] = useState<IShow[]>([]);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    setLoading(true);
    getShows({ query: search }).then((data) => {
      setShows(data);
      setLoading(false);
    });
  }, [search]);

  return (
    <>
      <input
        type="text"
        name="Search"
        placeholder="Search..."
        className="search-bar"
        id="Search"
        onChange={debounce(handleSearch, 300)}
      />
      {loading ? <LoadingSpinner /> : <ShowsList shows={shows} />}
    </>
  );
}

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

export default ShowsListSearch;

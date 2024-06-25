"use client";

import { IShow } from "@/interfaces/IShow";
import React, { useEffect, useState } from "react";
import "./ShowsList.css";
import LoadingSpinner from "../LoadingSpinner";
import { debounce } from "@/lib/debounce";
import ShowsList from "./ShowsList";

interface IRatingFilter {
  average: {
    min: number;
    max: number;
  };
}

function ShowsListSearch() {
  const [shows, setShows] = useState<IShow[]>([]);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [rating, setRating] = useState<IRatingFilter>({
    average: { min: 0, max: 10 },
  });
  const [loading, setLoading] = useState(true);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleMinimumRating(event: React.ChangeEvent<HTMLInputElement>) {
    setRating({
      average: { ...rating.average, min: parseInt(event.target.value) },
    });
  }

  function handleMaximumRating(event: React.ChangeEvent<HTMLInputElement>) {
    setRating({
      average: { ...rating.average, max: parseInt(event.target.value) },
    });
  }

  useEffect(() => {
    setLoading(true);
    getShows({ query: search, filters: { rating } }).then((data) => {
      setShows(data);
      setLoading(false);
    });
  }, [search, rating]);

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
      <div>Filter By Rating</div>
      <div>
        <label htmlFor="Minimum Rating">Minimum Rating</label>
        <input
          type="number"
          name="Minimum Rating"
          id=""
          value={rating.average.min}
          placeholder="minimum rating"
          onChange={handleMinimumRating}
        />
      </div>
      <div>
        <label htmlFor="Maximum Rating">Maximum Rating</label>
        <input
          type="number"
          name="Maximum Rating"
          id=""
          value={rating.average.max}
          placeholder="maximum rating"
          onChange={handleMaximumRating}
        />
      </div>
      {loading ? <LoadingSpinner /> : <ShowsList shows={shows} />}
    </>
  );
}

async function getShows({
  query,
  filters,
}: { query?: string; filters?: any } = {}): Promise<IShow[]> {
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

  filters = filters || { rating: { average: { min: 0, max: 10 } } };

  data = data.filter((show: IShow) => {
    if (show.rating?.average) {
      return (
        show.rating.average >= filters.rating.average.min &&
        show.rating.average <= filters.rating.average.max
      );
    }
    return false;
  });

  return data;
}

export default ShowsListSearch;

import React from "react";
import "./page.css";
import Show from "./Show";
import { IComment, ISeason, IShow } from "@/interfaces/IShow";

async function Page({ params }: { params: { id: string } }) {
  const show = await getShow(params.id);

  return <Show show={show} />;
}

async function getShow(showId: string): Promise<IShow> {
  const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
  const data = await response.json();

  data.seasons = await getShowSeasons(data.id);

  data.comments = await getShowComments(data.id);

  return data;
}

async function getShowSeasons(showId: number): Promise<ISeason[]> {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${showId}/seasons`
  );
  const data = await response.json();
  return data;
}

async function getShowComments(showId: number): Promise<IComment[]> {
  const response = await fetch(
    `http://localhost:3001/shows/${showId}/comments`
  );
  const data = await response.json();
  return data;
}

export default Page;

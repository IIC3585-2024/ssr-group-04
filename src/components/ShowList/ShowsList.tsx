import ShowPreview from "@/components/ShowList/ShowPreview";
import { IShow } from "@/interfaces/IShow";
import React from "react";
import "./ShowsList.css";

function ShowsList({ shows }: { shows: IShow[] }) {
  return (
    <div className="show-list">
      {shows.map((show) => (
        <div key={show.id}>
          <a href={`/shows/${show.id}`}>
            <ShowPreview show={show} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default ShowsList;

import { IShow } from "@/interfaces/IShow";
import React from "react";
import Image from "next/image";

function ShowSeasons({ show }: { show: IShow }) {
  return (
    <div className="show__seasons">
      {show.seasons.map((season) => (
        <div className="season" key={season.id}>
          <Image
            className="season__image"
            src={season.image?.original || "/placeholder.png"}
            alt={season.name}
            width={210}
            height={295}
          />
          <div className="season__n-episodes">
            {season.episodeOrder} Episodes
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowSeasons;

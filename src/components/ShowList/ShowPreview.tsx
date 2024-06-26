import { IShow } from "@/interfaces/IShow";
import React from "react";
import Image from "next/image";
import LikeShow from "./LikeShow";

function ShowPreview({ show }: { show: IShow }) {
  return (
    <div className="show">
      <Image
        className="show__image"
        src={show.image?.original || "/placeholder.png"}
        alt="How i met your mother"
        loading="lazy"
        width={210}
        height={295}
      />
      <div className="show__footer">
        <div className="show__rating">{show.rating?.average || "N/A"}</div>
        <LikeShow show={show} />
      </div>
    </div>
  );
}

export default ShowPreview;

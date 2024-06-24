import { Show } from "@/interfaces/Show";
import React from "react";
import Image from "next/image";

function ShowPreview({ show }: { show: Show }) {
  return (
    <div className="show">
      <div className="show__image">
        <Image
          src={show.image.original}
          alt="How i met your mother"
          loading="lazy"
          width={210}
          height={295}
        />
      </div>
      <div className="show__rating">{show.rating.average || "N/A"}</div>
    </div>
  );
}

export default ShowPreview;

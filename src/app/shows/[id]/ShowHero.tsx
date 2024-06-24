import { IShow } from "@/interfaces/IShow";
import React from "react";
import Image from "next/image";

function ShowHero({ show }: { show: IShow }) {
  return (
    <div className="show__hero">
      <Image
        src={show.image?.original || ""}
        alt={show.name}
        width={210}
        height={295}
      />
    </div>
  );
}

export default ShowHero;

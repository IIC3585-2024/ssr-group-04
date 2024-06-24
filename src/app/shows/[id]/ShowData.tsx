import { IShow } from "@/interfaces/IShow";
import React from "react";

async function ShowData({ show }: { show: IShow }) {
  return (
    <div className="show__data">
      <div className="n-seasons">
        {show.seasons && `${show.seasons.length} seasons`}
      </div>
      <div className="show__rating">
        Rating: {show.rating?.average ? `${show.rating?.average}/10` : "N/A"}
      </div>
    </div>
  );
}

export default ShowData;

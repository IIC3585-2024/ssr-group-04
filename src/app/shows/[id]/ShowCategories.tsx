import Badge from "@/components/Badge";
import { IShow } from "@/interfaces/IShow";
import React from "react";

function ShowCategories({ show }: { show: IShow }) {
  return (
    <div className="show__categories">
      {show.genres?.map((genre) => (
        <Badge key={genre}>{genre}</Badge>
      ))}
    </div>
  );
}

export default ShowCategories;

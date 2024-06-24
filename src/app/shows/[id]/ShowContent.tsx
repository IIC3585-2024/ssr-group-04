import { IShow } from "@/interfaces/IShow";
import React from "react";

function ShowContent({ show }: { show: IShow }) {
  return (
    <div className="show__content">
      <h1 className="show__name">{show.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
    </div>
  );
}

export default ShowContent;

import React from "react";
import ShowData from "./ShowData";
import ShowActions from "./ShowActions";
import ShowSeasons from "./ShowSeasons";
import ShowCategories from "./ShowCategories";
import ShowHero from "./ShowHero";
import ShowContent from "./ShowContent";
import { IShow } from "@/interfaces/IShow";

function Show({ show }: { show: IShow }) {
  return (
    <div className="show">
      <ShowHero show={show} />
      <ShowData show={show} />
      <ShowCategories show={show} />
      <ShowContent show={show} />
      <ShowActions />
      <ShowSeasons show={show} />
    </div>
  );
}

export default Show;

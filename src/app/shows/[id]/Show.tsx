import React from "react";
import ShowData from "./ShowData";
import ShowActions from "./ShowActions";
import ShowSeasons from "./ShowSeasons";
import ShowCategories from "./ShowCategories";
import ShowHero from "./ShowHero";
import ShowContent from "./ShowContent";

function Show() {
  return (
    <div className="show">
      <ShowHero />
      <ShowData />
      <ShowCategories />
      <ShowContent />
      <ShowActions />
      <ShowSeasons />
    </div>
  );
}

export default Show;

import React from "react";
import ShowData from "./ShowData";
import ShowActions from "./ShowActions";
import ShowSeasons from "./ShowSeasons";
import ShowCategories from "./ShowCategories";
import ShowHero from "./ShowHero";

function Show() {
  return (
    <div className="show">
      <ShowHero />
      <ShowData />
      <ShowCategories />
      <h1 className="show__name">How i met your mother</h1>
      <p className="show__description">
        A father recounrd to his children - through a series of flashbacks - the
        journey and his four best friends too leading up to him meeting their
        mother.
      </p>
      <ShowActions />
      <ShowSeasons />
    </div>
  );
}

export default Show;

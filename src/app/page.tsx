import React, { useEffect, useState } from "react";
import "./page.css";
import ShowsListSearch from "@/components/ShowList/ShowListSearch";

function SeriesView() {
  return (
    <div>
      <h1>Shows</h1>
      <ShowsListSearch />
    </div>
  );
}

export default SeriesView;

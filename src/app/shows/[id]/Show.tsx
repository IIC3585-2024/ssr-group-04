"use client";

import React, { useState } from "react";
import ShowData from "./ShowData";
import ShowActions from "./ShowActions";
import ShowSeasons from "./ShowSeasons";
import ShowCategories from "./ShowCategories";
import ShowHero from "./ShowHero";
import ShowContent from "./ShowContent";
import ShowComments from "./ShowComments";
import { IComment, IShow } from "@/interfaces/IShow";

function Show({ show }: { show: IShow }) {
  const [comments, setComments] = useState(show.comments);

  const addComment = (comment: IComment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="show">
      <ShowHero show={show} />
      <ShowData show={show} />
      <ShowCategories show={show} />
      <ShowContent show={show} />
      <ShowActions show={show} onCommentAdd={addComment} />
      <ShowSeasons show={show} />
      <br />
      <hr />
      <br />
      <ShowComments comments={comments} />
    </div>
  );
}

export default Show;

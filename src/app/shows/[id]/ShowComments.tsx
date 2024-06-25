"use client";
import { IComment, IShow } from "@/interfaces/IShow";
import React, { useState } from "react";

function ShowComments({ comments }: { comments: IComment[] }) {
  return (
    <div className="show__comments">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment__author">{comment.author}:</div>
          <div className="comment__content">{comment.content}</div>
        </div>
      ))}
    </div>
  );
}

export default ShowComments;

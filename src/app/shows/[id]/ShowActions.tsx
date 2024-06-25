"use client";

import React from "react";
import Action from "@/components/Action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faXmark } from "@fortawesome/free-solid-svg-icons";
import { IComment, IShow } from "@/interfaces/IShow";
import { useUser } from "@auth0/nextjs-auth0/client";

function ShowActions({
  show,
  onCommentAdd,
}: {
  show: IShow;
  onCommentAdd: (comment: IComment) => any;
}) {
  const [content, setContent] = React.useState("");
  const { user } = useUser();

  const handleComment = async () => {
    const data = {
      showId: show.id,
      content,
      author: user?.name,
    };

    try {
      const response = await fetch("http://localhost:3001/comments", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const comment = await response.json();
        onCommentAdd(comment);
        setContent("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="show__actions">
      <Action />
      <Action>
        <button popoverTarget="comment-modal">
          <FontAwesomeIcon icon={faComment} color="black"></FontAwesomeIcon>
        </button>
      </Action>
      <Action />
      <Action />

      <div popover="" id="comment-modal">
        <div className="modal">
          <div className="modal__content">
            <button popoverTarget="comment-modal">
              <FontAwesomeIcon icon={faXmark} color="white"></FontAwesomeIcon>
            </button>
            <h2>Add a comment</h2>
            <textarea
              placeholder="Add a comment"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button
              className="button"
              popoverTarget="comment-modal"
              onClick={handleComment}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowActions;

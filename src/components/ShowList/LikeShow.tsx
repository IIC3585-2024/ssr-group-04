"use client";

import { IShow } from "@/interfaces/IShow";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function LikeShow({ show }: { show: IShow }) {
  const { user, isLoading } = useUser();
  const [isLiked, setIsLiked] = React.useState(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!user) {
    return null;
  }

  const handleAdd = async (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setIsLiked(true);

    const response = await fetch(`http://localhost:3001/saved-shows`, {
      method: "POST",
      body: JSON.stringify({ showId: show.id, userId: user.sub }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setIsLiked(false);
    }
  };

  return (
    <div onClick={handleAdd}>
      {isLiked ? (
        <FontAwesomeIcon icon={faHeart} color="red" />
      ) : (
        <FontAwesomeIcon icon={faHeart} color="white" />
      )}
    </div>
  );
}

export default LikeShow;

import { getSession } from "@auth0/nextjs-auth0";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import React from "react";

async function UserShowsView() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    throw new Error("User not found");
  }

  const shows = await getUserShows(user.sub);

  return <div>UserShowsView: {JSON.stringify(shows)}</div>;
}

// Get user shows from http://localhost:3001/user/shows
async function getUserShows(userId: string) {
  const response = await fetch(`http://localhost:3001/users/${userId}/shows`);

  const userShows = await response.json();

  const shows = await Promise.all(
    userShows.map(async (show: any) => {
      const showResponse = await fetch(
        `https://api.tvmaze.com/shows/${show.id}`
      );
      return showResponse.json();
    })
  );

  return shows;
}
export default UserShowsView;

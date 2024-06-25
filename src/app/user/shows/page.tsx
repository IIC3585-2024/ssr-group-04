import ShowsList from "@/components/ShowList/ShowsList";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

async function UserShowsView() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    throw new Error("User not found");
  }

  const shows = await getUserShows(user.sub);

  return (
    <div>
      <h1>My Shows</h1>
      <ShowsList shows={shows} />
    </div>
  );
}

async function getUserShows(userId: string) {
  const response = await fetch(
    `http://localhost:3001/users/${userId}/saved-shows`
  );

  const userShows = await response.json();

  const shows = await Promise.all(
    userShows.map(async (show: any) => {
      const showResponse = await fetch(
        `https://api.tvmaze.com/shows/${show.showId}`
      );
      return showResponse.json();
    })
  );

  return shows;
}
export default withPageAuthRequired(UserShowsView);

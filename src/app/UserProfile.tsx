import React from "react";
import "./UserProfile.css";
import { getSession } from "@auth0/nextjs-auth0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
export async function UserProfile() {
  const session = await getSession();

  const user = session?.user;

  if (!user)
    return (
      <a href="/api/auth/login">
        <FontAwesomeIcon icon={faUser} />
      </a>
    );

  return (
    <a href="/api/auth/logout">
      <FontAwesomeIcon icon={faRightFromBracket} />
    </a>
  );
}

export default UserProfile;

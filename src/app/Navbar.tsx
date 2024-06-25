import React from "react";
import "./Navbar.css";
import UserProfile from "./UserProfile";

function Navbar() {
  return (
    <nav>
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <a href="/user/shows">My Shows</a>
      </div>
      <div>
        <UserProfile />
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "./page.css";

function Show() {
  return (
    <div>
      <div className="show">
        <div className="show__hero">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/6df82c724040bf539ead0acc1a0dd0bd830cc315d55a852f7e193f2569d6e4ac._SX1080_FMjpg_.jpg"
            alt="How i met your mother hero"
          />
        </div>
        <div className="show__data">
          <div className="n-seasons">9 seasons</div>
          <div className="show__rating">8.3</div>
        </div>
        <div className="show__categories">
          <div className="badge">Comedy</div>
          <div className="badge">Romance</div>
        </div>
        <h1 className="show__name">How i met your mother</h1>
        <p className="show__description">
          A father recounrd to his children - through a series of flashbacks -
          the journey and his four best friends too leading up to him meeting
          their mother.
        </p>
        <div className="action-bar">
          <div className="action"></div>
          <div className="action"></div>
          <div className="action"></div>
          <div className="action"></div>
        </div>
        <div className="show__seasons">
          <div className="season">
            <div className="season__name">Season 1</div>
            <div className="season__n-episodes">22 Episodes</div>
          </div>
          <div className="season">
            <div className="season__name">Season 2</div>
            <div className="season__n-episodes">22 Episodes</div>
          </div>
          <div className="season">
            <div className="season__name">Season 3</div>
            <div className="season__n-episodes">22 Episodes</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;

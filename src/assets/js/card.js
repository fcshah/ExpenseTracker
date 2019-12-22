import React from "react";
import elliot from "../img/elliot.jpg";

const HomeCard = function() {
  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="center aligned header">Finance Tracker</div>
        <div className="center aligned description">
          <p>The best finance tracking App ever</p>
        </div>
      </div>
      <div className="extra content">
        <div className="center aligned author">
          <img className="ui avatar image" src={elliot}></img>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

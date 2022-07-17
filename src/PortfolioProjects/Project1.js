import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./MyProjects.css";
const Project1 = () => {
  return (
    <Fragment>
      <div className="project1-big-div container">
        <div className="project1-first-caset">
          <h1 className="project1-first-caset-header">Guess the Number </h1>
          <div className="project1-view-point project1-background ">
            <h1 className="project1-view-point-header">View the project</h1>
            <Link to="/guessthenumber" className="project1-view-point-link">
              View
            </Link>
          </div>
        </div>
        <div className="project1-second-caset">
          <h1 className="project1-second-caset-header">About</h1>
          <p className="project1-second-caset-paragraph">
            Guess the Number is a browser mini-game where somebody can click and
            try to guess the number that is generated automatically, a number
            between 1 and 20. This mini-game has a high score and the best you
            can do is, obviously, 20. You can play it right now by clicking
            "View".
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Project1;

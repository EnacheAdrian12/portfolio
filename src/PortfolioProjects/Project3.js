import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./MyProjects.css";
const Project3 = () => {
  return (
    <Fragment>
      <div className="project1-big-div">
        <div className="project1-first-caset">
          <h1 className="project1-first-caset-header">Juice Website</h1>
          <div className="project1-view-point project3-background">
            <h1 className="project1-view-point-header">View the project</h1>
            <Link to="/fruitswebsite" className="project1-view-point-link">
              View
            </Link>
          </div>
        </div>
        <div className="project1-second-caset">
          <h1 className="project1-second-caset-header">About</h1>
          <p className="project1-second-caset-paragraph">
            Juice Website is the marketing project for the bar "The Juice
            Factory". This project is about two brothers that opened a small
            fresh juice shop at the age of 64. In this project, I wanted to
            maximise the use of my design skills without using JavaScript in any
            way possible.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Project3;

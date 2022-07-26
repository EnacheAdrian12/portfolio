import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./MyProjects.css";
const Project2 = () => {
  return (
    <Fragment>
      <div className="project1-big-div">
        <div className="project1-first-caset">
          <h1 className="project1-first-caset-header">Google Copy</h1>
          <div className="project1-view-point project2-background">
            <h1 className="project1-view-point-header">View the project</h1>
            <Link to="/googlecopy" className="project1-view-point-link ">
              View
            </Link>
          </div>
        </div>
        <div className="project1-second-caset">
          <h1 className="project1-second-caset-header">About</h1>
          <p className="project1-second-caset-paragraph">
            Google Copy is a replica of Google's first page. I've been watching
            a lot of youtube videos about web development and all of them say
            for the beginning you have to try to copy some websites. Then I was
            thinking about what website I should copy and the big idea that came
            to my mind was " Let's copy Google's first page" and here I am.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Project2;

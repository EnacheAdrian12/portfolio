import React, { Fragment, useState } from "react";
import { Link} from "react-router-dom";
import Project1 from "../PortfolioProjects/Project1";
import Project2 from "../PortfolioProjects/Project2";
import Project3 from "../PortfolioProjects/Project3";

import "./Projects.css";

const Projects = () => {
  const [style1, SetStyle1] = useState("caset-link down");
  const [style2, SetStyle2] = useState("caset-link up");
  const [style3, SetStyle3] = useState("caset-link up");
  const[changeProject, SetChangeProject] = useState(1);

  const Link1Handler = () => {
    SetStyle1("caset-link down");
    SetStyle2("caset-link up");
    SetStyle3("caset-link up");
    SetChangeProject(1);
  };
  const Link2Handler = () => {
    SetStyle1("caset-link up");
    SetStyle2("caset-link down");
    SetStyle3("caset-link up");
    SetChangeProject(2);
  };
  const Link3Handler = () => {
    SetStyle1("caset-link up");
    SetStyle2("caset-link up");
    SetStyle3("caset-link down");
    SetChangeProject(3);
  };

 
  return (
    <Fragment>
      <div className="projects container2">
        <h1 className="projects-h1">My Projects</h1>

        <div className="projects-div">
          <div className="caset">
            <Link to="/portfolio" className={style1} onClick={Link1Handler}>
              PROJECT 1
            </Link>
          </div>
          <div className="caset">
            <Link to="/portfolio" className={style2} onClick={Link2Handler}>
              PROJECT 2
            </Link>
          </div>
          <div className="caset">
            <Link to="/portfolio" className={style3} onClick={Link3Handler}>
              PROJECT 3
            </Link>
          </div>
        </div>

        <div className="projects-route">
          {changeProject === 1 ? (
            <Project1 />
          ) : changeProject === 2 ? (
            <Project2 />
          ) : (
            <Project3 />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;

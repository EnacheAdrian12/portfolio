import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdOutgoingMail, MdPhone } from "react-icons/md";


const Footer = () => {
  const goToAbout = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  const goToProjects = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };
  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const instagram = "https://www.instagram.com/adi_enachee/";
  const linkedln = "https://www.linkedin.com/in/adrian-enache-4b6639232/";

  return (
    <Fragment>
      <hr className="footer-hr" />
      <div className="footer-big-div">
        <div className="footer-small-div">
          <h1 className="header-small-div">Sections</h1>
          <Link to="" onClick={goUp} className="footer-link">
            Home
          </Link>
          <br />
          <Link to="" onClick={goToAbout} className="footer-link">
            About
          </Link>
          <br />
          <Link to="" onClick={goToProjects} className="footer-link">
            Projects
          </Link>
        </div>
        <div className="footer-small-div">
          <h1 className="header-small-div">Social</h1>
          <a href={linkedln} className="footer-link">
            Linkedln
          </a>
          <br />
          <a href={instagram} className="footer-link">
            Instagram
          </a>
        </div>
        <div className="footer-small-div">
          <h1 className="header-small-div">Contact</h1>
          <h1 className="footer-link-contact">
            <MdOutgoingMail /> adrian.enache0220@gmail.com
          </h1>
          <h1 className="footer-link-contact">
            <MdPhone /> 0762612978
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;

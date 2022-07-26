import React, { Fragment } from "react";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="caset-div">
          <div className="about-caset">
            <h1 className="about-caset-title">About me </h1>
            <p className="about-caset-paragraph">
              &nbsp;&nbsp; Hello, my name is Adrian, a 20 years old
              entry-level web developer, who is eager to approach new challenges
              with creativity and discipline. My ability to adapt to different
              tasks, allows me to respond to the demands of this field without
              problems. Even though I don't have a lot of experience, I take my
              work seriously and I am eager to learn a lot of new skills that
              will benefit me in my career as a web developer.
            </p>
          </div>

          <div className="figurine"></div>
        </div>
        <div className="caset-div">
          <div className="about-caset-2">
            <h1 className="about-caset-title ">My skills</h1>
            <p className="about-caset-paragraph caset2">
              <div className="myskills-caset">
                <p>⭐HTML</p>
                <p>⭐CSS</p>
                <p>⭐JAVASCRIPT</p>
                <p>⭐REACT FRAMEWORK</p>
              </div>
            </p>
          </div>
          <div className="figurine-2"></div>
        </div>
        <div className="caset-div">
          <div className="about-caset-3">
            <h1 className="about-caset-title ">Why I.T. ?</h1>
            <p className="about-caset-paragraph">
              &nbsp;&nbsp;&nbsp;Since childhood I was fascinated by everything
              that happens on the computer and I wanted to find out more.
              Initially I was playing a lot of games and I wanted to start
              making them myself. When I graduated high school I gained an
              attraction for websites and started creating them myself.With a
              lot of work and perseverance, I have reached a level of knowledge
              that I feel confident in and I can say that most of the projects I
              start I finish successfully.
            </p>
          </div>
          <div className="figurine-3"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

import React, { useState} from "react";
import "./Name.css";

const Name = () => {
    const [title,setTitle] = useState(false);
    window.onscroll = function () {onScrollFunction()}

    const onScrollFunction = ()=>{
      if(document.body.scrollTop >100 || document.documentElement.scrollTop >100){
        setTitle(true)
      }else{
        setTitle(false);
      }
    }
  return (
    <div className="big-div container" >
      <div className={title === true ? "hidden loader-1" : "visible loader-1"}>
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
      <div className={title === true ? " logo-div-scrolling" : "logo-div"}>
        <h1 className={title === true ? " name-scrolled" : "visible name"}>
          Enache Adrian
        </h1>
        <h2 className={title === true ? "hidden sentance" : "visible sentance"}>
          Code simple
        </h2>
      </div>
      <div className={title === true ? "hidden loader-2" : "visible loader-2"}>
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
};

export default Name;

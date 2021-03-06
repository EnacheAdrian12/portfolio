import Name from "./WebsiteComponents/Name";
import "./App.css";
import { Fragment } from "react";
import About from "./WebsiteComponents/About";
import Projects from "./WebsiteComponents/Projects";
import Footer from "./WebsiteComponents/Footer";
import { Routes, Route } from "react-router-dom";
import GuessNumber from "./ProjectsFolder/Guess the Number/GuessTheNumber";
import GoogleCopy from "./ProjectsFolder/Google Copy/GoogleCopy";
import FruitsWebsite from "./ProjectsFolder/FruitsWebsite/FruitsWebsite";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/portfolio"
          element={
            <div className="screen-changes"> 
              <div className="container">
                <Name />
                <About />
                <Projects />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/guessthenumber" element={<GuessNumber />} />
        <Route path="googlecopy" element={<GoogleCopy />} />
        <Route path="fruitswebsite" element={<FruitsWebsite />} />
      </Routes>
    </Fragment>
  );
}

export default App;

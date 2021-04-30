import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  workEx,
  achievements,
  repos,
  skills,
  getInTouch,
  articles,
  publications,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import Articles from "./components/home/Articles";
import Publication from "./components/home/Publication";
import WorkEx from "./components/home/WorkEx"
import Achievements from "./components/home/Achievements"
import GetInTouch from "./components/home/GetInTouch.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {/* <div style={{background: "-webkit-linear-gradient(150deg, #029CF5, #02d9f5, #02d9f5, #02d9f5, #02d9f5, #029CF5)"}}> */}
      <div style={{background: "-webkit-linear-gradient(90deg, #000000, #1d2027, #1d2027, #000000)"}}>
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      
      {workEx.show && (
        <WorkEx
          heading={workEx.heading}
          draupIcon={workEx.draupIcon}
          ceeriIcon={workEx.ceeriIcon}
          smIcon={workEx.smIcon}
          fkIcon={workEx.fkIcon}
        />
      )}
      <div id="stars"></div>
      {achievements.show && (
        <Achievements
          heading={achievements.heading}
          fkIcon={achievements.fkIcon}
          euIcon={achievements.euIcon}
          tghIcon={achievements.tghIcon}
          woflramIcon={achievements.woflramIcon}
          buIcon={achievements.buIcon}
          mhrdIcon={achievements.mhrdIcon}
        />
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      <div id="stars"></div>
      {publications.show && (
        <Publication
          heading={publications.heading}
        />
      )}
      {articles.show && (
        <Articles
          heading={articles.heading}
          username={articles.username}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
        />
      )}
      {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </div>
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      {/* <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer> */}
    </BrowserRouter>
  );
};

export default App;

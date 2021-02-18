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
import Footer from "./components/Footer";
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
      {/* <div className="bgstyle"> */}
      {/* <div style={{background: 'linear-gradient(65deg, #0d0a0b 0%, #000428 20%, #004e92 50%, #02aab0 80%, #00cdac 100%)',
          position:'center',}}> */}
      <div style={{background: 'linear-gradient(105deg, #029CF5, #15EDED, #15EDED, #029CF5)'}}>
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
          softSkills={skills.softSkills}
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
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;

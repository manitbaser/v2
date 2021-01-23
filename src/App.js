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
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import Articles from "./components/home/Articles";
import WorkEx from "./components/home/WorkEx"
import Achievements from "./components/home/Achievements"
import GetInTouch from "./components/home/GetInTouch.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
    <div style={{background: `linear-gradient(275deg,${mainBody.bodyColors})`,
          backgroundSize: "100%, 100%",
          position:'center',}}>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
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
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
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

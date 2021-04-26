import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { mainBody, achievements, workEx, articles, repos, about, skills, publications } from "../editable-stuff/config.js";
import Nav from "react-bootstrap/Nav";

const Navigation = React.forwardRef((props, ref) => {
  const navbarMenuRef = React.useRef();


  return (
    <Navbar
      ref={navbarMenuRef}
      // className={` fixed-top navbar-white`}
      className="fixed-top"
      expand="lg"
    >
      <Navbar.Brand className={`nav-link lead navbarbuttons`}  href={process.env.PUBLIC_URL + "/#home"}>
      {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-md-auto">
          {about.show && (
            <Nav.Link
              className={`nav-link lead navbarbuttons`} 
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
            <center>
              About
              </center>
            </Nav.Link>
          )}
          {workEx.show && (
            <Nav.Link
              className={`nav-link lead navbarbuttons`} 
              href={process.env.PUBLIC_URL + "/#workex"}
            >
            <center>
              WorkEx
              </center>
            </Nav.Link>
          )}
          {achievements.show && (
            <Nav.Link
              className={`nav-link lead navbarbuttons`} 
              href={process.env.PUBLIC_URL + "/#achievements"}
            >
            <center>
              Achievements
              </center>
            </Nav.Link>
          )}
          {repos.show && (
            <Nav.Link
              className={`nav-link lead navbarbuttons`} 
              href={process.env.PUBLIC_URL + "/#projects"}
            >
            <center>
              Projects
              </center>
            </Nav.Link>
          )}
          {publications.show && (
            <Nav.Link
              className={`nav-link lead navbarbuttons`} 
              href={process.env.PUBLIC_URL + "/#publications"}
            >
            <center>
              Publications
              </center>
            </Nav.Link>
          )}
          {articles.show && (
            <Nav.Link
              className={`nav-link lead navbarbuttons`} 
              href={process.env.PUBLIC_URL + "/#articles"}
            >
            <center>
              Articles
              </center>
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link
            className={`nav-link lead navbarbuttons`} 
              href={process.env.PUBLIC_URL + "/#skills"}
            >
            <center>
              Skills
              </center>
            </Nav.Link>
          )}
          <Nav.Link
            className={`nav-link lead navbarbuttons`} 
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
          <center>
            Resume
            </center>
          </Nav.Link>
      </Nav>  
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
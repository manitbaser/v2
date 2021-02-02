import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import { mainBody, achievements, workEx, articles, repos, about, skills } from "../editable-stuff/config.js";
import Nav from "react-bootstrap/Nav";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className={`nav-link lead ${ !isTop ? "navbarbuttons text-dark text-secondary" : "text-secondary"}`} href={process.env.PUBLIC_URL + "/#home"}>
      {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-md-auto">
          {about.show && (
            <Nav.Link
              className={`nav-link lead ${ !isTop ? "navbarbuttons text-dark text-secondary" : "text-secondary"}`}
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
            <center>
              About
              </center>
            </Nav.Link>
          )}
          {workEx.show && (
            <Nav.Link
              className={`nav-link lead ${ !isTop ? "navbarbuttons text-dark text-secondary" : "text-secondary"}`}
              href={process.env.PUBLIC_URL + "/#workex"}
            >
            <center>
              WorkEx
              </center>
            </Nav.Link>
          )}
          {achievements.show && (
            <Nav.Link
              className={`nav-link lead ${ !isTop ? "navbarbuttons text-dark text-secondary" : "text-secondary"}`}
              href={process.env.PUBLIC_URL + "/#achievements"}
            >
            <center>
              Achievements
              </center>
            </Nav.Link>
          )}
          {repos.show && (
            <Nav.Link
              className={`nav-link lead ${ !isTop ? "navbarbuttons text-dark text-secondary" : "text-secondary"}`}
              href={process.env.PUBLIC_URL + "/#projects"}
            >
            <center>
              Projects
              </center>
            </Nav.Link>
          )}
          <Nav.Link
            className={`nav-link lead ${ !isTop ? "navbarbuttons text-dark text-secondary" : "text-secondary"}`}
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
          <center>
            Resume
            </center>
          </Nav.Link>
          {articles.show && (
            <Nav.Link
              className={`nav-link lead ${ !isTop ? "navbarbuttons text-dark text-secondary" : "text-secondary"}`}
              href={process.env.PUBLIC_URL + "/#articles"}
            >
            <center>
              Articles
              </center>
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link
            className={`nav-link lead ${ !isTop ? "navbarbuttons text-dark text-secondary" : "text-secondary"}`}
              href={process.env.PUBLIC_URL + "/#skills"}
            >
            <center>
              Skills
              </center>
            </Nav.Link>
          )}
      </Nav>  
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
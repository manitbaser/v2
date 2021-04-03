import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import wave from "../../editable-stuff/wave.png";


const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    const styles = {
      paperContainer: {
          backgroundImage: `url(${wave})`,
      }
    };

    return (
  <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container
          className="text-center"
        >
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist className="lead typist" cursor={{ show: false }}>
            {" "}
            {message}
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          {/* <br></br><br></br><br></br><br></br> */}
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            <i className="fas fa-angle-double-down"></i>
          </a>
        </Container>
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </Jumbotron>
      );
    }
  );
  
  export default MainBody;
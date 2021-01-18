import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Particles from "react-tsparticles";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
  <div style={{position:'center',}}>
  <div style={{position: 'absolute', left: 0, right: 0, alignItems: 'center',alignSelf: 'center'}}>
  <Jumbotron
        fluid
        id="home"
        className="title bg-transparent min-vh-100 d-flex align-items-center m-0"
      >
        <Container>
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
          <br></br><br></br><br></br><br></br>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            <i className="fas fa-angle-double-down"></i>
          </a>
        </Container>
      </Jumbotron>
    </div>
    <div style={{position:'center'}}>
    <Jumbotron
      style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
      fluid
      className="title bg-transparent bgstyle text-light align-content-center align-items-center flex-wrap m-0"
    >
    <div id="stars"></div>
      <Particles
          id="tsparticles"
          width='100vw' height="92vh"
          options={{
            fpsLimit: 60,
            // interactivity: {
            //   detectsOn: "canvas",
            //   events: {
            //     onClick: {
            //       enable: true,
            //       mode: "push",
            //     },
            //     onHover: {
            //       enable: true,
            //       mode: "repulse",
            //     },
            //     resize: true,
            //   },
            //   modes: {
            //     bubble: {
            //       distance: 400,
            //       duration: 2,
            //       opacity: 0.8,
            //       size: 40,
            //     },
            //     push: {
            //       quantity: 4,
            //     },
            //     repulse: {
            //       distance: 200,
            //       duration: 0.4,
            //     },
            //   },
            // },
            particles: {
              color: {
                value: "#9be6f0",
              },
              links: {
                color: "#9be6f0",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        </Jumbotron>
    </div>
  </div>  
    );
  }
);

export default MainBody;

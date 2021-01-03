import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const GetInTouch = ({ gradient, heading, message, email }) => {
  return (
    <Jumbotron
    id="home"
    style={{
      background: `linear-gradient(136deg,${gradient})`,
      backgroundSize: "1200% 1200%",
    }}
    className="text-light"
  >
  <Container className="text-center" >
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
    </Container>
    </Jumbotron>
  );
};

export default GetInTouch;

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const GetInTouch = ({ heading, message, email }) => {
  return (
  <Container className="text-center" >
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
    <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/manitbaser"
          aria-label="My GitHub"
        >
          Manit Baser
        </a>{" "}
        using <i className="fab fa-react" />
    </Container>
  );
};

export default GetInTouch;

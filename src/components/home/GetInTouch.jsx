import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <Jumbotron fluid className="bg-transparent text-center text-light m-0">
    <Container>
      <h2 className="display-4 pb-3">{heading}</h2>
      <p className="lead pb-3">
        {message} <a href={`mailto:${email}`}>{email}</a>.
      </p>
    <i className="fas fa-code" style={{color: "#00cdac"}}/> with <i className="fas fa-heart" style={{color: "#ed4264"}}/> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/manitbaser"
          aria-label="My GitHub"
          style={{color: "#6bccf3"}}
        >
          Manit Baser
        </a>{" "}
        using <i className="fab fa-react"  style={{color: "#02aab0"}}/>
        
    </Container>
    </Jumbotron>
  );
};

export default GetInTouch;

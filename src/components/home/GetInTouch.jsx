import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const GetInTouch = ({ heading, message, icons, email }) => {
  return (
    <Jumbotron fluid className="text-center text-light m-0 trapezium">
    <Container>
    <center>
      <h2 className="display-4 pb-3">{heading}</h2>
      <br></br><br></br>
      <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/manitbaser"
              >
                <i className="fab fa-github fa-3x socialicons" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/manit.baser/"
              >
                <i className="fab fa-facebook fa-3x socialicons" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/manit-baser/"
              >
                <i className="fab fa-linkedin fa-3x socialicons" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://manitbaser.medium.com"
              >
                <i className="fab fa-medium fa-3x socialicons" />
              </a>
          </div>
          <br></br><br></br>
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
        {/* <br></br><br></br><br></br><br></br> */}
        </center>
    </Container>
    </Jumbotron>
  );
};

export default GetInTouch;

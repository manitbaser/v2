import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Publication = ({ heading}) => {
  return (
    <Jumbotron fluid id="publications" className="bg-transparent text-light min-vh-100 m-0">
    <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>

    <Col md={6}>
      <Card className="card p-2">
        <Card.Body>
        <Card.Title as="h5" style={{color: '#00cdac'}}>Real Time Foreground Segmentation for Video Sequences with Dynamic Background</Card.Title>
        <Card.Title as="h6" style={{color: '#02aab0'}}>2020 IEEE 17th India Council International Conference (INDICON)</Card.Title>
        {/* <hr /> */}
        <Card.Text>Modeling background and segmentation of foreground objects are techniques required for various video surveillance and related applications. We propose an intensity and colour based background modeling technique for pixel level foreground segmentation of video sequences with dynamic background. It models...</Card.Text>
        <center>
          <a href="https://ieeexplore.ieee.org/document/9342267" style={{color: '#ffedbc'}} role="button" className="btn btn-outline-dark">
        <i className="fas fa-rocket" /> Read More
      </a>
      </center>
      <br/>
        </Card.Body>
      </Card>
    </Col>

    <Col md={6}>
      <Card className="card p-2">
        <Card.Body>
        <Card.Title as="h5" style={{color: '#00cdac'}}>Automatic Threat Detection in Baggage Security Imagery using Deep Learning Models</Card.Title>
        <Card.Title as="h6" style={{color: '#02aab0'}}>2020 IEEE 15th International Conference on Industrial and Information Systems (ICIIS)</Card.Title>
        {/* <hr /> */}
        <Card.Text>Automating object detection for surveillance purpose and threat detection is beneficial as it may compensate for the human error and will save time, which is of significant economic value. For the end-to-end classification process and feature extraction, the CNN approach requires large amounts of data...</Card.Text>
        <center>
          <a href="https://ieeexplore.ieee.org/document/9342691" style={{color: '#ffedbc'}} role="button" className="btn btn-outline-dark">
        <i className="fas fa-rocket" /> Read More
      </a>
      </center>
      <br/>
        </Card.Body>
      </Card>
    </Col>
        </Row>
        {/* </center> */}
        </Container>
    </Jumbotron>
  );
};


export default Publication;

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkEx = ({ heading, draupIcon, dnIcon, ceeriIcon, smIcon}) => {
  return (
    <Jumbotron fluid id="workex" className="bg-transparent m-0">
        <h2 className="display-4 pb-5 text-white text-center">{heading}</h2>
        <center>
    <Col md={6}>
      <Card className="card shadow-lg bg-transparent text-center rounded">
        <Card.Body>
          
          <div class="embed-responsive">
          <img width="400" className="shadow-lg rounded" title="comp_3.gif" src="https://cdn.dribbble.com/users/1980856/screenshots/4760116/comp_3.gif" alt="Comp 3" />
    </div>
    <br/>
    <br/>
    <Card.Title as="h5">Incoming Software Development Engineer at Flipkart </Card.Title>
        </Card.Body>
      </Card>
    
    </Col>
   
    <br/>
    <Col md={10}>
    <Row>
    <Col md={6}>
      <Card className="card shadow-lg  p-3 mb-5 rounded">
        <Card.Body>
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={draupIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br>Draup</Card.Title>
          <Card.Title as="h6">Software Development Intern</Card.Title>
          <Card.Title as="h6">Bangalore</Card.Title>
          <Card.Title as="h6">July, 2020 - December, 2020</Card.Title>
          {/* <Card.Text></Card.Text> */}
        </Card.Body>
      </Card>
      </Col>
      <Col md={6}>
      <Card className="card shadow-lg  p-3 mb-5 rounded">
        <Card.Body>
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={dnIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br>DataNest Ventures</Card.Title>
          <Card.Title as="h6">Co-Founder</Card.Title>
          <Card.Title as="h6">Gurgaon</Card.Title>
          <Card.Title as="h6">March, 2020 - June, 2020</Card.Title>
          {/* <Card.Text></Card.Text> */}
        </Card.Body>
      </Card>
      </Col>
      <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 rounded">
        <Card.Body>
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={ceeriIcon}
                // alt="profilepicture"
                height={100}
                // height={imgSize}
              /><br></br><br></br>Central Electronics Engineering Research Institute</Card.Title>
          <Card.Title as="h6">Deep Learning Research Intern</Card.Title>
          <Card.Title as="h6">Pilani</Card.Title>
          <Card.Title as="h6">January, 2020 - May, 2020</Card.Title>
          {/* <Card.Text></Card.Text> */}
        </Card.Body>
      </Card>
      </Col>
      <Col md={6}>
      <Card className="card shadow-lg  p-3 mb-5 rounded">
        <Card.Body>
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={smIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br>Sun Mobility</Card.Title>
          <Card.Title as="h6">Software Development Intern</Card.Title>
          <Card.Title as="h6">Bangalore</Card.Title>
          <Card.Title as="h6">May, 2019 - July, 2019</Card.Title>
          {/* <Card.Text></Card.Text> */}
        </Card.Body>
      </Card>
      </Col>
    </Row>
    </Col>
        </center>
    </Jumbotron>
  );
};


export default WorkEx;

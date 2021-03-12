import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import WorkExTemplate from "./WorkExTemplate";
import { Container, Row, Col } from "react-bootstrap";

const WorkEx = ({ heading, draupIcon, ceeriIcon, smIcon, fkIcon}) => {
  return (
    <Jumbotron fluid id="workex" className="bg-transparent min-vh-100 m-0">
    <Container fluid className="timeline-section">
          <Container>
            <Row className="timeline">
            <Col md={5} className="text-center align-self-center">
            <p className="display-4">{heading}</p>
            </Col>
            <Col md={7}>
                <WorkExTemplate
                  title="Incoming Software Development Engineer"
                  company="Flipkart"
                  startdate="July, 2021"
                  img={fkIcon}
                />
                <WorkExTemplate
                  title="Software Development Intern"
                  company="Draup"
                  startdate="July, 2020"
                  enddate="Dec, 2020"
                  img={draupIcon}
                />
                <WorkExTemplate
                  title="Deep Learning Research Intern"
                  company="CSIR-CEERI"
                  enddate="May, 2020"
                  startdate="Jan, 2020"
                  img={ceeriIcon}
                />
                <WorkExTemplate
                  title="Software Development Intern"
                  company="Sun Mobility"
                  startdate="May, 2019"
                  enddate="July, 2019"
                  img={smIcon}
                />
                </Col>
            </Row>
          </Container>
        </Container>
    </Jumbotron>
  );
};


export default WorkEx;


 
 

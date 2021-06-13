import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import WorkExTemplate from "./WorkExTemplate";
import { Container, Row, Col } from "react-bootstrap";

const WorkEx = ({ heading, draupIcon, DNIcon, smIcon, fkIcon}) => {
  return (

    <Jumbotron fluid id="workex" className="bg-transparent min-vh-100 m-0 d-flex text-light align-items-center flex-wrap">
    <Container fluid className="timeline-section">
          <Container>
            <Row className="timeline">
            <Col md={5} className="text-center align-self-center">
            <p className="display-4">{heading}</p>
            </Col>
            <Col md={7}>
                <WorkExTemplate
                  title="Software Development Engineer"
                  company="Flipkart"
                  startdate="June,2021"
                  enddate="Present"
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
                  title="Co-Founder"
                  company="DataNest Ventures"
                  enddate="July, 2020"
                  startdate="Feb, 2020"
                  img={DNIcon}
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


 
 

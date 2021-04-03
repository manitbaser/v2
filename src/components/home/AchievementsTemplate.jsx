import React from "react";
import {Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function AchievementsTemplate(props) {
  return (
    <div className="timeline-item text-light achievements">
    <div className="p-2 achievementsCard rounded">
    <Row>
        <Col md={1.5} className="align-self-center">
            <img
                className="rounded"
                src={props.img}
                width={100}
                height={100}
                style={{
                backgroundColor: 'white',}}
            />
        </Col>

        <Col md={10} className="align-self-center" style={{color: "#999999"}}>
      <h6 className="timeline-title" style={{color: "#02aab0"}}>
          {props.title1} | {props.title2} | {props.title3}
      </h6>
      
          {props.text}
          </Col>
          </Row>
          {/* <Row> */}
      {/* <Col md={0.2} align="right" className="align-self-center"> */}
      <center><a
            className="btn btn-outline-dark button-dark text-light"
            href={props.link}
            role="button"
          >
           <i class="fas fa-rocket" style={{color: '#00cdac'}}></i>
          </a>
          </center>
      {/* </Col>  */}
      {/* </Row> */}
      
      </div>
    </div>
  );
}

export default AchievementsTemplate;


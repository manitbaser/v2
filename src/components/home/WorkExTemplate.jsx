import React from "react";
import {Row, Col } from "react-bootstrap";

function WorkExTemplate(props) {
  return (
    <div className="timeline-item">
    <Row className="timeline-box">
    <Col md={2} align="left" className="align-self-center">
        <em className="timeline-date">{props.startdate}</em>
        {props.enddate && <em className="timeline-date"> -<br></br>{props.enddate}</em>}
      </Col>
        <Col md={2} className="align-self-center">
            <img
                className="rounded"
                src={props.img}
                width={80}
                height={80}
                style={{
                backgroundColor: 'white',}}
            />
        </Col>
        <Col md={1}></Col>

        <Col md={7} className="align-self-center">
      <h4 className="timeline-title">
          {props.company}
      </h4>
      <h6>
        {props.title}
      </h6>
      
      </Col>
      
      </Row>
    </div>
  );
}

export default WorkExTemplate;


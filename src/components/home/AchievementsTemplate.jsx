import React from "react";
import {Row, Col } from "react-bootstrap";

function AchievementsTemplate(props) {
  return (
    <div className="timeline-item text-light">
    <div className="p-2 rounded">
    <Row>
    <Col></Col>
        <Col md={1.5}>
            <img
                className="rounded"
                src={props.img}
                width={100}
                height={100}
                style={{
                backgroundColor: 'white',}}
            />
            <br></br>
            <br></br>
            <center><a
            className="btn btn-lg button_achievements"
            href={props.link}
            role="button"
          >
           <i class="fas fa-rocket"></i>
          </a>
          </center>
        </Col>

        <Col md={9} style={{color: "#aaaaaa"}}>
      <h6 className="timeline-title" style={{color: "#00fafa"}}>
          {props.title1} | {props.title2} | {props.title3}
      </h6>
      
          {props.text}
          </Col>
          <Col></Col>
          </Row>
          {/* <Row> */}
      {/* <Col md={0.2} align="right" className="align-self-center"> */}
      
      {/* </Col>  */}
      {/* </Row> */}
      
      </div>
    </div>
  );
}

export default AchievementsTemplate;


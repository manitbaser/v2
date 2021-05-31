import React from "react";
import {Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function AchievementsTemplate(props) {
  return (
<Card className="achievementscard">
<Row>
<Col md={4}>
<center>
         <img
                className="achievements_images"
                src={props.img}
                width={100}
                height={100}
                style={{
                backgroundColor: 'white',}}
            />
            </center>
            </Col>
            <Col md={8} className="align-self-center">
           <h6>{props.title1}<br></br>{props.title2}<br></br>{props.title3}</h6>
           </Col>
           </Row>
           <p>{props.text}
           <center>
           {props.title4}    <a
            className="btn btn-lg button_achievements"
            href={props.link}
            role="button"
          >
           <i class="fas fa-rocket"></i>
          </a>
          </center></p>
           
         
    </Card>
  );
}

export default AchievementsTemplate;

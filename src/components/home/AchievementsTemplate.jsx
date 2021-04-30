import React from "react";
import {Row, Col } from "react-bootstrap";

function AchievementsTemplate(props) {
  return (
<div class="level1">
       <div class="face face1">
         <div class="level2">
         <img
                className="rounded achievements_images"
                src={props.img}
                width={100}
                height={100}
                style={{
                backgroundColor: 'white',}}
            />
           <h3>{props.title1}<br></br>{props.title2}<br></br>{props.title3}</h3>
          <a className="down_achievements_button">
            <i className="fas  fa-angle-double-down"></i>
          </a>
         </div>
       </div>
       <div class="face face2">
         <div className="text-light">
           <p>{props.text}</p>
           <center><a
            className="btn btn-lg button_achievements"
            href={props.link}
            role="button"
          >
           <i class="fas fa-rocket"></i>
          </a>
          </center>
         </div>
       </div>
    </div>
  );
}

export default AchievementsTemplate;


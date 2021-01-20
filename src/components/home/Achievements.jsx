import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Achievements = ({ heading, fkIcon, euIcon, tghIcon, woflramIcon, buIcon, mhrdIcon}) => {
  return (
    <Jumbotron fluid id="achievements" className="bg-transparent m-0">
        <h2 className="display-4 pb-5 text-white text-center">{heading}</h2>
        <center>
   
    <br/>
    <Col md={10}>
    <Row>
    <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={fkIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">GRiD 2.0</Card.Title>
          <Card.Title as="h6">National Finalists | Flipkart</Card.Title>
          <a href="https://d8it4huxumps7.cloudfront.net/uploads/certificates/flipkart_grid2/national_finalists_software-14.pdf" target=" _blank" className="btn btn-outline-secondary">
        <i className="fas fa-external-link-square-alt" />
      </a>
          <Card.Text>Secured a position in the top 3 teams in Noise Detection & Cancellation track and top 9 teams in the Grand Finale with more than 22,000 participants.</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={euIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">#EUvsVirus</Card.Title>
          <Card.Title as="h6">Global Challenge Winners | European Commission</Card.Title>
          <Card.Title as="h6">Team CoviFight</Card.Title>
          <a href="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress" target=" _blank" className="btn btn-outline-secondary">
        <i className="fas fa-external-link-square-alt" />
      </a>
          <Card.Text>Secured second position in the Real-time Communication and Prevention challenge. Organised by the European Innovation Council, with over 9000 participants and 2000 teams. The META Group awarded us with award money for our solution.
</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={tghIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">The Global Hack</Card.Title>
          <Card.Title as="h6">Global Finalists | Garage48</Card.Title>
          <Card.Title as="h6">Team CoviFight</Card.Title>
          <a href="https://theglobalhack.com/results/" target=" _blank" className="btn btn-outline-secondary">
        <i className="fas fa-external-link-square-alt" />
      </a>
          <Card.Text>Secured a position in the top 6 teams in the Crisis Response Track. Aimed to develop ideas to face the COVID- 19 crisis, with over 6000 participants from 100 countries.</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
        <div class="embed-responsive">
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={buIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">The Resiliency Challenge</Card.Title>
          <Card.Title as="h6">Winners | Boston University</Card.Title>
          <Card.Title as="h6">Team CoviFight</Card.Title>
          <a href="https://devpost.com/software/covi_fight" target=" _blank" className="btn btn-outline-secondary">
        <i className="fas fa-external-link-square-alt" />
      </a>
          <Card.Text>Aimed at catalyzing student innovation in response to the unprecedented situation facing colleges and communities in the wake of the coronavirus pandemic. We secured the second position in the competition.</Card.Text>
      </div>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={woflramIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">COVID19 Hack Challenge</Card.Title>
          <Card.Title as="h6">The Wolfram Award | Wolfram Research</Card.Title>
          <Card.Title as="h6">Team CoviFight</Card.Title>
          <a href="https://devpost.com/software/covi_fight" target=" _blank" className="btn btn-outline-secondary">
          
        <i className="fas fa-external-link-square-alt" />
      </a>
          <Card.Text>Aimed to develop and launch open-source code using AI and/or blockchain to combat COVID-19, reduce risks from future infectious outbreaks, and cope with the COVID-19 pandemic situation. The award is a year of Wolfram One Personal Edition and a one-year subscription to Wolfram Alpha Pro.</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="shadow-lg rounded"
                src={mhrdIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">MHRD Samadhan Challenge</Card.Title>
          <Card.Title as="h6">Top 15 Student Innovators | Ministry of Human Resource Development, India</Card.Title>
          <a href="https://www.mic.gov.in/assets/wp_images/Shortlisted%20Teams%20for%20MHRD%20-%20Samadhan.pdf" target=" _blank" className="btn btn-outline-secondary">
        <i className="fas fa-external-link-square-alt" />
      </a>
          <Card.Text>The participants in this challenge were to design, simulate and develop such measures that can be made available to the government agencies, health services, hospitals and other services for quick solutions to the Coronavirus epidemic and other such calamities.</Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    </Col>
        </center>
    </Jumbotron>
  );
};


export default Achievements;

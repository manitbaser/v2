import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AchievementsTemplate from "./AchievementsTemplate";
import Container from "react-bootstrap/Container";

const Achievements = ({ heading, fkIcon, euIcon, tghIcon, woflramIcon, buIcon, mhrdIcon}) => {
  return (
    <Jumbotron fluid className="bg-transparent bg-dark text-light min-vh-100 m-0" id="achievements">
        <Container fluid>
            <p className="display-4 text-center text-light align-self-center">{heading}</p>
            <Row>
              <Col md={6}>
                <AchievementsTemplate
                  title1="GRiD 2.0"
                  title2="National Finalist"
                  title3="Flipkart"
                  link="https://d8it4huxumps7.cloudfront.net/uploads/certificates/flipkart_grid2/national_finalists_software-14.pdf"
                  img={fkIcon}
                  text="Secured a position in the top 3 teams in Noise Detection & Cancellation track and top 9 teams in the Grand Finale with more than 22,000 participants."
                />
              </Col>
              <Col md={6}>
                <AchievementsTemplate
                  title1="#EUvsVirus"
                  title2="Global Challenge Winners"
                  title3="European Commission"
                  link="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress"
                  img={euIcon}
                  text="Team CoviFight | Secured second position in the Real-time Communication and Prevention track. Organised by the European Innovation Council, with over 9000 participants. The META Group awarded us with award money."
                />
              </Col>
              </Row>
              <Row>
              <Col md={6}>
                <AchievementsTemplate
                  title1="The Global Hack"
                  link="https://theglobalhack.com/results/"
                  title2="Global Finalists"
                  title3="Garage48"
                  img={tghIcon}
                  text="Team CoviFight | Secured a position in the top 6 teams in the Crisis Response Track. Aimed to develop ideas to face the COVID- 19 crisis, with over 6000 participants from 100 countries."
                />
                </Col>
              <Col md={6}>
                <AchievementsTemplate
                  title1="The Resiliency Challenge"
                  text="Team CoviFight | Aimed at catalyzing student innovation in response to the unprecedented situation facing colleges and communities in the wake of the coronavirus pandemic. We secured the second position in the competition."
                  title2="Winners"
                  title3="Boston University"
                  link="https://devpost.com/f20170370?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  img={buIcon}
                />
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                <AchievementsTemplate
                  title1="COVID19 Hack Challenge"
                  title2="The Wolfram Award"
                  title3="Wolfram Research"
                  text="Team CoviFight | Aimed to develop and launch open-source code using AI and/or blockchain to combat COVID-19, reduce risks from future infectious outbreaks, and cope with the COVID-19 pandemic situation."
                  img={woflramIcon}
                  link="https://devpost.com/f20170370?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                />
                </Col>
                <Col md={6}>
                <AchievementsTemplate
                  title1="MHRD Samadhan Challenge"
                  text="Participants in this challenge were to design, simulate and develop measures that can be made available to government agencies and health services for quick solutions to the Covid-19 epidemic and other calamities."
                  title2="Top 15 Student Innovators"
                  title3="MHRD, India"
                  link="https://www.mic.gov.in/assets/wp_images/Shortlisted%20Teams%20for%20MHRD%20-%20Samadhan.pdf"
                  img={mhrdIcon}
                />
                </Col>
            </Row>
          </Container>
        {/* <center>
   
    <br/>
    <Col md={10}>
    <Row>
    <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="rounded"
                src={fkIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">GRiD 2.0</Card.Title>
          <Card.Title as="h6">National Finalists | Flipkart</Card.Title>
          <Card.Text>Secured a position in the top 3 teams in Noise Detection & Cancellation track and top 9 teams in the Grand Finale with more than 22,000 participants.</Card.Text>
          <a
            className="btn btn-outline-light text-dark"
            href="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress"
            role="button"
          >
           <i class="fas fa-rocket"></i>
          </a>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="rounded"
                src={euIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">#EUvsVirus</Card.Title>
          <Card.Title as="h6">Global Challenge Winners | European Commission</Card.Title>
          <Card.Title as="h6">Team CoviFight</Card.Title>
          <Card.Text>Secured second position in the Real-time Communication and Prevention challenge. Organised by the European Innovation Council, with over 9000 participants and 2000 teams. The META Group awarded us with award money for our solution.
          </Card.Text>
          <a
            className="btn btn-outline-light text-dark"
            href="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress"
            role="button"
          >
           <i class="fas fa-rocket"></i>
          </a>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="rounded"
                src={tghIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">The Global Hack</Card.Title>
          <Card.Title as="h6">Global Finalists | Garage48</Card.Title>
          <Card.Title as="h6">Team CoviFight</Card.Title>
          <Card.Text>Secured a position in the top 6 teams in the Crisis Response Track. Aimed to develop ideas to face the COVID- 19 crisis, with over 6000 participants from 100 countries.</Card.Text>
          <a
            className="btn btn-outline-light text-dark"
            href="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress"
            role="button"
          >
           <i class="fas fa-rocket"></i>
          </a>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
        <div className="embed-responsive">
          <Card.Title as="h6"><img
                className="rounded"
                src={buIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">The Resiliency Challenge</Card.Title>
          <Card.Title as="h6">Winners | Boston University</Card.Title>
          <Card.Title as="h6">Team CoviFight</Card.Title>
          <Card.Text>Aimed at catalyzing student innovation in response to the unprecedented situation facing colleges and communities in the wake of the coronavirus pandemic. We secured the second position in the competition.</Card.Text>
          <a
            className="btn btn-outline-light text-dark"
            href="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress"
            role="button"
          >
           <i class="fas fa-rocket"></i>
          </a>
      </div>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="rounded"
                src={woflramIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">COVID19 Hack Challenge</Card.Title>
          <Card.Title as="h6">The Wolfram Award | Wolfram Research</Card.Title>
          <Card.Title as="h6">Team CoviFight</Card.Title>
          <Card.Text>Aimed to develop and launch open-source code using AI and/or blockchain to combat COVID-19, reduce risks from future infectious outbreaks, and cope with the COVID-19 pandemic situation. The award is a year of Wolfram One Personal Edition and a one-year subscription to Wolfram Alpha Pro.</Card.Text>
          <a
            className="btn btn-outline-light text-dark"
            href="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress"
            role="button"
          >
           <i class="fas fa-rocket"></i>
          </a>
        </Card.Body>
      </Card>
      </Col>
      <Col md={4}>
      <Card className="card p-3">
        <Card.Body>
          <Card.Title as="h6"><img
                className="rounded"
                src={mhrdIcon}
                // alt="profilepicture"
                // width={100}
                height={100}
              /><br></br><br></br></Card.Title>
          <Card.Title as="h5">MHRD Samadhan Challenge</Card.Title>
          <Card.Title as="h6">Top 15 Student Innovators | Ministry of Human Resource Development, India</Card.Title>
          <Card.Text>The participants in this challenge were to design, simulate and develop such measures that can be made available to the government agencies, health services, hospitals and other services for quick solutions to the Coronavirus epidemic and other such calamities.</Card.Text>
          <a
            className="btn btn-outline-light text-dark"
            href="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress"
            role="button"
          >
           <i class="fas fa-rocket"></i>
          </a>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    </Col>
        </center>
     */}
    </Jumbotron>
  );
};


export default Achievements;

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AchievementsTemplate from "./AchievementsTemplate";
import Container from "react-bootstrap/Container";

const Achievements = ({ heading, fkIcon, euIcon, tghIcon, woflramIcon, buIcon, mhrdIcon}) => {
  return (
    //  <Jumbotron className=" d-flex align-items-center flex-wrap">
    // <div className="jumbotron bg-transparent min-vw-100 jumbotron-fluid m-0">

    <Jumbotron fluid className="bg-transparent text-light min-vh-100 m-0 d-flex align-items-center flex-wrap" id="achievements">
        <Container fluid>
        <center>
            <p className="display-4 text-center text-light align-self-center">{heading}</p>
            <Row className="achievementsrow" >
            {/* <Col md={1}></Col> */}
              <Col md={6} className="achievementscolumnleft">
                <AchievementsTemplate
                  title1="GRiD 2.0"
                  title2="National Finalist"
                  title3="Flipkart"
                  link="https://d8it4huxumps7.cloudfront.net/uploads/certificates/flipkart_grid2/national_finalists_software-14.pdf"
                  img={fkIcon}
                  text="Secured a position in the top 3 teams in Noise Detection & Cancellation track and top 9 teams in the Grand Finale with more than 22,000 participants."
                />
              </Col>
              {/* <Col md={1}></Col> */}
              {/* <Col md={1}></Col> */}
              <Col md={6} className="achievementscolumnright">
                <AchievementsTemplate
                  title1="#EUvsVirus"
                  title2="Global Challenge Winners"
                  title3="European Commission"
                  link="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress"
                  img={euIcon}
                  text="Team CoviFight | Secured second position in the Real-time Communication and Prevention track. Organised by the European Innovation Council, with over 9000 participants. The META Group awarded us with award money."
                />
              </Col>
              {/* <Col md={1}></Col> */}
              </Row>
              <Row className="achievementsrow" >
              {/* <Col md={1}></Col> */}
              <Col md={6} className="achievementscolumnleft">
                <AchievementsTemplate
                  title1="The Global Hack"
                  link="https://theglobalhack.com/results/"
                  title2="Global Finalists"
                  title3="Garage48"
                  img={tghIcon}
                  text="Team CoviFight | Secured a position in the top 6 teams in the Crisis Response Track. Aimed to develop ideas to face the COVID- 19 crisis, with over 6000 participants from 100 countries."
                />
                </Col>
                <Col md={6} className="achievementscolumnright">
                <AchievementsTemplate
                  title1="The Resiliency Challenge"
                  text="Team CoviFight | Aimed at catalyzing student innovation in response to the unprecedented situation facing colleges and communities in the wake of the coronavirus pandemic. We secured the second position in the competition."
                  title2="Winners"
                  title3="Boston University"
                  link="https://devpost.com/f20170370?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  img={buIcon}
                />
                </Col>
                {/* <Col md={1}></Col> */}
                </Row>
                <Row className="achievementsrow" >
                {/* <Col md={1}></Col> */}
                <Col md={6} className="achievementscolumnleft">
                <AchievementsTemplate
                  title1="COVID19 Hack Challenge"
                  title2="The Wolfram Award"
                  title3="Wolfram Research"
                  text="Team CoviFight | Aimed to develop and launch open-source code using AI and/or blockchain to combat COVID-19, reduce risks from future infectious outbreaks, and cope with the COVID-19 pandemic situation."
                  img={woflramIcon}
                  link="https://devpost.com/f20170370?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                />
                </Col>
                <Col md={6} className="achievementscolumnright">
                <AchievementsTemplate
                  title1="MHRD Samadhan Challenge"
                  text="Participants in this challenge were to design, simulate and develop measures that can be made available to government agencies and health services for quick solutions to the Covid-19 epidemic and other calamities."
                  title2="Top 15 Student Innovators"
                  title3="MHRD, India"
                  link="https://www.mic.gov.in/assets/wp_images/Shortlisted%20Teams%20for%20MHRD%20-%20Samadhan.pdf"
                  img={mhrdIcon}
                />
                </Col>
                {/* <Col md={1}></Col> */}
            </Row>
            </center>
          </Container>

    </Jumbotron>
  );
};


export default Achievements;

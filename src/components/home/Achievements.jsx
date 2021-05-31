import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AchievementsTemplate from "./AchievementsTemplate";
import Container from "react-bootstrap/Container";

const Achievements = ({ heading, fkIcon, euIcon, tghIcon, woflramIcon, buIcon, ABIcon, mhrdIcon}) => {
  return (

    <Jumbotron fluid className="bg-transparent min-vh-100 m-0 d-flex align-items-center flex-wrap" id="achievements">
        <Container>
        <p className="display-4 text-light text-center align-self-center">{heading}</p>
            <Row>
            <Col>
                <AchievementsTemplate
                  title1="GRiD 2.0"
                  title2="National Finalist"
                  title3="Flipkart"
                  link="https://d8it4huxumps7.cloudfront.net/uploads/certificates/flipkart_grid2/national_finalists_software-14.pdf"
                  img={fkIcon}
                  text="Secured a position in the top 3 teams in Noise Detection & Cancellation track and top 9 teams in the Grand Finale with more than 22,000 participants."
                />
            
            </Col>
            <Col>
                <AchievementsTemplate
                  title1="Maverick 2.0 Botathon"
                  title2="2nd Runner-Up"
                  title3="AB InBev"
                  title4="Team UnScript"
                  link="https://dare2compete.com/submissions-round/round-3-technical-prototype-submission-21979"
                  img={ABIcon}
                  text="Secured Second Runner-Up position in the Botathon's National Grand Finale, with more than 500 teams, and won a cash prize for our product."
                />
            
            </Col>
            <Col>
                <AchievementsTemplate
                  title1="#EUvsVirus"
                  title2="Global Challenge Winners"
                  title3="European Commission"
                  title4="Team CoviFight"
                  link="https://devpost.com/software/covifight?ref_content=user-portfolio&ref_feature=in_progress"
                  img={euIcon}
                  text="Secured second position in the Real-time Communication and Prevention track. Organised by the European Innovation Council, with over 9000 participants. The META Group awarded us with award money."
                />
            </Col>
            </Row>
            {/* </div> */}
            {/* <div class="L1"> */}
            <br></br>
            <Row>
            <Col>
                <AchievementsTemplate
                  title1="Maverick 2.0 Hackathon"
                  title2="National Finalists"
                  title3="AB InBev"
                  title4="Team UnScript"
                  link="https://dare2compete.com/submissions-round/round-3-technical-prototype-submission-21978"
                  img={ABIcon}
                  text="Secured a position in the top 9 teams in the Hackathon's National Grand Finale, with more than 750 teams, and showcased our product to business leaders of AB InBev."
                />
            </Col>
            <Col>
                <AchievementsTemplate
                  title1="The Global Hack"
                  link="https://theglobalhack.com/results/"
                  title2="Global Finalists"
                  title3="Garage48"
                  title4="Team CoviFight"
                  img={tghIcon}
                  text="Secured a position in the top 6 teams in the Crisis Response Track. Aimed to develop ideas to face the COVID- 19 crisis, with over 6000 participants from 100 countries."
                />
            </Col>
            <Col>
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
            <br></br>
            <Row>
            <Col>
                <AchievementsTemplate
                  title1="The Resiliency Challenge"
                  title4="Team CoviFight"
                  text="Aimed at catalyzing student innovation in response to the unprecedented situation facing colleges and communities in the wake of the coronavirus pandemic. We secured the second position in the competition."
                  title2="Runner-Up"
                  title3="Boston University"
                  link="https://devpost.com/f20170370?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  img={buIcon}
                />
            </Col>
            <Col>
                <AchievementsTemplate
                  title1="COVID19 Hack Challenge"
                  title2="The Wolfram Award"
                  title3="Wolfram Research"
                  title4="Team CoviFight"
                  text="Aimed to develop and launch open-source code using AI and/or blockchain to combat COVID-19, reduce risks from future infectious outbreaks, and cope with the COVID-19 pandemic situation."
                  img={woflramIcon}
                  link="https://devpost.com/f20170370?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                />
            </Col>
            <Col></Col>
            </Row>
                {/* </div> */}
          </Container>





    </Jumbotron>
  );
};


export default Achievements;

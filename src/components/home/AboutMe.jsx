import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <Jumbotron fluid id="aboutme" className="bg-transparent text-light min-vh-100 m-0 d-flex align-items-center flex-wrap">
    <div className="jumbotron bg-transparent min-vw-100 jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center align-content-center">
              <div className="gradient_border_aboutme">
              <img
                className="shadow-lg aboutme_img"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
              </div>
          </div>

          <div className={`col-lg-${"7"}`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
            <br></br><br></br>
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn button_resume btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                  // style={{color: '#00cdac'}}
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
    </Jumbotron>
  );
};

export default AboutMe;

import React from "react";

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
    <div id="aboutme" className="jumbotron aboutme jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="shadow-lg rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn btn-lg text-dark button btn-outline-light"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

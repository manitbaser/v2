// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  // gradientColors: "#12b8ce, #0ba4af, #0b7baf, #0b58af, #053d6d, #022747, #000428, #00010c, #190638, #351a61, #7e2047, #c92f6f, #cb2d3e, #e7795e, #ff9b11, #FFC371",
  gradientColors: "#00cdac, #02aab0, #004e92, #000428, #351a61, #7e2047, #ed4264, #ffedbc",
  // bodyColors: "#4DCCC6, #96E4DF",
  firstName: "Manit",
  middleName: "",
  lastName: "Baser",
  message: "Senior, BITS Pilani | Developer | Deep Learning Enthusiast",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/manitbaser",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/manit.baser/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/manit-baser/",
    },
    {
      image: "fa-medium",
      url: "https://manitbaser.medium.com",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/manitbaser.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/manitbaser.png"),
  imageSize: 375,
  message:
    "My name is Manit Baser. I’m a final year undergraduate at Birla Institute of Technology and Science, Pilani, India, pursuing B.E. (Hons.) in Electrical and Electronics. I am intrigued by the applications of deep learning and software development to tackle real-world problems, and I am determined to continuously learn and grow and make the world a better place using my knowledge and experience.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const workEx = {
  show: true,
  heading: "Work Experience",
  draupIcon: require("../editable-stuff/draup.jpg"),
  ceeriIcon: require("../editable-stuff/ceeri.jpg"),
  smIcon: require("../editable-stuff/sun.png"),
  fkIcon: require("../editable-stuff/flipkart.png"),
};

const achievements = {
  show: true,
  heading: "Achievements",
  fkIcon: require("../editable-stuff/flipkart.png"),
  euIcon: require("../editable-stuff/EU.jpg"),
  tghIcon: require("../editable-stuff/tgh.png"),
  woflramIcon: require("../editable-stuff/wolfram.png"),
  buIcon: require("../editable-stuff/bu.jpg"),
  mhrdIcon: require("../editable-stuff/mhrd.jpg"),
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "manitbaser",
  reposLength: 0,
  specificRepos: ["CoviFight", "Foreground-Segmentation-for-Video-Sequences-with-Dynamic-Background", "manitbaser.github.io", "Smart-Lighting-System-Proteus", "Bingo", "Signed-Wallace-Multiplier"],
};

const articles = {
  show: true,
  heading: "Articles",
  username: "manitbaser",
};

const publications = {
  show: true,
  heading: "Publications",
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Django", value: 85 },
    // { name: "Backend Development", value: 75 }
    { name: "Flask", value: 80 },
    // { name: "SQL", value: 70 },
    { name: "Data Structures", value: 90 },
    { name: "C++", value: 90 },
    { name: "Deep Learning", value: 75 },
    { name: "JavaScript", value: 60 },
    { name: "MATLAB", value: 70 },
    // { name: "React", value: 65 },
    // { name: "HTML/CSS", value: 60 },
    // { name: "C#", value: 80 },
  ],
  // softSkills: [
  //   { name: "Goal-Oriented", value: 80 },
  //   { name: "Collaboration", value: 90 },
  //   { name: "Positivity", value: 75 },
  //   { name: "Adaptability", value: 85 },
  //   { name: "Problem Solving", value: 75 },
  //   { name: "Empathy", value: 90 },
  //   { name: "Organization", value: 70 },
  //   { name: "Creativity", value: 90 },
  // ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please feel free to email me at",
  email: "manitb06@gmail.com",
};


export { achievements, workEx, navBar, articles, publications, mainBody, about, repos, skills, getInTouch };

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#008192,#006492, #004e92, #053d6d, #022747, #000428, #00010c, #190638, #351a61, #563264, #804685, #a43bac, #c9318f, #c92f6f, #cb2d3e, #CB3066, #e96443, #ff9b11, #FFC371",
  firstName: "Manit",
  middleName: "",
  lastName: "Baser",
  message: "Senior, BITS Pilani | Backend Developer | Deep Learning Enthusiast",
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
    "My name is Manit Baser. I’m a final year undergraduate in Birla Institute of Technology and Science, Pilani, India, pursuing B.E. (Hons.) in Electrical and Electronics. I am intrigued by the applications of deep learning and software development to tackle real-world problems, and I am determined to continuously learn and grow and make the world a better place using my knowledge and experience.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "manitbaser", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["CoviFight", "NNFL-Assignment-AlexNet", "Signed-Wallace-Multiplier", "Smart-Lighting-System-Proteus"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/manitbaser.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/manitbaser.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
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
    { name: "JavaScript", value: 50 },
    { name: "MATLAB", value: 75 },
    // { name: "React", value: 65 },
    // { name: "HTML/CSS", value: 60 },
    // { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please feel free to email me at",
  email: "manitb06@gmail.com",
  gradientColors: "#008192,#006492, #004e92, #053d6d, #022747, #000428, #00010c, #190638, #351a61, #563264, #804685, #a43bac, #c9318f, #c92f6f, #cb2d3e, #CB3066, #e96443, #ff9b11, #FFC371",
};

// // Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };

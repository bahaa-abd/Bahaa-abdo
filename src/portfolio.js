/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bahaa Alden Abdo",
  title: "Hi all, I'm Bahaa",
  subTitle: emoji(
    "A passionate Backend  Developer 🚀 having an experience of building Web applications with  NestJs / Nodejs / ExpressJs / TypeScript / JavaScript some other cool libraries and frameworks and have some FrontEnd experience using ReactJs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LpaY777vm5ZpYkWf-FNcCyL7UqR-iJVg/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bahaa-alden",
  gmail: "samerabood195@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100011475199047",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly APIs for your web and mobile applications"),
    emoji("⚡ Know how to deal with Sql like postgres and noSql like MongoDB ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "icon-typescript"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "icon-mongodb"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Aleppo University",
      logo: require("./assets/images/AleppoUn.png"),
      subHeader: "IT Engineering",
      desc: "4th year",
      duration: "September 2019 - now"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "My Nodejs Projects",
  projects: [
    {
      image: require("./assets/images/BioGRAM.png"),
      projectName: "BioGram",
      projectDesc: "Chat and find new friends ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://biogram.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo-green.png"),
      projectName: "Natours",
      projectDesc: "Site for booking tours",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://natoursita.onrender.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+963950513746",
  email_address: "samerabood195@gmail.com"
};

// Twitter Section

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};

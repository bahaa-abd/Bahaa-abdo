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
  username: "Bahaa Eddin Abdo",
  title: "Hi all, I'm Bahaa",
  subTitle: emoji(
    "A passionate Backend  Developer 🚀 having an experience of building Web applications with  NestJs / Nodejs / ExpressJs / TypeScript / JavaScript some other cool libraries and frameworks and have some FrontEnd experience using ReactJs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/13jTADVwaqD-P-FgKeIK4s6hjvqU8ARya/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bahaa-alden",
  gitlab: "https://gitlab.com/bahaa-alden",
  instagram: "https://www.instagram.com/bahaa_eddin_2001",
  gmail: "bahaaeddinabdo@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100011475199047",
  linkedin: "https://www.linkedin.com/in/bahaa-alden-abdo-622075252/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER WITH STRONG API, ARCHITECTURE, AND AUTOMATION EXPERIENCE",
  skills: [
    emoji("⚡ JavaScript, TypeScript, Node.js, NestJS, and REST API architecture"),
    emoji("⚡ MongoDB, PostgreSQL, Mongoose, TypeORM, and Prisma"),
    emoji("⚡ Microservices, Domain-Driven Design (DDD), Socket.io, and real-time systems"),
    emoji("⚡ Git workflows, Docker, Jira, Trello, and team collaboration"),
    emoji("⚡ Automation scripts with Bash, PowerShell, and Node.js"),
    emoji("⚡ React.js, Next.js, CSS, Sass, Material UI, ShadCN, Stripe, and HyperPay")
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
      desc: "Graduated form IT Engineering Faculty at Aleppo University with a GPA 78.5%",
      duration: "September 2019 - September 2024"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
export const workExperiences = {
  experience: [
    {
      company: "Kaiali Group",
      companyUrl: "https://kaiali.net/",
      desc: "A scalable SaaS-based digital services platform offering social media, gaming, subscriptions, and digital payment solutions.",
      date: "10-2025 -> 06-2026",
      companylogo: require("./assets/images/kaiali.png"),
      role: "Backend Developer"
    },
    {
      company: "Damatag",
      desc: "Damatag is a registered Turkish company, headquartered in Istanbul, working as Internet software developers and consultants",
      date: "20-03-2024 -> 15-03-2025",
      companylogo: require("./assets/images/damatag.jpg"),
      role: "Backend Developer"
    }
  ],
  display: true
};
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
      image: require("./assets/images/live-gold.webp"),
      projectName: "LiveGold",
      projectDesc:
        "The first application in Saudi Arabia for tracking gold prices 24/7, providing precise and real-time updates on local and global markets, helping store owners and investors make accurate decisions.",
      technologies: ["Node.js", "Koa.js", "TypeScript", "MongoDB"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://livegold.sa/"
        }
      ]
    },
    {
      image: require("./assets/images/saleh-cars.jpeg"),
      projectName: "Saleh Cars",
      projectDesc:
        "Saleh Group for Cars, established in 1995, has grown into one of the largest authorized car distributors in Saudi Arabia, representing over 45 major brands and serving both government and private sectors.",
      technologies: ["Node.js", "Koa.js", "TypeScript", "MongoDB"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.salehcars.com/"
        }
      ]
    },
    {
      image: require("./assets/images/ghaya-logo-final-05.png"),
      projectName: "Ghaya Express",
      projectDesc:
        "A logistics platform providing reliable and efficient shipping solutions for businesses to manage orders securely and effectively.",
      technologies: ["Node.js", "Koa.js", "TypeScript", "MongoDB"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ghayaex.com"
        }
      ]
    },
    {
      image: require("./assets/images/cognit.webp"),
      projectName: "Cognit Hub",
      projectDesc:
        "A platform designed for training organizations offering Continuing Professional Education (CPE), enabling seamless management of content, registration, and certification processes.",
      technologies: ["Node.js", "Koa.js", "TypeScript", "MongoDB"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cognithub.com/"
        }
      ]
    },
    {
      image: require("./assets/images/kaiali.png"),
      projectName: "Kaiali Games",
      projectDesc:
        "A scalable SaaS-based digital services platform offering social media, gaming, subscriptions, and digital payment solutions. I played a key role in designing and developing a modular and maintainable system.",
      technologies: [
        "NestJS",
        "TypeScript",
        "MongoDB",
        "Nx Monorepo",
        "React.js"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kaiali.net/"
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
  email_address: "bahaaeddinabdo@gmail.com"
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

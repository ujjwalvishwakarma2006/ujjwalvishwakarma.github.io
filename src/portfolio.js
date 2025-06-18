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
  username: "Ujjwal Vishwakarma",
  title: "Hi all, I'm Ujjwal",
  subTitle: emoji(
    "A passionate Computer Science Engineering student 🚀 at IIT Jammu with skills in C/C++, Python, and Web Development, focused on building efficient and innovative software solutions."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ujjwalvishwakarma",
  linkedin: "https://www.linkedin.com/in/ujjwalvishwakarma/",
  gmail: "2023ucs0116@iitjammu.ac.in",
  // gitlab, facebook, medium, stackoverflow can be added too
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE COMPUTER SCIENCE STUDENT WITH A DIVERSE SKILL SET",
  skills: [
    emoji(
      "⚡ Develop efficient algorithms and data structures for optimized software solutions"
    ),
    emoji("⚡ Create robust applications using C++, Python, and modern development tools"),
    emoji(
      "⚡ Build web applications using Node.js, HTML, CSS, and JavaScript technologies"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology, Jammu",
      logo: require("./assets/images/iitjammuLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "2023 - 2027 (Current)",
      desc: "Current CGPA: 8.24",
      descBullets: [
        "Courses: Discrete Mathematics, Data Structures and Algorithms, Design and Analysis of Algorithms",
        "Computer Architecture, Programming Languages, Computer Aided Design, Calculus, Linear Algebra"
      ]
    },
    {
      schoolName: "Indira International School, Kota",
      logo: require("./assets/images/schoolLogo.png"),
      subHeader: "12th Standard",
      duration: "2021 - 2023",
      desc: "Percentage: 92.20%"
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya, Dausa",
      logo: require("./assets/images/jnvLogo.png"),
      subHeader: "10th Standard",
      duration: "Passed in 2021",
      desc: "Percentage: 91.60%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C/C++ Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "80%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Rust & Linux",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Member of Robotics Club",
      company: "IIT Jammu",
      companylogo: require("./assets/images/iitjammuLogo.png"),
      date: "2023 – Present",
      desc: "Active member contributing to robotics projects and competitions at IIT Jammu."
    },
    {
      role: "Member of Coding Club",
      company: "IIT Jammu",
      companylogo: require("./assets/images/iitjammuLogo.png"),
      date: "2023 – Present",
      desc: "Participating in coding events, competitions and contributing to club projects."
    },
    {
      role: "Competitive Programming Instructor",
      company: "Coding Club, IIT Jammu",
      companylogo: require("./assets/images/iitjammuLogo.png"),
      date: "Aug 2024 – Present",
      desc: "Teaching competitive programming skills and techniques to junior students."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY RECENT WORK AND PROJECTS",
  projects: [
    {
      image: require("./assets/images/libraryProject.png"),
      projectName: "Library Management System",
      projectDesc: "A comprehensive C++/SQLite-based system for efficient library resource and user management",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ujjwalvishwakarma/LibraryManagementSystem"
        }
      ]
    },
    {
      image: require("./assets/images/docIdentity.png"),
      projectName: "Document Identity Aggregator",
      projectDesc: "A system to aggregate and verify CV data using web crawling, OCR and NLP to detect inconsistencies",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ujjwalvishwakarma/DocumentIdentityAggregator"
        }
      ]
    },
    {
      image: require("./assets/images/deepLearning.png"),
      projectName: "Deep Learning with Python Projects",
      projectDesc: "Practiced Deep Learning from the book by Francois Chollet along with some research-inspired experiments",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ujjwalvishwakarma/DeepLearningProjects"
        }
      ]
    },
    {
      image: require("./assets/images/spotifyYT.png"),
      projectName: "Spotify to YT Music Playlist Transfer",
      projectDesc: "A tool to transfer playlists from Spotify to YouTube Music using APIs and Python",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ujjwalvishwakarma/SpotifyToYTMusic"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Awards, and Competitive Coding Success",

  achievementsCards: [
    {
      title: "520+ LeetCode Problems Solved",
      subtitle:
        "Consistently solving algorithmic problems on LeetCode with a peak contest rating of 1633.",
      image: require("./assets/images/leetcode.png"),
      imageAlt: "LeetCode Logo",
      footerLink: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/ujjwalvishwakarma/"
        }
      ]
    },
    {
      title: "Gold Medal in INTegration-MAESTRO",
      subtitle:
        "Won gold medal at the tech-fest of IIT Jammu in April 2025 for innovative solution development.",
      image: require("./assets/images/goldMedal.png"),
      imageAlt: "Gold Medal",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Developer of the Month",
      subtitle: "Awarded Developer of the Month at IIT Jammu in November 2024.",
      image: require("./assets/images/developer.png"),
      imageAlt: "Developer Award",
      footerLink: [
        {name: "Award", url: ""}
      ]
    },
    {
      title: "Bronze Medal for Line Follower",
      subtitle: "Won Bronze Medal for Line Follower robot at tech-fest IIT Jammu in March 2024.",
      image: require("./assets/images/bronzeMedal.png"),
      imageAlt: "Bronze Medal",
      footerLink: [
        {name: "Certificate", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I occasionally write about my technical experiences and learning journey.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Coming Soon",
      description:
        "Stay tuned for my technical blogs and programming insights."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I ENJOY SHARING MY KNOWLEDGE AND EXPERIENCES WITH OTHERS"
  ),

  talks: [
    {
      title: "Coming Soon",
      subtitle: "Future tech talks and presentations will be listed here",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "SHARING INSIGHTS THROUGH AUDIO CONVERSATIONS",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out for project collaboration or just to say hello!",
  number: "+91-7877346431",
  email_address: "2023ucs0116@iitjammu.ac.in"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set to true if you are looking for job opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

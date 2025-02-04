const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohamed Achek | Portfolio",
  description:
    "An IT and Business Analytics junior student passionate about leveraging AI and data science to drive innovation and empower data-driven decision-making.",
  og: {
    title: "Mohamed Achek",
    type: "website",
    url: "http://mohamedachek/",
  },
};

//Home Page
const greeting = {
  title: "Welcome aboard!",
  sub: "Mohamed Achek",
  logo_name: "Mohamed Achek",
  resumeLink:
    "https://drive.google.com/file/d/175CwaBelyhZat_AHTlMoRfMgERDRSloz/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/mohamed-achek",
    },

    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "www.linkedin.com/in/mohamed-achek",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(T5-Transformer & OpenAI)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3,  ReactJS",
        "⚡ Creating application backend in Flask ",
        "⚡ Having experience in Domain & Hosting ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Welcome to my project hub! This is where raw data transforms into insights and algorithms come to life.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "STEG - Energy Management API",
      img_path: "project-01.png",
      description:
        "I developed a RESTful API for STEG, Tunisia's energy provider, to modernize energy management with features like real-time outage heatmaps, carbon footprint tracking, and LSTM-based consumption forecasting. Built with Flask and React, the API ensures secure, scalable, and efficient energy data handling.",
      tags: [
        {
          lang: "flask",
          color: "#004782",
        },
        {
          lang: "React",
          color: "#820032",
        },
        {
          lang: "SQLite",
          color: "#00a100",
        },
        {
          lang: "MAPS API",
          color: "#ff4b4b",
        },
        {
          lang: "Render",
          color: "#3c0095",
        },
      ],
      code: "https://github.com/mohamed-achek/STEG_API.git",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Youtube Thumbnail Generator & AutoUploader",
      img_path: "",
      description:
        "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Newsearcher",
      img_path: "",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/rohankokkula/Actiweight",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "WorkForce Development Intern",
        subtitle: "USAID Tunisia JOBS",
        date: "June 2023 - August 2023",
        content: [
          "Filled out official applications for programs, ensuring accuracy and timeliness.",
          "Cleaned and processed data, extracting key insights to support decision-making.",
          "Organized and scheduled social media content, contributing to content strategy and engagement.",
        ],
      },

      {
        title: "Junior Consultant",
        subtitle: "TBS Junior Enterprise",
        date: "October 2023 - August 2023",
        content: [
          "Conducted surveys, collected & analyzed data, and provided actionable insights & recommendations.",
          "Implemented SEO best practices, managed newsletters, and optimized content for engagement & visibility.",
          "Identified ideal customer profiles and analyzed competitors to drive strategic positioning.",
          "Developed and maintained dashboards to track key marketing metrics and business performance.",
        ],
      },
    ],
    
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Science in Business Administration",
          subtitle: "Tunis Business School",
          date: "2022 - Now",
          content: ["Major IT & Minor Business Analytics"],
        },
      ],
    },
    {
      title: ["Achievements"],
      data: [
        {
          title: "Finalist",
          content: [
            "Selected among 39 finalists from 765 participants for having an innovative idea.",
            "Managed a team of 4 members. ",
            "Developed and implemented a business plan and strategy.",
            "Attended a workshops Bootcamp about Design Thinking, BMC, Market Research, Prototyping, and Pitch and Storytelling delivered by EY experts.",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Python for Data Science",
      subtitle: "IBM",
      logo_path: "IBM-01.png",
      certificate_link:
        "https://www.credly.com/badges/165d1b72-c7b6-49ba-902e-68035fefcbe3/public_url",
      alt_name: "IBM badge",
      color_code: "#000000",
    },

    {
      title: "Data Analysis Using Python",
      subtitle: "IBM",
      logo_path: "IBM-02.png",
      certificate_link:
        "https://www.credly.com/badges/e2952aea-3392-42d1-a42e-514d69b82b67/public_url",
      alt_name: "IBM badge",
      color_code: "#000000",
    },

    {
      title: "Data Visualization Using Python",
      subtitle: "IBM",
      logo_path: "IBM-03.png",
      certificate_link:
        "https://www.credly.com/badges/e82a902f-d3a9-4143-aea8-4e7cf99ab391/public_url",
      alt_name: "IBM badge",
      color_code: "#000000",
    },

    {
      title: "Applied Data Science with Python - Level 2",
      subtitle: "IBM",
      logo_path: "IBM-04.png",
      certificate_link:
        "https://www.credly.com/badges/b15cb10e-5675-4840-ae65-b9a2f169364e/public_url",
      alt_name: "IBM badge",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description: "I will reply within 24 hours.",
  },
  addressSection: {
    title: "",
    subtitle: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+216 54 382 186",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mohamed-achek",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohamed-achek/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mohamedachek5@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};

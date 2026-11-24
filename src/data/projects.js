export const projects = [
  {
    slug: "bachelor",
    name: "Ellerin",
    type: "Bachelor thesis",
    period: "January to May 2026",
    team: "Team of four",
    result: "Bachelor's thesis grade: B",
    cardDescription:
      "An AI-powered learning platform that uses a Socratic approach to encourage active learning.",
    description: [
      "Ellerin is an AI-powered learning platform developed as a bachelor's thesis by a team of four. The project explores how generative AI can support active learning instead of simply giving students direct answers.",
      "Students define a topic, provide context, set learning goals and describe what they already know. The platform uses that information to create a personalised sequence of lectures. Students review the plan before working through guided sessions based on a Socratic approach. The application integrates Claude through the Claude SDK."
    ],
    contributions: [
      "Designed Mongoose schemas for dynamic, user-specific learning state.",
      "Developed backend APIs and contributed to authentication functionality, including validation, sanitisation and rate limiting middleware.",
      "Built the React lecture page and its API service, handling authenticated requests, conversation history, message submission and response formatting.",
      "Implemented optimistic message updates with rollback and input restoration when a request fails.",
      "Contributed to the multi-step setup workflow, including API integration, step validation and curriculum acceptance."
    ],
    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "SCSS",
      "Claude SDK"
    ],
    image: "/images/bachelor-project-image.png",
    imageWidth: 1286,
    imageHeight: 834,
    imageAlt:
      "Ellerin setup interface showing a student defining a learning topic, familiarity level and learning context.",
    links: [
      { label: "Demo", href: "https://ellerin.no" },
      {
        label: "Source code",
        href: "https://github.com/Jakubo0451/bachelor-thesis"
      }
    ]
  },
  {
    slug: "studyfront",
    name: "Studyfront",
    type: "University project",
    period: "January to June 2025",
    team: "Team of four",
    cardDescription:
      "A research platform for creating studies, collecting participant responses and exporting results.",
    description: [
      "Studyfront is a research platform developed to help researchers create and conduct online studies. It supports seven question types, time-limited participation, unpublished previews and result exports in CSV and JSON.",
      "The project began with backend functionality inside the original Next.js application. The backend was later moved into a separate Express.js repository. I contributed to both parts of the project, working on authentication, study creation, participant workflows and response handling."
    ],
    contributions: [
      "Implemented authentication and contributed to early backend functionality, including user handling, study creation and related API routes.",
      "Built substantial parts of the participant workflow, including response validation, submission handling and progress persistence using sessionStorage.",
      "Contributed to backend response handling, including validation, persistence, duplicate-participation checks and response formatting.",
      "Implemented frontend utilities for exporting study results as CSV and JSON.",
      "Wrote Jest and Puppeteer browser tests for registration and login flows, including invalid login attempts.",
      "Worked with the team to gather requirements through regular meetings with the product owner."
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Docker",
      "Jest",
      "Puppeteer"
    ],
    image: "/images/studyfront-project-image.png",
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt:
      "Studyfront study editor showing an empty study, with controls to add questions, preview the study and return to the dashboard.",
    note: "The original hosted demo is no longer available.",
    links: [
      {
        label: "Frontend repository",
        href: "https://github.com/Jakubo0451/Studyfront-frontend"
      },
      {
        label: "Team backend repository",
        href: "https://github.com/TheRealJensJK/Studyfront-backend"
      }
    ]
  },
  {
    slug: "skycast",
    name: "Skycast",
    type: "Personal project",
    period: "Personal development",
    team: "Individual project",
    cardDescription:
      "A React weather application with city search, current conditions and a seven-day forecast, using Open-Meteo.",
    description: [
      "Skycast is a weather application built with React and JavaScript. It uses the Open-Meteo weather and geocoding APIs to let users search for cities and view current conditions, including temperature, apparent temperature, wind speed and humidity, alongside a seven-day forecast.",
      "The city search converts a place name into coordinates through the geocoding API, which are then used to request weather data. The application handles loading and error states and translates weather codes into readable conditions."
    ],
    contributions: [
      "Built the application independently using React and JavaScript.",
      "Integrated the Open-Meteo geocoding API for city search and the weather API for current conditions and daily forecasts.",
      "Implemented loading and error handling for the search and weather requests."
    ],
    stack: ["React", "JavaScript", "CSS", "Open-Meteo API"],
    image: null,
    imagePlaceholderCaption: "Weather application using Open-Meteo",
    links: [
      { label: "Live application", href: "https://jakubo0451.github.io/skycast/" },
      { label: "Source code", href: "https://github.com/Jakubo0451/skycast" }
    ]
  },
  {
    slug: "yapper",
    name: "Yapper",
    type: "Cloud Technologies course",
    period: "March to April 2025",
    team: "Team of three",
    cardDescription:
      "A Twitter-style application with a Windows 95-inspired interface and a React, FastAPI and PostgreSQL stack.",
    description: [
      "Yapper is a Twitter/X-inspired social media application developed for NTNU's Cloud Technologies course. It combines a React frontend with a Python backend built using FastAPI and a PostgreSQL database. The interface uses a Windows 95-inspired visual style.",
      "The course covered networking, Linux, virtualisation, cloud architectures, scaling, security and cloud APIs. The project gave us an opportunity to apply web development and database concepts in a cloud-focused course."
    ],
    contributions: [
      "Developed significant parts of the React application.",
      "Implemented account registration and login endpoints in FastAPI, including password hashing and JWT access-token creation.",
      "Contributed to the SQLAlchemy database models, schemas and server-side functionality."
    ],
    stack: [
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT"
    ],
    image: "/images/yapper-project-image.png",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt:
      "Yapper social media feed displayed in a Windows 95-inspired desktop interface.",
    links: [
      { label: "Demo", href: "https://yapper-zwai.onrender.com/" }
    ]
  },
  {
    slug: "cjs",
    name: "CJS: AI Image Awareness Quiz",
    type: "University project",
    period: "April to May 2025",
    team: "Team of three",
    cardDescription:
      "A museum-oriented quiz that asks visitors to distinguish AI-generated images from real images.",
    description: [
      "CJS is an AI image awareness quiz developed as a university project. Designed for museum visitors, it presents two images side by side and asks users to identify which one was generated by AI. The aim is to encourage visitors to think critically about how convincing AI-generated imagery can be."
    ],
    contributions: [
      "Contributed to authentication-related backend development.",
      "Worked on the connection between the React frontend and Express backend in a three-person team."
    ],
    stack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    image: "/images/cjs-project-image.png",
    imageWidth: 1281,
    imageHeight: 730,
    imageAlt:
      "CJS quiz interface presenting two images for a visitor to compare and identify the AI-generated image.",
    links: [
      {
        label: "Source code",
        href: "https://github.com/Jakubo0451/CJS-AI-Quiz-App"
      }
    ]
  }
];

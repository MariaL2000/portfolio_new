const animationDuration = 2;
export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: "easeInOut",
      strokeOpacity: { delay: animationDuration },
      fillOpacity: { delay: animationDuration },
    },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

export const socialIcons = [
  {
    id: "gmail",
    viewBox: "0 0 24 24",
    url: "mailto:mariamarreromedrano@gmail.com",
    path: "M12 13.293l8.088-6.071A1.5 1.5 0 0020.5 6h-17a1.5 1.5 0 00-.588 1.222L12 13.293zm9 7.689V8.386L12 15.207 3 8.386v12.596A1.018 1.018 0 004.018 22h15.964A1.018 1.018 0 0021 20.982z",
  },
  {
    id: "linkedin",
    viewBox: "0 0 24 24",
    url: "https://www.linkedIn.com/in/lesyani-marrero",
    path: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.802-1.75-1.75s.784-1.75 1.75-1.75 1.75.802 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.024-3.058-1.863-3.058-1.865 0-2.152 1.454-2.152 2.957v5.705h-3v-10h2.887v1.367h.041c.403-.763 1.388-1.566 2.855-1.566 3.051 0 3.612 2.008 3.612 4.621v5.578z",
  },
  {
    id: "github",
    viewBox: "0 0 24 24",
    url: "https://github.com/MariaL2000",
    path: "M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.72-4.04-1.61-4.04-1.61a3.2 3.2 0 00-1.34-1.77c-1.1-.75.08-.74.08-.74a2.54 2.54 0 011.86 1.25 2.59 2.59 0 003.54 1 2.6 2.6 0 01.77-1.64c-2.66-.3-5.46-1.33-5.46-5.89a4.6 4.6 0 011.23-3.21 4.26 4.26 0 01.12-3.17s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.27 4.27 0 01.12 3.17 4.59 4.59 0 011.22 3.21c0 4.57-2.8 5.59-5.47 5.88a2.9 2.9 0 01.83 2.23v3.31c0 .32.22.7.83.58A12 12 0 0012 0z",
  },
];

export const Numbers = [
  { id: 1, number: 25, title: "Completed Projects" },
  { id: 2, number: 2, title: "Years of Experience" },
  { id: 3, number: 15, title: "Satisfied Clients" },
  { id: 4, number: 12, title: "Personal Side Projects" },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building high-performance, scalable web applications with modern technologies to deliver secure and efficient digital solutions.",
  },
  {
    id: 2,
    title: "UI/UX & Web Design",
    description:
      "Designing intuitive, user-focused interfaces that combine aesthetics with usability to enhance customer engagement.",
  },
  {
    id: 3,
    title: "Full-Stack Solutions",
    description:
      "Developing complete end-to-end solutions, from responsive front-end interfaces to robust back-end systems and APIs.",
  },
];

export const skills = [
  {
    skill: "Python",
    percentage: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    skill: "HTML",
    percentage: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    skill: "CSS",
    percentage: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    skill: "Tailwind CSS",
    percentage: 80,
    icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    skill: "Django & Flask & FastAPI",
    percentage: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    skill: "React",
    percentage: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    skill: "SQL & PostgreSQL",
    percentage: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    skill: "Figma",
    percentage: 60,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    skill: "FastAPI",
    percentage: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },

  {
    skill: "Blender",
    percentage: 65,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },
];

export const experience = [
  {
    id: 1,
    title: "Freelance Developer",
    company: "Multiple enterprises",
    year: "2022 - Present",
    descripcion:
      "Collaborating with businesses to build innovative web solutions.",
    icon: "./UCI2.webp",
  },
];

export const education = [
  {
    id: 1,
    degree: "Engineer & Full Stack Developer",
    institution: "University of Informatic Sciences (UCI), Havana",
    year: "2021 - Present",
    details:
      "Currently studying software engineering and obtained an English B2 certification.",
    icon: "./UCI.webp",
  },
];

export const projects = [
  {
    id: 1,
    title: "The Gym Way",
    descripcion:
      "This is a minimalist site that efficiently and visually summarizes the most important exersices, which given University local situation can be perfomed by students in order to grow the fit community",
    url: "https://thegymway.netlify.app/",

    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "Mui Material",
      "React-Icons",
    ],
    imageUrl: "/img/project22.png",
  },

  {
    id: 2,
    title: "ProteoSearch",
    descripcion:
      "ProteoSearch is an advanced web-based platform designed for the interactive visualization and analysis of biomolecular structures. Leveraging real-time 3D rendering, it enables users to explore protein structures in detail, providing an intuitive interface for scientific analysis.",
    url: "https://marial2000.github.io/ProteinVisual/",

    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Canvas, NCBI, UNIPROT API's",
      "React-Icons",
    ],
    imageUrl: "/img/project1.png",
  },

  {
    id: 3,
    title: "Harmony Shop",
    descripcion:
      "Headphones shop made with beautiful animations and a Hero made with Spline, the products are aleatory , it is just a frontend example of econmerce introducing products.",
    url: "https://headphone-harmony.netlify.app/",

    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Spline",
      "Lucide React",
      "Gsap",
      "React Mouse Follower",
      "React intersection observer",
    ],
    imageUrl: "/img/project33.png",
  },

  {
    id: 4,
    title: "Elite Custom Countertops",
    descripcion:
      "Elite-custom is a modern React + TypeScript web project designed for dynamic, responsive interfaces. It features smooth animations, interactive carousels, and accessible UI components, making it ideal for corporate sites or portfolios. The project emphasizes modularity, scalability, and a fast development workflow using Vite..",
    url: "https://marial2000.github.io/Elite-custom/",
    stack: [
      "React",
      "TailwindCSS",
      "Typescript",
      "Framer Motion",
      "Radix UI",
      "Lucide React",
      "React Hook Form",
      "Zod",
      "Axios",
    ],
    imageUrl: "/img/project2.png",
  },
  {
    id: 5,
    title: "CRYSPR System",
    descripcion:
      "A bioinformatics application made with Flask (Python) whose objective is to consult genomic data is a brief database in json format, the idea is that the user enters sequences of nitrogenous DNA bases and they are searched in the standard database and in another that contains possible DNA strands that present repairable mutations using the CRISPR Cas9 system. ",
    url: "https://github.com/MariaL2000/CRYSPR_System",
    stack: ["Python", "Flask", "HTML5", "CSS3"],
    imageUrl: "/img/project3.png",
  },

  {
    id: 6,
    title: "Marketing Website 1",
    descripcion:
      "Static marketing website deployed on GitHub Pages with AOS animations, always trying to make good sellers sites.",
    url: "https://elitecustom.netlify.app/",
    stack: ["HTML", "CSS", "Bootsrap", "AOS"],
    imageUrl: "img/project66.png",
  },

  {
    id: 7,
    title: "Admin Dashboard",
    descripcion:
      "Scalable, secure, and visually appealing admin dashboard that can manage content, users, media, and analytics efficiently.",
    url: "https://github.com/MariaL2000/Backendelite/",
    stack: [
      "Python",
      "Django Packages",
      "PostgreSQL",
      "Django Rest Framework",
      "Django Jazzmin",
      "Django Colorfield",
      "Cloudinary",
    ],
    imageUrl: "img/project5.png",
  },

  {
    id: 8,
    title: "Complete FastApi example",
    descripcion:
      "Implementation of a system with Login, Sign in, Logout, a simple Goggle Oauth2 authentication and a CRUD complete for a admin and a econmerce.",
    url: "https://github.com/MariaL2000/Backendelite/",
    stack: [
      "Python",
      "FastApi",
      "PostgreSQL",
      "JWT",
      "Pydantic",
      "SQLAlchemy",
      "Goggle-auth",
    ],
    imageUrl: "img/project88.png",
  },
  {
    id: 9,
    title: "Marketing Website",
    descripcion:
      "Static marketing website deployed on GitHub Pages with AOS animations, always trying to make good sellers sites.",
    url: "https://marial2000.github.io/marketing_web1/",
    stack: ["React", "Vite", "Bootsrap", "AOS"],
    imageUrl: "img/project4.png",
  },
];

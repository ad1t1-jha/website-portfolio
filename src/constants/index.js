import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs
  } from "../assets";
  
import python from "../assets/python.png";
import azure from "../assets/azure.png";
import citale from "../assets/citale.png"
import otto from "../assets/otto.png"
import citalelogo from "../assets/citalelogo.png"
import beatslogo2 from "../assets/beatslogo2.png"
import ottologo from "../assets/ottologo.png"
import cibclogo from "../assets/cibclogo.png"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Python",
      icon: python,
    },
    {
      title: "HTML",
      icon: html,
    },
    {
      title: "CSS",
      icon: css,
    },
    {
      title: "JavaScript",
      icon: javascript,
    },
    {
      title: "TypeScript",
      icon: typescript,
    },
    {
      title: "ReactJS",
      icon: reactjs,
    },
    {
      title: "NodeJS",
      icon: nodejs,
    },
    {
      title: "ThreeJS",
      icon: threejs,
    },
    {
      title: "Tailwind",
      icon: tailwind,
    },
    {
      title: "Git",
      icon: git,
    },
    {
      title: "Azure",
      icon: azure,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Application Software Developer",
      company_name: "CIBC Capital Markets",
      icon: cibclogo,
      iconBg: "#383E56",
      date: "Jan 2025 - Present",
      points: [
        "Developed and maintained client-facing and internal reports using SQL, Python, and C#, delivering accurate data insights to both internal stakeholders and external clients",
        "Collaborated with cross-functional teams to support Prime Brokerage expansion, contributing to system enhancements and automation initiatives using Angular and C#",
        "Designed, tested, and deployed applications to streamline operational processes, improving data accuracy and reporting efficiency for internal teams and external clients",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Citale",
      icon: citalelogo,
      iconBg: "#383E56",
      date: "May 2024 - August 2024",
      points: [
        "Developing and maintaining web application using React.js and other related technologies.",
        "Collected and implemented real-time feedback on user experience and user interface design",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Market Research and Consumer Insights ",
      company_name: "Beats by Dre X Extern",
      icon: beatslogo2,
      iconBg: "#E6DEDD",
      date: "July 2024 - August 2024",
      points: [
        "Analyzed and conducted market research regarding consumer trends.",
        "Took initiative and contributed to positive group dynamics",
        "Created and delivered a compelling presentation showcasing insights",
      ],
    },
    {
      title: "AI Student Intern",
      company_name: "Otto Optical Systems",
      icon: ottologo,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Developed AI Image recognition feature for uploading and formatting client information",
        "Led and Collaborated with cross-functional teams including researchers, editors, and developers",
      ],
    },
    
  ];
  
  const testimonials = [
  ];
  
  const projects = [
    {
      name: "Citale Frontend Development",
      description:
        "Web-based social media that allows users find upcoming events in Boston",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: citale,
      source_code_link: "https://citale.vercel.app/",
    },
    {
      name: "Image Recognition Feature",
      description:
        "Made for Otto Optical Systems - AI image recognition feature for uploading and formatting client information to database",
      tags: [ /*
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },*/
      ],
      image: otto,
      source_code_link: "https://www.ottooptics.io/",
    },
    /*{
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
  ];
  
  export { services, technologies, experiences, testimonials, projects };
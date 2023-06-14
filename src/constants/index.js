import {
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
  jhfilm,
  mysql,
  almabetter,
  bondsindia,
  social,
  ai,
  ecomm,
  webflow,
  threejs,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Webflow",
    icon: webflow,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Production Manager and Webflow Developer",
    company_name: "JH Film Production",
    icon: jhfilm,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - March 2022",
    points: [
      "ManManaged content strategy and SEO, product expenditure, marketing, and hiring of 100+ talents",
      "Collaborated with a team of developers to build responsive and dynamic websites using the Webflow platform",
      "Assisted in the creation and maintenance of visually captivating web page, utilizing Webflow's powerful design and animation tools to enhance user experience and engagement.",
      "Actively participated in code reviews and debugging sessions, troubleshooting issues and providing efficient solutions to ensure smooth website functionality and user satisfaction.",
    ],
  },
  {
    title: "Fullstack Intern",
    company_name: "Almabetter",
    icon: almabetter,
    iconBg: "#E6DEDD",
    date: "May 2022 - May 2023",
    points: [
      "Gained hands-on experience in front-end frameworks such as Reactjs with backend programming languages such as Node.js and using databases such as MongoDB.",
      "Learned about best practices, including user authentication and data encryption, to develop and deploy high-quality and secure web applications",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Fullstack Developer",
  //   company_name: "Bonds India",
  //   icon: bondsindia,
  //   iconBg: "#E6DEDD",
  //   date: "June 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing and receiving constructive feedback to and from other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Media Web App",
    description:
      "Social media app created using React, Redux, Material UI, MongoDB Atlas, Mongoose along with JWT for authentication and authorization",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: social,
    source_code_link: "https://retrogramsocial.netlify.app/",
  },
  {
    name: "Open AI Image Generator",
    description:
      "Users can enter a description of the image they want, and the app will use the DALL-E API to generate a unique image that matches the description. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://dalleimggen.netlify.app/",
  },
  {
    name: "E-commerce Website",
    description:
      "A comprehensive shopping website that allows users to create account, buy and add items to cart",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://ecommdemoproject.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

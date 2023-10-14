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
    title: "Freelance Web Developer",
    company_name: "JH Film Production",
    icon: jhfilm,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Developed a video streaming website with webflow",
      "Currently working on its Next.js version",
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
  {
    title: "Software Developer",
    company_name: "Bonds India",
    icon: bondsindia,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Transformed Figma mockups into dynamic web pages and layouts using Next.js, ensuring seamless functionality and optimal web and mobile responsiveness",
      "Implemented robust encryption mechanisms within the Django framework, ensuring the security of over 100,000 sensitive records stored in MySQL.",
      "Improved data retrieval and validation processes by integrating Karza, CBRICS, and NSDL third-party APIs into our Django-based platform, reducing data retrieval time by 90%.",
      "Expanded application functionality by integrating Demat and Bank APIs through Django, enabling rapid data retrieval and storage for more than 50,000 records.",
      "Streamlined database interactions by deploying efficient stored procedures, designed APIs for blog and seamlessly executed through AWS Lambda Functions.",
    ],
  },
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

import { url } from "inspector";
import {
  Linkedin,
  Youtube,
  Github,
  MapPin,
  Hexagon,
  PhilippinePeso,
  PiggyBank,
  FileCode2,
  PersonStanding,
  CircleCheck,
} from "lucide-react";

export const bioText = `My name is Ankit Negi, a full stack developer with 8+ years of
experience building high-performance, scalable, and modern web
applications. I specialize in crafting seamless frontends with
Vue.js & React, and robust backends with Node.js & Express. My
work spans across e-commerce, healthcare, and enterprise platforms
with a focus on performance, maintainability, and clean
architecture.`;

export const connectOptions = [
  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", url: "https://www.linkedin.com/in/anknegi" },
  { icon: <Youtube className="w-4 h-4" />, label: "Youtube", url: "https://www.youtube.com/@ankitnegi" },
  { icon: <Github className="w-4 h-4" />, label: "Github ", url: "https://www.github.com/anknegi" }
];

export const experiences = [
  {
    company: "CTS – Senior Associate",
    period: "Feb 2024 – Present",
    role: "Full stack Developer",
    details: [
      "Optimized high-traffic UI application for an ecommerce giant reducing load times by 25%.",
      "Creation of reusable UI components, plugins improving development speed by 30%.",
      "Worked on deployment lifecycle using Docker, Kubernetes, and AWS Infrastructure.",
      "Adapted to unique challenges and requirements.",
    ],
    tech: "Javascript, Vue 2, Node JS, Mongo DB, AWS - EC2, SQS, Docker, Kubernetes, Github Actions,",
  },
  {
    company: "TCS – Assistant Consultant",
    period: "Dec 2021 – Feb 2024",
    role: "Frontend UI Developer",
    details: [
      "Migrated AppleCare Portal from Vue 2 to Vue 3.",
      "Integrated Playwright and Vitest achieving 90% test coverage",
      "Worked on performance improvements for high-traffic react application.",
      "Lead the team of 5 developers to deliver high-quality code and features.",
    ],
    tech: "Vue 2, Vue3, React, Apple Design System, Vitest, Playwright",
  },
  {
    company: "LTI Mindtree – Module Lead",
    period: "Aug 2020 – Nov 2021",
    role: "MERN Developer",
    details: [
      "Built React dashboards for Cisco’s network monitoring platform.",
      "Developed REST APIs for real-time fault analysis using Node.js & MongoDB.",
      "Ensured authentication and compliance.",
      "Lead the team of 5 developers to deliver high-quality code and features.",
    ],
    tech: "React, Node JS, Express, Mongo DB",
  },
  {
    company: "Infostride Technologies – Software Engineer",
    period: "Jun 2019 – Aug 2020",
    role: "Full Stack Developer",
    details: [
      "Built Vue.js & React apps for healthcare and e-commerce domain projects",
      "Integrated eBay & Walmart APIs for marketplace automation.",
      "Worked on nuxt for server-side rendering and performance optimization.",
      "Worked with database technologies like MongoDB and MySQL.",
    ],
    tech: "PHP - Laravel, Vue JS (Nuxt), React JS, Node JS, Express JS, MySQL, Mongo DB",
  },
  {
    company: "Rubico – Associate Software Developer",
    period: "Oct 2017 – May 2019",
    role: "Full stack Developer",
    details: [
      "Developed responsive SaaS and healthcare dashboards using Vue.js and Laravel.",
      "Created reusable UI components and improved app performance by optimizing Vue.js code.",
      "Integrated Stripe payment gateway and Passport authentication for secure online transactions.",
      "Migrated legacy PHP based frontend to a modern Vue.js single-page application, improving speed and user engagement by 30%",
    ],
    tech: "PHP Laravel, Vue 2, MySQL, Jenkins",
  },
];

export const education = [
  {
    degree: "B.tech in Computer Science",
    school: "Uttarkhand Technical University",
    location: "Dehradun, Uttarakhand, India",
    year: "2013",
  },
  {
    degree: "Intermediate - 12th",
    school: "CBSE, Dehradun Region",
    location: "Dehradun, Uttarakhand, India",
    year: "2009",
  },
  {
    degree: "High School - 10th",
    school: "CBSE, Dehradun Region",
    location: "Dehradun, Uttarakhand, India",
    year: "2007",
  },
];

export const skills = [
  {
    title: "Frontend Skills",
    items: [
      { icon: <FileCode2 className="w-4 h-4" />, label: "HTML/CSS/Javascript" },
      { icon: <PhilippinePeso className="w-4 h-4" />, label: "Vue JS (Nuxt, Vue 2, Vue 3)" },
      { icon: <PersonStanding className="w-4 h-4" />, label: "React JS (Core & Next JS)" },
    ],
  },
  {
    title: "Backend Skills",
    items: [
      { icon: <Hexagon className="w-4 h-4" />, label: "Node JS (Express JS)" },
      { icon: <PiggyBank className="w-4 h-4" />, label: "PHP (Laravel)" },
      { icon: <MapPin className="w-4 h-4" />, label: "Drupal/Wordpress" },
    ],
  },
  {
    title: "Full Stack Skills",
    items: [
      { icon: <CircleCheck className="w-4 h-4" />, label: "Github, Github Actions, Jenkins" },
      { icon: <CircleCheck className="w-4 h-4" />, label: "Docker & Kubernetes" },
      { icon: <CircleCheck className="w-4 h-4" />, label: "AWS (EC2, SQS, Lambda)" },
      { icon: <CircleCheck className="w-4 h-4" />, label: "Playwright, Vitest, Postman" },
    ],
  },
];

export const portfolio = [
  "Williams Sonoma",
  "Apple Enterprise",
  "Cisco Bits Automation",
];
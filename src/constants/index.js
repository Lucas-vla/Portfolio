import project1 from "../assets/projects/formula1-logo.jpg";
import project2 from "../assets/projects/nytime.jpg";
import project3 from "../assets/projects/weatherApp.png";
import project4 from "../assets/projects/maggy.jpg";

export const HERO_CONTENT = `Je suis un développeur full stack passionné, spécialisé dans la création d'applications web et mobile robustes et évolutives. J'ai développé mes compétences dans les technologies front-end telles que React et Next.js, ainsi que dans les technologies back-end comme Node.js, Express.js et MongoDB. Actuellement, je suis à la recherche d'un stage pour faire mes premiers pas en entreprise dans ce domaine et mettre à profit mon experience pour développer des solutions innovantes qui stimulent la croissance des entreprises et offrent des expériences utilisateur exceptionnelles.`;

export const ABOUT_TEXT = `Je suis un développeur full stack dévoué et polyvalent, passionné par la création d'applications web efficaces et performantes. J'ai étudié diverses technologies, dont React / Native, Next.js, Node.js, Expo Express.js et MongoDB. Mon parcours en développement web a commencé par une profonde curiosité pour le fonctionnement des choses ainsi qu'un potentiel créatif infini, et il a évolué en une reconversion où je m'efforce continuellement d'apprendre et de m'adapter à de nouveaux défis. Je m'épanouis dans des environnements collaboratifs et j'aime résoudre des problèmes complexes pour fournir des solutions de haute qualité. J'aime rester actif, explorer de nouvelles technologies et contribuer à de nouveaux projets.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Formula 1 App (Work in progress)",
    image: project1,
    description:
      "Application autour de la Formule 1 moderne et historique, Comprenant des fonctionnalités tel que l'authentification utilisateur, compte à rebour, détails des courses et Bio pilotes, integration des 'Highlight' vidéo, Random Fact...",
    technologies: ["HTML", "CSS", "React Native", "Node.js", "MongoDB", "Expo"],
  },
  {
    title: "My Morning News",
    image: project2,
    description:
      "Application Web affichant en Homepage des articles récent via une API, possibilité de Bookmark les articles interessant pour les lires plus tard, ainsi qu'ajouter un Top article en haut de page.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "Application méterologique, possibilité de choisir la ville souhaité et d'avoir la méteo en temps réel via une API",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Maggy",
    image: project4,
    description:
      "Projet professionnel d'une jeune entrepreneure auquel j'ai participé au début du développement. Application Mobile reprennant les codes de 'Vinted' en y ajoutant des idées plus écologique et moins lucrative pour les personnes dans le besoin.",
    technologies: ["HTML", "CSS", "React Native", "Express.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Marseille 13006, France",
  phoneNo: "(+33) 07.69.22.98.15",
  email: "lucasviola.pro@hotmail.com",
};

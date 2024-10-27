import project1 from "../assets/projects/formula1-logo.jpg";
import project2 from "../assets/projects/nytime.jpg";
import project3 from "../assets/projects/weatherApp.png";
import project4 from "../assets/projects/maggy.jpg";
import project5 from "../assets/projects/mymoviz.png";
import project0 from "../assets/projects/singe.svg";

export const HERO_CONTENT = `Je suis un développeur full stack passionné, spécialisé dans la création d'applications web et mobile robustes et évolutives. J'ai développé mes compétences dans les technologies front-end telles que React et Next.js, ainsi que dans les technologies back-end comme Node.js, Express.js et MongoDB. Actuellement, je suis à la recherche d'un stage pour faire mes premiers pas en entreprise dans ce domaine et mettre à profit mon experience pour développer des solutions innovantes qui stimulent la croissance des entreprises et offrent des expériences utilisateur exceptionnelles.`;

export const ABOUT_TEXT = `Je suis un développeur full stack dévoué et polyvalent, passionné par la création d'applications web efficaces et performantes. J'ai étudié diverses technologies, dont React / Native, Next.js, Node.js, Expo Express.js et MongoDB. Mon parcours en développement web a commencé par une profonde curiosité pour le fonctionnement des choses ainsi qu'un potentiel créatif infini, et il a évolué en une reconversion où je m'efforce continuellement d'apprendre et de m'adapter à de nouveaux défis. Je m'épanouis dans des environnements collaboratifs et j'aime résoudre des problèmes complexes pour fournir des solutions de haute qualité. J'aime rester actif, explorer de nouvelles technologies et contribuer à de nouveaux projets.`;

export const PROJECTS = [
  {
    title: "Landing page template FxA",
    image: project0,
    description:
      "Une landing page avec style moderne réalisée pour m'entrainer lors d'une formation",
    technologies: ["React", "Tailwind", "JavaScript"],
    url: "https://landing-page-template-fx-a.vercel.app/",
  },
  {
    title: "Coders Monkey",
    image: project0,
    description:
      "Projet réalisé lors d'une formation, recréant le site de la dite formation. Création de la connexion / inscription, Onboarding, Footer",
    technologies: ["React", "Tailwind", "TypeScript", "Firebase"],
    url: "https://project-corder-monkey-5aj7nsgfp-lucas-violas-projects.vercel.app/",
  },
  {
    title: "Formula 1 App (Work in progress)",
    image: project1,
    description:
      "Application autour de la Formule 1 moderne et historique, Comprenant des fonctionnalités tel que l'authentification utilisateur, compte à rebour, détails des courses et Bio pilotes, integration des 'Highlight' vidéo, Random Fact...",
    technologies: ["HTML", "CSS", "React Native", "Node.js", "MongoDB", "Expo"],
  },
  {
    title: "MyMoviz",
    image: project5,
    description:
      "Application Web affichant les dernier films sortis recemment via une API, possibilité de Like, Noter, voir les avis des autres ainsi que la description du film",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    url: "https://mymoviespart5-frontend.vercel.app/",
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

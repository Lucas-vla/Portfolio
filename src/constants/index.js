import project1 from "../assets/projects/formula1-logo.jpg";
import project2 from "../assets/projects/nytime.jpg";
import project3 from "../assets/projects/weatherApp.png";
import project4 from "../assets/projects/maggy.jpg";
import project5 from "../assets/projects/mymoviz.png";
import project0 from "../assets/projects/singe.svg";
import project6 from "../assets/projects/blue-fox.png";
import project7 from "../assets/projects/Taskmanager.jpg";

export const HERO_CONTENT =
  "Bonjour et bienvenue sur mon portfolio ! Ici, vous découvrirez les projets que j'ai réalisés au cours de mes formations, ainsi que quelques projets personnels qui me tiennent particulièrement à cœur. Certains de ces projets sont encore en développement – un manque d’expérience me freine parfois dans leur réalisation, mais je m'efforce de progresser pour les mener à bien et les concrétiser selon mes aspirations.";

export const ABOUT_TEXT = ` Développeur Web & Mobile de reconversion, passionné par la création d’applications
 Web et Mobile, je suis motivé par l’envie d'apprendre et d'améliorer mes
 compétences techniques. Grâce à ma détermination et à ma capacité d'adaptation
 rapide, je recherche activement une alternance pour m'immerger dans des projets
 professionnels en entreprise. Mon objectif est de contribuer à des projets tout en
 acquérant une expérience pratique dans le développement web.`;

export const PROJECTS = [
  {
    title: "Task Flow",
    image: project7,
    description:
      "Un Task Manager V.1 pour m'entrainer, voué à être amélioré au fil du temps",
    technologies: ["React", "JavaScript", "CSS", "JSX"],
    url: "https://task-manager-ndb7.vercel.app/",
  },
  {
    title: "Landing page template FxA",
    image: project6,
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
    title: "MyMoviz",
    image: project5,
    description:
      "Application Web affichant les dernier films sortis recemment via une API, possibilité de Like, Noter, voir les avis des autres ainsi que la description du film",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    url: "https://mymoviespart5-frontend.vercel.app/",
  },
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

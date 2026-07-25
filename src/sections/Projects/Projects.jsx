import styles from "./Projects.module.css";
import Reveal from "../../components/Reveal/Reveal";

import carbon from "../../assets/projects/carbon-banner.png";
import mambaweed from "../../assets/projects/mambaweed-banner.png";
import portfolio from "../../assets/projects/portfolio-banner.png";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "AI Governed Blockchain Carbon Credit Framework",

    description:
      "An intelligent governance framework that combines Machine Learning, LLM-powered document verification, and blockchain consensus to validate carbon credit projects before issuing tamper-proof digital carbon credits.",

    image: carbon,

    tech: [
      "React",
      "FastAPI",
      "XGBoost",
      "Gemini",
      "Solidity",
      "Polygon",
      "IPFS",
      "PostgreSQL",
    ],

    github:
      "https://github.com/AjiteshwarSandhu/AI-Governed-Carbon-Credit-Framework",

    featured: true,
  },

  {
    id: 2,

    title: "MambaWeed",

    description:
      "Fine-grained weed detection using Four-Directional Vision Mamba integrated with YOLOv8 for accurate multi-species weed recognition in precision agriculture.",

    image: mambaweed,

    tech: [
      "Python",
      "PyTorch",
      "YOLOv8",
      "Vision Mamba",
      "OpenCV",
    ],

    github:
      "https://github.com/AjiteshwarSandhu/MambaWeed",
  },

  {
    id: 3,

    title: "Developer Portfolio",

    description:
      "A modern developer portfolio built using React, Vite, reusable components, responsive layouts, and smooth UI animations.",

    image: portfolio,

    tech: [
      "React",
      "JavaScript",
      "CSS Modules",
      "Responsive",
      "Vite",
    ],

    github: "#",
  },
];

function Projects() {
  return (
    <Reveal>
      <section id="projects" className={styles.projects}>
        <div className="container">

          <div className={styles.heading}>
            <span className={styles.badge}>
              SELECTED WORK
            </span>

            <h2>Projects I've Built.</h2>

            <p>
              A collection of projects showcasing my experience in
              Artificial Intelligence, Blockchain, Full Stack
              Development and modern software engineering.
            </p>
          </div>

          <div className={styles.grid}>

            {projects.map((project) => (
              <article
                key={project.id}
                className={`${styles.card} ${project.featured ? styles.featured : ""
                  }`}
              >

                <div className={styles.cardTop}>

                  <span className={styles.number}>
                    0{project.id}
                  </span>

                  {project.featured && (
                    <span className={styles.featuredBadge}>
                      ★ Featured
                    </span>
                  )}

                </div>

                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className={styles.content}>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className={styles.tech}>
                    {project.tech.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubBtn}
                  >
                    <FaGithub />
                    View Source Code
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default Projects;
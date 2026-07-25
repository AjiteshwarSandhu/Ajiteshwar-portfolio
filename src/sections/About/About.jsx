import styles from "./About.module.css";
import Reveal from "../../components/Reveal/Reveal";

import {
  FaCode,
  FaBrain,
  FaDatabase,
  FaProjectDiagram,
  FaRobot,
  FaCube,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    description:
      "Building responsive, scalable, and user-friendly web applications with modern frontend and backend technologies.",
  },

  {
    icon: <FaBrain />,
    title: "Data Structures & Algorithms",
    technologies: [
      "C++",
      "STL",
      "Problem Solving",
      "Algorithms",
      "LeetCode",
    ],
    description:
      "Strong foundation in algorithms, data structures, and interview-oriented problem solving with efficient coding practices.",
  },

  {
    icon: <FaDatabase />,
    title: "Core Computer Science",
    technologies: [
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "SQL",
    ],
    description:
      "Solid understanding of software engineering fundamentals that power scalable and maintainable applications.",
  },

  {
    icon: <FaProjectDiagram />,
    title: "System Design",
    technologies: [
      "Scalability",
      "REST APIs",
      "Caching",
      "Design Patterns",
      "Architecture",
    ],
    description:
      "Learning modern backend architecture, scalable system design, distributed systems, and clean software design principles.",
  },

  {
    icon: <FaRobot />,
    title: "AI & Machine Learning",
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "PyTorch",
      "XGBoost",
    ],
    description:
      "Developing intelligent applications using computer vision, machine learning, deep learning, and AI-powered automation.",
  },

  {
    icon: <FaCube />,
    title: "Blockchain",
    technologies: [
      "Solidity",
      "Hardhat",
      "Polygon",
      "IPFS",
      "Smart Contracts",
    ],
    description:
      "Building decentralized applications with blockchain technologies, secure smart contracts, and Web3 infrastructure.",
  },
];

function About() {
  return (
    <Reveal>
    <section id="about" className={styles.about}>
      <div className="container">

        <div className={styles.heading}>

          <span className={styles.badge}>
            ABOUT ME
          </span>

          <h2>
            Building software with purpose.
          </h2>

          <p>
            I'm an Electronics & Communication Engineering student passionate
            about software engineering and building scalable applications.
            My interests span Full Stack Development, Artificial Intelligence,
            Blockchain, and modern System Design. I enjoy solving challenging
            problems, writing clean and maintainable code, and continuously
            learning technologies that help build impactful software.
          </p>

        </div>

        <div className={styles.grid}>

          {cards.map((card) => (

            <article
              className={styles.card}
              key={card.title}
            >

              <div className={styles.icon}>
                {card.icon}
              </div>

              <h3>
                {card.title}
              </h3>

              <div className={styles.techStack}>

                {card.technologies.map((tech) => (

                  <span
                    key={tech}
                    className={styles.tech}
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <p>
                {card.description}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
    </Reveal>
  );
}

export default About;
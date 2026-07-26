import styles from "./Skills.module.css";
import Reveal from "../../components/Reveal/Reveal";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiSolidity,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiRedis,
} from "react-icons/si";

import {
  FaCss3Alt,
  FaAws,
  FaLinux,
  FaServer,
  FaRobot,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaServer />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },

  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "FastAPI", icon: <FaServer /> },
      { name: "REST API", icon: <FaServer /> },
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: <FaRobot />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "PyTorch", icon: <FaBrain /> },
      { name: "YOLOv8", icon: "🎯" },
      { name: "OpenCV", icon: "👁️" },
      { name: "XGBoost", icon: <FaBrain /> },
      { name: "Scikit-Learn", icon: <FaBrain /> },
    ],
  },

  {
    title: "Blockchain",
    icon: "⛓️",
    skills: [
      { name: "Solidity", icon: <SiSolidity /> },
      { name: "Polygon", icon: "⬣" },
      { name: "IPFS", icon: "🌐" },
      { name: "Hardhat", icon: "⛏️" },
    ],
  },

  {
    title: "Databases",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL ", icon: < SiPostgresql/> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },

  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },

  {
    title: "Currently Learning",
    icon: "📚",
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "System Design", icon: <FaBrain /> },
    ],
  },
];

function Skills() {
  return (
    <Reveal>
    <section className={styles.skills} id="skills">
      <div className="container">
        <p className={styles.subtitle}>MY TECH STACK</p>

        <h2 className={styles.title}>Technologies I Work With.</h2>

        <p className={styles.description}>
          I enjoy building scalable web applications, experimenting with AI,
          and developing blockchain solutions using modern technologies.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div className={styles.card} key={category.title}>
              <h3 className={styles.cardTitle}>
                <span className={styles.categoryIcon}>
                  {category.icon}
                </span>

                {category.title}
              </h3>

              <div className={styles.skillsGrid}>
                {category.skills.map((skill) => (
                  <div className={styles.skillCard} key={skill.name}>
                    <div className={styles.skillIcon}>
                      {skill.icon}
                    </div>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}

export default Skills;
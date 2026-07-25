import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <motion.section
      id="home"
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`container ${styles.container}`}>
        {/* LEFT */}

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            SOFTWARE ENGINEER
          </motion.span>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            Ajiteshwar <span>Sandhu</span>
          </motion.h1>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Building AI, Full-Stack & Blockchain Solutions
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            I enjoy building scalable applications that combine clean
            engineering with practical problem-solving. From full-stack web
            platforms to AI and blockchain projects, I focus on creating
            software that is fast, maintainable, and designed for real users.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#projects" className={styles.primaryBtn}>
              Explore My Work
              <FaArrowRight />
            </a>

            <a
              href="/Ajiteshwar_Sandhu_Resume.pdf"
              download="Ajiteshwar_Sandhu_Resume.pdf"
              className={styles.secondaryBtn}
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className={styles.socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="https://github.com/AjiteshwarSandhu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ajiteshwar-sandhu-75a303286"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:Ajiteshwarsandhu089@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 80, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          <motion.div
            className={styles.codeCard}
            whileHover={{
              scale: 1.03,
              rotate: -1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className={styles.cardHeader}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>{`const engineer = {

  name: "Ajiteshwar Sandhu",

  role: "Software Engineer",

  stack: [
    "React",
    "Node.js",
    "MongoDB",
    "FastAPI",
    "Blockchain",
    "AI",
    "Machine Learning"
  ],

  currentFocus:
    "Building scalable products"
};`}</pre>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
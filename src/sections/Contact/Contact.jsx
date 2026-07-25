import styles from "./Contact.module.css";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <p className={styles.subtitle}>GET IN TOUCH</p>

                <h2 className={styles.title}>
                    Let's Build Something Amazing Together.
                </h2>

                <p className={styles.description}>
                    Whether it's an internship opportunity, freelance project,
                    collaboration, or simply a tech conversation,
                    I'd love to hear from you.
                </p>

                <div className={styles.contactCard}>
                    <a
                        href="mailto:Ajiteshwarsandhu089@gmail.com"
                        className={styles.item}
                    >
                        <FaEnvelope />
                        <div>
                            <h4>Email</h4>
                            <span>Ajiteshwarsandhu089@gmail.com</span>
                        </div>
                    </a>

                    <a
                        href="https://github.com/AjiteshwarSandhu"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.item}
                    >
                        <FaGithub />
                        <div>
                            <h4>GitHub</h4>
                            <span>github.com/AjiteshwarSandhu</span>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ajiteshwar-sandhu-75a303286"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.item}
                    >
                        <FaLinkedin />
                        <div>
                            <h4>LinkedIn</h4>
                            <span>Connect with me</span>
                        </div>
                    </a>

                    <div className={styles.item}>
                        <FaMapMarkerAlt />
                        <div>
                            <h4>Location</h4>
                            <span>Punjab, India</span>
                        </div>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <a
                        href="/Ajiteshwar_Sandhu_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactBtn}
                    >
                        View Resume
                    </a>

                    <a
                        href="/Ajiteshwar_Sandhu_Resume.pdf"
                        download="Ajiteshwar_Sandhu_Resume.pdf"
                        className={styles.resumeBtn}
                    >
                        Download Resume
                    </a>



                    <a
                        href="mailto:Ajiteshwarsandhu089@gmail.com"
                        className={styles.contactBtn}
                    >
                        Say Hello
                    </a>
                </div>

                <footer className={styles.footer}>
                    © 2026 Ajiteshwar Sandhu. Built with React & ❤️.
                </footer>
            </div>
        </section>
    );
}

export default Contact;
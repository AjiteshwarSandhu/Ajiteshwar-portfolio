import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}

        <a href="#" className={styles.logo}>
          <span>Ajiteshwar</span>
          <span className={styles.highlight}>Sandhu</span>
        </a>

        {/* Navigation */}

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.active : ""
            }`}
          aria-label="Primary Navigation"
        >
          <ul className={styles.navList}>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Ajiteshwar_Sandhu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>

        {/* Hamburger */}

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ""
            }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
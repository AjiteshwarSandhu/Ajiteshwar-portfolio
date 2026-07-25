import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      className={styles.button}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      ↑
    </button>
  );
}

export default BackToTop;
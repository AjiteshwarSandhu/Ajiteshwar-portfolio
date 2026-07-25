import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.content}>
        <div className={styles.logo}>AS</div>

        <h1>Ajiteshwar Sandhu</h1>

        <p>Software Engineer</p>

        <div className={styles.progress}>
          <div className={styles.bar}></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
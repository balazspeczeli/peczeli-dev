import styles from "./Introduction.module.scss";

export const Introduction = () => (
  <div className={styles.component}>
    <div className={styles.photo}></div>
    <div>
      I'm Balázs and this blog is about my adventures in software development,
      computer science, and all sorts of other geeky stuff!
    </div>
  </div>
);

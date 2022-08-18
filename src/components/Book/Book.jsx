import { Icon } from "components";
import styles from "./Book.module.scss";

export const Book = ({ title, author, description, lang, cover }) => (
  <div className={styles.component}>
    <div className={styles.description}>
      <div className={styles.title}>
        {lang === "hu" && <Icon src="/icons/flags/hu.png" />}
        {title}
      </div>
      <div className={styles.author}>by {author}</div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
    <img
      className={styles.cover}
      src={cover}
      alt={`Cover image for ${title}`}
    />
  </div>
);

import styles from "./Book.module.scss";

const Book = ({ title, author, year, cover, description }) => (
  <div className={styles.component}>
    <div className={styles.description}>
      <h3 className={styles.title}>
        {title}, by {author} <span className={styles.year}>({year})</span>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
    <img
      className={styles.cover}
      src={cover}
      alt={`Cover image for ${title}`}
    />
  </div>
);

export default Book;

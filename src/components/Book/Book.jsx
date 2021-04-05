import styles from "./Book.module.scss";

const Book = ({ title, author, cover, description }) => (
  <div className={styles.component}>
    <div className={styles.description}>
      <h3 className={styles.title}>
        {title}, by {author}
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

import styles from "./Book.module.scss";

const Book = ({ title, author, cover, description }) => (
  <div className={styles.component}>
    <div>
      <h3 className={styles.title}>
        {title}, by {author}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
    <img src={cover} className={styles.cover} />
  </div>
);

export default Book;

import styles from "./Post.module.scss";

const Post = ({ title, date, content }) => (
  <section className={styles.component}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.date}>{date}</div>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </section>
);

export default Post;

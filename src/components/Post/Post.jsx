import { Date } from "./Date";
import { Label } from "./Label";

import styles from "./Post.module.scss";

const Post = ({ title, date, content, category }) => (
  <section className={styles.component}>
    <h1 className={styles.title}>{title}</h1>
    <div class={styles.metadata}>
      <Label text={category} />
      <Date date={date} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </section>
);

export default Post;

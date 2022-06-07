import { Date } from "./Date";
import { Label } from "./Label";

import styles from "./Post.module.scss";

import categories from "content/posts/categories.json";

export const Post = ({ title, date, content, category }) => (
  <section className={styles.component}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.metadata}>
      <Label text={categories[category]} />
      <Date date={date} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </section>
);

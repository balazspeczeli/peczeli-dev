import Link from "next/link";
import { Date } from "components/Post/Date";
import { Label } from "components/Post/Label";

import styles from "./PostsList.module.scss";

import categories from "content/posts/categories.json";

export const PostsList = ({ posts }) => (
  <div className={styles.component}>
    {posts.map(({ id, title, date, category }) => (
      <div className={styles.post} key={id}>
        <div className={styles.date}>
          <Date date={date} />
        </div>
        <div className={styles.label}>
          <Label text={categories[category]} />
        </div>
        <Link href={"/posts/" + id}>{title}</Link>
      </div>
    ))}
  </div>
);

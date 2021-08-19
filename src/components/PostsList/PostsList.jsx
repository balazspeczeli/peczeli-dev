import Link from "next/link";
import Date from "../Post/Date";
import Label from "../Post/Label";

import styles from "./PostsList.module.scss";

const PostsList = ({ posts }) => (
  <div className={styles.component}>
    {posts.map(({ path, title, date, category }) => (
      <div className={styles.post} key={path}>
        <div className={styles.date}>
          <Date date={date} />
        </div>
        <div className={styles.label}>
          <Label text={category} />
        </div>
        <Link href="/post" as={"/" + path}>
          {title}
        </Link>
      </div>
    ))}
  </div>
);

export default PostsList;

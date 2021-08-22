import Link from "next/link";
import { Date } from "components/Post/Date";
import { Label } from "components/Post/Label";

import styles from "./PostsList.module.scss";

const PostsList = ({ posts }) => (
  <div className={styles.component}>
    {posts.map(({ path, title, date, category }) => (
      <div className={styles.post} key={path}>
        <div className={styles.date}>
          <Date date={date} />
        </div>
        <div className={styles.label}>
          <Label labelId={category} />
        </div>
        <Link href="/post" as={"/" + path}>
          {title}
        </Link>
      </div>
    ))}
  </div>
);

export default PostsList;

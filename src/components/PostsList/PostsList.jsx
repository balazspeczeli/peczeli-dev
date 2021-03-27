import Link from "next/link";

import styles from "./PostsList.module.scss";

const PostsList = ({ posts }) => (
  <div className={styles.component}>
    {posts.map(({ path, title, date }) => (
      <div className={styles.post} key={path}>
        <div className={styles.date}>{date}</div>
        <Link href="/post" as={"/" + path}>
          {title}
        </Link>
      </div>
    ))}
  </div>
);

export default PostsList;

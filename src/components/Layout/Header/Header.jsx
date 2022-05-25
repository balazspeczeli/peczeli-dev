import Link from "next/link";

import styles from "./Header.module.scss";

import config from "content/config.json";

export const Header = () => (
  <header className={styles.component}>
    <span className={styles.title}>
      <Link href="/">{config.blogTitle}</Link>
    </span>
    <nav>
      <Link href="/">Home</Link>
    </nav>
  </header>
);

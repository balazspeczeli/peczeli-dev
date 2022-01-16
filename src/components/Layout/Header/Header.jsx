import Link from "next/link";

import styles from "./Header.module.scss";

import { blogTitle } from "content/config.json";

export const Header = () => (
  <header className={styles.component}>
    <span className={styles.title}>
      <Link href="/">{blogTitle}</Link>
    </span>
    <nav>
      <Link href="/">Home</Link>
    </nav>
  </header>
);

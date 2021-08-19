import Link from "next/link";
import { BLOG_TITLE } from "../Layout/Layout";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.component}>
    <span className={styles.title}>{BLOG_TITLE}</span>
    <nav>
      <Link href="/">Home</Link>
    </nav>
  </header>
);

export default Header;

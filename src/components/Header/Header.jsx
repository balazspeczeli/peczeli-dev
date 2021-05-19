import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.component}>
    <span className={styles.title}>Balázs's blog</span>
    <nav>
      <Link href="/">Home</Link>
    </nav>
  </header>
);

export default Header;

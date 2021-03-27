import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.component}>
    <h1>Balázs's blog</h1>
    <nav>
      <Link href="/">Home</Link>
    </nav>
  </header>
);

export default Header;

import { Nav } from "./Nav";
import Link from "next/link";

import styles from "./Header.module.scss";

import config from "content/config.json";

export const Header = () => {
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/posts", text: "Posts" },
    { href: "/my-bookshelf", text: "My bookshelf" },
    { href: "/about", text: "About" },
  ];

  return (
    <header className={styles.component}>
      <span className={styles.title}>
        <Link href="/">{config.blogTitle}</Link>
      </span>
      <Nav navItems={navItems} />
    </header>
  );
};

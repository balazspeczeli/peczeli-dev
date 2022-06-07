import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./Nav.module.scss";

const NavItem = ({ text, href }) => {
  const [isActive, setIsActive] = useState(false);
  const { asPath, isReady } = useRouter();

  useEffect(() => {
    if (isReady) {
      setIsActive(asPath === href);
    }
  }, [asPath, isReady, setIsActive]);

  return (
    <Link href={href}>
      <a className={isActive && styles.active}>{text}</a>
    </Link>
  );
};

export const Nav = ({ navItems }) => {
  return (
    <nav className={styles.component}>
      {navItems.map(({ href, text }) => (
        <NavItem key={href} {...{ href, text }} />
      ))}
    </nav>
  );
};

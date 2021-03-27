import Head from "next/head";
import Header from "../Header/Header";

import styles from "./Layout.module.scss";

const Layout = ({ title, children }) => {
  const pageTitle = `${title ? `${title} | ` : ""}Balázs's blog`;

  return (
    <div className={styles.component}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <hr />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

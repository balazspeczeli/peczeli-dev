import Head from "next/head";
import { Header } from "./Header";

import styles from "./Layout.module.scss";

import { blogTitle } from "content/config.json";

const Layout = ({ title, children }) => {
  const pageTitle = title ? `${title} | ${blogTitle}` : blogTitle;

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

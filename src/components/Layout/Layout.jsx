import Head from "next/head";
import { Header } from "./Header";

import styles from "./Layout.module.scss";

import { blogTitle } from "content/config.json";
import { HorizontalLine } from "components";

const Layout = ({ title, children }) => {
  const pageTitle = title ? `${title} | ${blogTitle}` : blogTitle;

  return (
    <div className={styles.component}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <HorizontalLine />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

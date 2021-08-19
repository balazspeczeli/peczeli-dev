import Head from "next/head";
import Header from "../Header/Header";

import styles from "./Layout.module.scss";

export const BLOG_TITLE = "Balázs Péczeli";

const Layout = ({ title, children }) => {
  const pageTitle = title ? `${title} | ${BLOG_TITLE}` : BLOG_TITLE;

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

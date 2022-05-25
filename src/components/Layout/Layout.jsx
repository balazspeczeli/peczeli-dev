import Head from "next/head";
import { Header } from "./Header";

import styles from "./Layout.module.scss";

import config from "content/config.json";
import { HorizontalLine } from "components";

export const Layout = ({ title, children }) => {
  let pageTitle;

  if (title) {
    pageTitle = `${title} | ${config.blogTitle}`;
  } else {
    pageTitle = config.blogTitle;
  }

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

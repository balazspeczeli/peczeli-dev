import Layout from "../components/Layout/Layout";
import { Welcome, Posts, MyBookshelf, SideProjects, Contact } from "./sections";

import { getPosts } from "../lib/posts";
import { getCurrentlyReading } from "../lib/books";

import accounts from "../content/accounts.json";

const IndexPage = ({ posts, currentlyReading, accounts }) => {
  return (
    <Layout>
      <Welcome />
      <Posts posts={posts} />
      <MyBookshelf currentlyReading={currentlyReading} />
      <SideProjects />
      <Contact accounts={accounts} />
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getPosts();
  const currentlyReading = getCurrentlyReading();

  return {
    props: {
      posts,
      currentlyReading,
      accounts,
    },
  };
}

export default IndexPage;

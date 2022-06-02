import { HorizontalLine, Layout } from "components";
import { Welcome, LatestPosts, Contact } from "components/sections";

import { getPosts } from "lib/posts";

import accounts from "content/accounts.json";

const IndexPage = ({ posts, accounts }) => {
  return (
    <Layout>
      <Welcome />
      <LatestPosts posts={posts} limit={5} />
      <Contact accounts={accounts} />
      <HorizontalLine />
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts,
      accounts,
    },
  };
}

export default IndexPage;

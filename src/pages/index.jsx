import { Layout } from "components";
import { Welcome, Posts, Contact } from "components/sections";

import { getPosts } from "lib/posts";

import accounts from "content/accounts.json";

const IndexPage = ({ posts, accounts }) => {
  return (
    <Layout>
      <Welcome />
      <Posts posts={posts} />
      <Contact accounts={accounts} />
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

import { HorizontalLine, Layout } from "components";
import {
  Welcome,
  LatestPosts,
  GetInTouch,
  MyBookshelf,
} from "components/sections";

import { getPosts } from "lib/posts";

import accounts from "content/accounts.json";
import { getCurrentlyReading } from "lib/books";

const IndexPage = ({ posts, currentlyReading, accounts }) => {
  return (
    <Layout>
      <Welcome />
      <LatestPosts posts={posts} limit={5} />
      <MyBookshelf currentlyReading={currentlyReading} />
      <GetInTouch accounts={accounts} />
      <HorizontalLine />
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

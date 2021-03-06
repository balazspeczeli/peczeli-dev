import { Layout, PostsList, HorizontalLine, BackToHome } from "components";

import { getPosts } from "lib/posts";

const PostsPage = ({ posts }) => {
  return (
    <Layout title="Posts">
      <h2>Posts</h2>
      <PostsList posts={posts} />
      <HorizontalLine />
      <BackToHome />
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;

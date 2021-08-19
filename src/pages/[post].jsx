import { Layout, Post, Introduction } from "components";
import { Posts } from "components/sections";
import { getPosts, getPost } from "lib/posts";

const PostPage = ({ posts, post }) => {
  return (
    <Layout title={post.title}>
      <Post {...post} />
      <hr />
      <Introduction />
      <hr />
      <Posts posts={posts} />
    </Layout>
  );
};

export const getStaticPaths = () => {
  const paths = [];
  const posts = getPosts({ pathOnly: true });
  posts.forEach((post) => {
    paths.push({ params: { post: post.path } });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const posts = getPosts();
  const post = getPost(context.params.post, { includeContent: true });

  return {
    props: {
      posts,
      post,
    },
  };
};

export default PostPage;

import { Layout, Post, HorizontalLine, BackToHome } from "components";
import { getPosts, getPost } from "lib/posts";

const PostPage = ({ post }) => {
  return (
    <Layout title={post.title}>
      <Post {...post} />
      <HorizontalLine />
      <BackToHome />
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
  const post = getPost(context.params.post, { includeContent: true });

  return {
    props: {
      post,
    },
  };
};

export default PostPage;

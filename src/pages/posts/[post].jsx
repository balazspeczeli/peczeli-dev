import { Layout, Post, HorizontalLine, PostsList } from "components";
import { getPosts, getPost } from "lib/posts";

const PostPage = ({ post, posts }) => {
  const filtered = posts.filter((p) => p.path !== post.path);

  return (
    <Layout title={post.title}>
      <Post {...post} />
      <HorizontalLine />
      <section>
        <h2>Other posts</h2>
        <PostsList posts={filtered} />
      </section>
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
  const posts = getPosts();

  return {
    props: {
      post,
      posts,
    },
  };
};

export default PostPage;

import {
  BackToHome,
  Layout,
  Post,
  HorizontalLine,
  PostsList,
} from "components";
import { getPosts, getPost } from "lib/posts";

const OtherPosts = ({ posts }) => (
  <section className="mb-15">
    <h2>Other posts</h2>
    <PostsList posts={posts} />
  </section>
);

const PostPage = ({ currentPost, allPosts }) => {
  const otherPosts = allPosts.filter((post) => post.path !== currentPost.path);

  return (
    <Layout title={currentPost.title}>
      <Post {...currentPost} />
      <HorizontalLine />
      <OtherPosts posts={otherPosts} />
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
  const currentPost = getPost(context.params.post, { includeContent: true });
  const allPosts = getPosts();

  return {
    props: {
      currentPost,
      allPosts,
    },
  };
};

export default PostPage;

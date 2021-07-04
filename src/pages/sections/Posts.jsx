import PostsList from "../../components/PostsList/PostsList";

const Posts = ({ posts }) => (
  <section>
    <h2>Posts</h2>
    <PostsList posts={posts} />
  </section>
);

export default Posts;
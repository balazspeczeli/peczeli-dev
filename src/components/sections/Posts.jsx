import { PostsList } from "components/PostsList";

export const Posts = ({ posts }) => (
  <section>
    <h2>Posts</h2>
    <PostsList posts={posts} />
  </section>
);

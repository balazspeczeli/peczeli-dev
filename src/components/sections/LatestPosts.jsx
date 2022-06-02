import Link from "next/link";
import { PostsList } from "components";

export const LatestPosts = ({ posts, limit }) => {
  const rest = posts.length - limit;

  return (
    <section>
      <h2>Latest posts</h2>
      <PostsList posts={posts.slice(0, limit)} />
      {rest > 0 && (
        <p>
          <Link href="/posts">
            <a>See all of my posts ({rest} more)&rarr;</a>
          </Link>
        </p>
      )}
    </section>
  );
};

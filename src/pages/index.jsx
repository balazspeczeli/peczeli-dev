import Layout from "../components/Layout/Layout";

import Welcome from "../sections/Welcome";
import Posts from "../sections/Posts";
import MyBookshelf from "../sections/MyBookshelf";
import SideProjects from "../sections/SideProjects";
import Contact from "../sections/Contact";

import { getPosts } from "../lib/posts";
import { getCurrentlyReading } from "../lib/books";

const IndexPage = ({ posts, currentlyReading }) => {
  return (
    <Layout>
      <Welcome />
      <Posts posts={posts} />
      <MyBookshelf currentlyReading={currentlyReading} />
      <SideProjects />
      <Contact />
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
    },
  };
}

export default IndexPage;

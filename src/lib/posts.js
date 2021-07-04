import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compareDesc } from "date-fns";
import md from "./md";

const contentDirectory = path.join(process.cwd(), "src", "content");
const postsDirectory = path.join(contentDirectory, "posts");

export const getPosts = (options = {}) => {
  const posts = [];
  const postPaths = fs
    .readdirSync(postsDirectory)
    .map((file) => path.parse(file).name);

  postPaths.forEach((path) => {
    let post;

    if (options.pathOnly) {
      post = { path };
    } else {
      const { title, date } = getPost(path);
      post = { path, title, date };
    }

    posts.push(post);
  });

  posts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return posts;
};

export const getPost = (postPath, options = {}) => {
  const post = {};
  const fullPath = path.join(postsDirectory, postPath + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  if (matterResult.data.title === undefined) {
    throw new Error(`Could not find "title" property in ${postPath}`);
  }
  post.title = matterResult.data.title;

  if (matterResult.data.date === undefined) {
    throw new Error(`Could not find "date" property in ${postPath}`);
  }
  post.date = matterResult.data.date;

  if (options.includeContent) {
    post.content = md.render(matterResult.content);
  }

  return post;
};

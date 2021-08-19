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
      const { title, date, category } = getPost(path);
      post = { path, title, date, category };
    }

    posts.push(post);
  });

  posts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return posts;
};

const validateMatterResult = (matterResult, prop, postPath) => {
  if (matterResult.data[prop] === undefined) {
    throw new Error(`Could not find "${prop}" property in ${postPath}`);
  }
};

export const getPost = (postPath, options = {}) => {
  const fullPath = path.join(postsDirectory, postPath + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  validateMatterResult(matterResult, "title", postPath);
  validateMatterResult(matterResult, "date", postPath);
  validateMatterResult(matterResult, "category", postPath);

  const { title, date, category } = matterResult.data;
  const post = { title, date, category };

  if (options.includeContent) {
    post.content = md.render(matterResult.content);
  }

  return post;
};

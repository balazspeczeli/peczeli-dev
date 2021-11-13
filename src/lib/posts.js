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

const validatePostMetaData = (metadata, prop, postPath) => {
  if (metadata[prop] === undefined) {
    throw new Error(`Could not find "${prop}" property in ${postPath}`);
  }
};

const validPostCategories = {};
const validatePostCategory = (category, postPath) => {
  if (validPostCategories[category]) {
    return;
  }

  const labelsPath = path.join(contentDirectory, "labels.json");
  const fileContents = fs.readFileSync(labelsPath, "utf8");
  const labels = JSON.parse(fileContents);

  if (!labels[category]) {
    throw new Error(
      `Could not find "${category}" in ${labelsPath} ${postPath}`
    );
  }

  validPostCategories[category] = true;
};

export const getPost = (postPath, options = {}) => {
  const fullPath = path.join(postsDirectory, postPath + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const { data: postMetaData } = matterResult;

  validatePostMetaData(postMetaData, "title", postPath);
  validatePostMetaData(postMetaData, "date", postPath);
  validatePostMetaData(postMetaData, "category", postPath);

  const { title, date, category } = postMetaData;
  validatePostCategory(category, postPath);

  const post = { path: postPath, title, date, category };

  if (options.includeContent) {
    post.content = md.render(matterResult.content);
  }

  return post;
};

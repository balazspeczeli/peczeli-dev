import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compareDesc } from "date-fns";

import { postsDirectory, contentDirectory } from "./paths";
import { md, validateMetaData } from "./utils";

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

const validPostCategories = {};
const validatePostCategory = (category, fullPath) => {
  if (validPostCategories[category]) {
    return;
  }

  const labelsPath = path.join(contentDirectory, "labels.json");
  const fileContents = fs.readFileSync(labelsPath, "utf8");
  const labels = JSON.parse(fileContents);

  if (!labels[category]) {
    throw new Error(
      `Could not find "${category}" in ${labelsPath} for ${fullPath}`
    );
  }

  validPostCategories[category] = true;
};

export const getPost = (postId, options = {}) => {
  const fullPath = path.join(postsDirectory, postId + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  validateMetaData(matterResult.data, "title", fullPath);
  validateMetaData(matterResult.data, "date", fullPath);
  validateMetaData(matterResult.data, "category", fullPath);

  const { title, date, category } = matterResult.data;
  validatePostCategory(category, fullPath);

  const post = { path: fullPath, title, date, category };

  if (options.includeContent) {
    post.content = md.render(matterResult.content);
  }

  return post;
};

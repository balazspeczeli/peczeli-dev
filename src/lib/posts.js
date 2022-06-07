import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compareDesc } from "date-fns";
import { postsDirectory } from "./paths";
import { md, validateMetaData } from "./utils";
import categories from "content/posts/categories.json";

const validatePostCategory = (category, fullPath) => {
  if (!categories[category]) {
    const categoriesPath = path.join(postsDirectory, "categories.json");
    throw new Error(
      `Could not find "${category}" in ${categoriesPath} for ${fullPath}`
    );
  }
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

export const getPosts = (options = {}) => {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => path.parse(file).ext == ".md")
    .map((file) => {
      const postId = path.parse(file).name;

      if (options.pathOnly) {
        return { path: postId };
      }

      const { title, date, category } = getPost(postId);
      return { path: postId, title, date, category };
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
};

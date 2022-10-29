import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compareDesc } from "date-fns";
import { postsDirectory } from "./paths";
import {
  isMarkdownFile,
  renderMarkdown,
  validateMetaData,
  validateCategory,
} from "./utils";
import categories from "content/posts/categories.json";

export const getPost = (id, options = {}) => {
  const fullPath = path.join(postsDirectory, id + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  validateMetaData(matterResult.data, "title", fullPath);
  validateMetaData(matterResult.data, "date", fullPath);
  validateMetaData(matterResult.data, "category", fullPath);

  const { title, date, category, toc } = matterResult.data;
  validateCategory(categories, category, fullPath);

  const post = { id, title, date, category };

  if (options.includeContent) {
    post.content = renderMarkdown(matterResult.content, toc);
  }

  return post;
};

export const getPosts = (options = {}) => {
  return fs
    .readdirSync(postsDirectory)
    .filter(isMarkdownFile)
    .map((file) => {
      const id = path.parse(file).name;

      if (options.pathOnly) {
        return { id };
      }

      const { title, date, category } = getPost(id);
      return { id, title, date, category };
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
};

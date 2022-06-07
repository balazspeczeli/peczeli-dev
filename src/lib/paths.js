import path from "path";

const cwd = process.cwd();

export const contentDirectory = path.join(cwd, "src", "content");

export const postsDirectory = path.join(contentDirectory, "posts");

export const bookshelfDirectory = path.join(contentDirectory, "bookshelf");

// prettier-ignore
export const bookCoversDirectory = path.join(cwd, "public", "images", "bookshelf");

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { md } from "./md";

const contentDirectory = path.join(process.cwd(), "src", "content");
const bookshelfDirectory = path.join(contentDirectory, "bookshelf");
const coversDirectory = path.join(
  process.cwd(),
  "public",
  "images",
  "bookshelf"
);

export const getBooks = () => {
  if (!fs.existsSync(bookshelfDirectory)) {
    return [];
  }

  const books = [];
  const files = fs
    .readdirSync(bookshelfDirectory)
    .map((fileName) => {
      const fullPath = path.join(bookshelfDirectory, fileName);
      const timeCreated = fs.statSync(fullPath).birthtime.getTime();
      return { fullPath, timeCreated };
    })
    .sort((a, b) => b.timeCreated - a.timeCreated)
    .map((file) => file.fullPath);

  files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    const requiredKeys = ["title", "author", "yearOfPublication"];
    for (const key of requiredKeys) {
      if (!matterResult.data[key]) {
        throw new Error(`Could not find "${key}" in ${filePath}`);
      }
    }

    const coverImage = `${path.parse(filePath).name}.jpg`;
    const coverImagePath = path.join(coversDirectory, coverImage);
    if (!fs.existsSync(coverImagePath)) {
      throw new Error(`Could not find ${coverImagePath}`);
    }

    if (!matterResult.data.draft) {
      books.push({
        title: matterResult.data.title,
        author: matterResult.data.author,
        cover: `/images/bookshelf/${coverImage}`,
        yearOfPublication: matterResult.data.yearOfPublication,
        lang: matterResult.data.lang ? matterResult.data.lang : "en",
        description: md.render(matterResult.content),
      });
    }
  });

  return books;
};

export const getCurrentlyReading = () => {
  if (!fs.existsSync(bookshelfDirectory)) {
    return [];
  }

  const currentlyReading = [];
  fs.readdirSync(bookshelfDirectory).map((file) => {
    const fullPath = path.join(bookshelfDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    if (matterResult.data.draft) {
      currentlyReading.push({
        title: matterResult.data.title,
        author: matterResult.data.author,
        lang: matterResult.data.lang ? matterResult.data.lang : "en",
      });
    }
  });

  return currentlyReading;
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bookshelfDirectory, bookCoversDirectory } from "./paths";
import { md, validateMetaData } from "./utils";

const validateCoverImage = (coverImage) => {
  const coverImagePath = path.join(bookCoversDirectory, coverImage);
  if (!fs.existsSync(coverImagePath)) {
    throw new Error(`Could not find ${coverImagePath}`);
  }
};

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

    validateMetaData(matterResult.data, "title", filePath);
    validateMetaData(matterResult.data, "author", filePath);
    validateMetaData(matterResult.data, "yearOfPublication", filePath);

    const coverImage = `${path.parse(filePath).name}.jpg`;
    validateCoverImage(coverImage);

    const { draft, title, author, yearOfPublication, lang } = matterResult.data;

    if (!draft) {
      books.push({
        title,
        author,
        yearOfPublication,
        cover: `/images/bookshelf/${coverImage}`,
        lang: lang ? lang : "en",
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

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bookshelfDirectory, bookCoversDirectory } from "./paths";
import {
  isMarkdownFile,
  validateMetaData,
  validateCategory,
  renderMarkdown,
} from "./utils";
import categories from "content/bookshelf/categories.json";

const validateCoverImage = (coverImage) => {
  const coverImagePath = path.join(bookCoversDirectory, coverImage);
  if (!fs.existsSync(coverImagePath)) {
    throw new Error(`Could not find ${coverImagePath}`);
  }
};

const getBooks = (options = {}) => {
  if (!fs.existsSync(bookshelfDirectory)) {
    throw new Error(`${bookshelfDirectory} does not exist`);
  }

  return fs
    .readdirSync(bookshelfDirectory)
    .filter(isMarkdownFile)
    .map((fileName) => {
      const fullPath = path.join(bookshelfDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const timeCreated = fs.statSync(fullPath).birthtime.getTime();

      const matterResult = matter(fileContents);
      validateMetaData(matterResult.data, "title", fullPath);
      validateMetaData(matterResult.data, "author", fullPath);
      validateMetaData(matterResult.data, "yearOfPublication", fullPath);
      validateMetaData(matterResult.data, "category", fullPath);

      const coverImage = `${path.parse(fullPath).name}.jpg`;
      validateCoverImage(coverImage);

      const { currentlyReading, title, author, lang, category } =
        matterResult.data;
      validateCategory(categories, category, fullPath);

      const book = {
        title,
        author,
        lang: lang ? lang : "en",
        currentlyReading: Boolean(currentlyReading),
        timeCreated,
      };

      if (options.compact) {
        return book;
      }

      return {
        ...book,
        category,
        cover: `/images/bookshelf/${coverImage}`,
        description: renderMarkdown(matterResult.content),
      };
    })
    .sort((a, b) => b.timeCreated - a.timeCreated);
};

export const getBooksRead = () => {
  return getBooks({ compact: false }).filter((book) => !book.currentlyReading);
};

export const getCurrentlyReading = () => {
  return getBooks({ compact: true }).filter((book) => book.currentlyReading);
};

export const groupBooksByCategory = (books) => {
  const booksByCategory = {};
  books.forEach((b) => {
    const { category, ...book } = b;
    if (!booksByCategory[category]) {
      booksByCategory[category] = [];
    }
    booksByCategory[category].push(book);
  });
  return booksByCategory;
};

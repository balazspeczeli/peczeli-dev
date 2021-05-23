import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "./md";

const contentDirectory = path.join(process.cwd(), "src", "content");
const bookshelfDirectory = path.join(contentDirectory, "bookshelf");
const coversDirectory = path.join(
  process.cwd(),
  "public",
  "images",
  "bookshelf"
);

export const getBooks = () => {
  const books = [];
  fs.readdirSync(bookshelfDirectory).map((file) => {
    const fullPath = path.join(bookshelfDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const requiredKeys = ["title", "author", "year"];
    for (const key of requiredKeys) {
      if (!matterResult.data[key]) {
        throw new Error(`Could not find "${key}" in ${file}`);
      }
    }

    const coverImage = `${path.parse(file).name}.jpg`;
    const coverImagePath = path.join(coversDirectory, coverImage);
    if (!fs.existsSync(coverImagePath)) {
      throw new Error(`Could not find ${coverImagePath}`);
    }

    if (!matterResult.data.draft) {
      books.push({
        title: matterResult.data.title,
        author: matterResult.data.author,
        cover: `/images/bookshelf/${coverImage}`,
        description: md.render(matterResult.content),
        year: matterResult.data.year,
      });
    }
  });

  return books;
};

export const getCurrentlyReading = () => {
  const currentlyReading = [];

  fs.readdirSync(bookshelfDirectory).map((file) => {
    const fullPath = path.join(bookshelfDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    if (matterResult.data.draft) {
      currentlyReading.push(matterResult.data.title);
    }
  });

  return currentlyReading;
};

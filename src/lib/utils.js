import markdownit from "markdown-it";
import prism from "markdown-it-prism";

export const md = markdownit({
  html: true,
}).use(prism, {});

export const validateMetaData = (metadata, prop, filePath) => {
  if (metadata[prop] === undefined) {
    throw new Error(`Could not find "${prop}" property in ${filePath}`);
  }
};

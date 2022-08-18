import path from "path";
import markdownit from "markdown-it";
import markdownitAnchor from "markdown-it-anchor";
import markdownitTOC from "markdown-it-table-of-contents";

import prism from "markdown-it-prism";

const md = markdownit({
  html: true,
})
  .use(prism, {})
  .use(markdownitAnchor)
  .use(markdownitTOC, {
    includeLevel: [2, 3],
    containerHeaderHtml:
      '<div class="toc-container-header">Table of Contents</div>',
  });

export const renderMarkdown = (content, includeTOC = false) => {
  return md.render((includeTOC ? "[[toc]]" : "") + content);
};

export const validateMetaData = (metadata, prop, filePath) => {
  if (metadata[prop] === undefined) {
    throw new Error(`Could not find "${prop}" property in ${filePath}`);
  }
};

export const validateCategory = (categories, category, filePath) => {
  if (!categories[category]) {
    throw new Error(`Unknown category found in ${filePath}: ${category}`);
  }
};

export const isMarkdownFile = (file) => path.parse(file).ext == ".md";

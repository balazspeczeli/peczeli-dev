import markdownit from "markdown-it";
import prism from "markdown-it-prism";

export const md = markdownit({
  html: true,
}).use(prism, {});

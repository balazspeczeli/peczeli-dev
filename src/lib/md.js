import markdownit from "markdown-it";
import prism from "markdown-it-prism";

const md = markdownit({
  html: true,
}).use(prism, {});

export default md;

// https://github.com/vuejs/blog/blob/d27482e494d968596992ffcf63309f2584100351/.vitepress/posts.data.js
// Modified from above
// - Removed the "asFeed" logic
// - Modified watch to include subdirectories in the post folder
// - Rename fullepath to fullpath (remove the e)
// - Modified readDirSync to get dirents and filter them to get just files
// - Modified readDirSync to ignore the BlogList page /posts/index.md

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

module.exports = {
  watch: "../posts/**/*.md",
  load() {
    // Posts are in ../posts/** */ directory
    const postDir = path.resolve(__dirname, "../", "posts");

    // Remove the root index.md file (that's not a post - just the index)
    const files = getFiles(postDir).filter(
      (file) => file.path !== path.join(postDir, "index.md")
    );

    // Grabs the data from the post .md files
    // and then sorts them by date.
    // Null date entries are sent to the end
    const data = files
      .map((file) => getPost(file.name, file.path, postDir))
      .sort((a, b) => {
        console.log(b.date.time, a.date.time);
        if (isFinite(b.date.time - a.date.time)) {
          return b.date.time - a.date.time;
        } else {
          return isFinite(a.date.time) ? -1 : 1;
        }
      });

    return data;
  },
};

// Need all of the data for the posts
// Posts are in /posts/...
// Remove the index.md file (that's not a post - just the index)
// Source: https://l5d.li/p/get-files-recursive-with-the-nodejs-file-system-fs
// Inspiration: https://gist.github.com/kethinov/6658166
//
function getFiles(postDir) {
  // Get the root dirent entries
  const entries = fs.readdirSync(postDir, { withFileTypes: true });

  // Get files within the current directory and add a path key to the file objects
  // Ignore directories because those are captured recursively later
  // Ignore any files that aren't markdown (.md) files
  const files = entries
    .filter((file) => !file.isDirectory())
    .filter((file) => path.extname(file.name.toLowerCase()) === ".md")
    .map((file) => ({ ...file, path: path.join(postDir, file.name) }));

  // Get folders within the current directory
  const folders = entries.filter((folder) => folder.isDirectory());

  for (const folder of folders) {
    /*
          Add the found files within the subdirectory to the files array by calling the
          current function itself
        */
    files.push(...getFiles(path.join(postDir, folder.name)));
  }

  return files;
}

const cache = new Map();

function getPost(file, fullPath, postDir) {
  const myString = path.join("/", "posts", fullPath.replace(postDir, ""));

  const rootPath = path
    .join("/", "posts", fullPath.replace(postDir, ""))
    .replace(/\.md$/, ".html");
  const timestamp = fs.statSync(fullPath).mtimeMs;

  const cached = cache.get(fullPath);
  if (cached && timestamp === cached.timestamp) {
    return cached.post;
  }

  const src = fs.readFileSync(fullPath, "utf-8");
  const { data } = matter(src);
  const post = {
    title: data.title,
    summary: data.summary,
    date: formatDate(data.date),
    href: rootPath,
    cover: data.cover,
  };

  cache.set(fullPath, {
    timestamp,
    post,
  });
  return post;
}

function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

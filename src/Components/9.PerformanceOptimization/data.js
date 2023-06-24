const data = [
  {
    topic: "Minification",
    desc: "Minifying the JavaScript, CSS, and HTML code reduces file sizes by removing unnecessary characters like whitespace, comments, and line breaks. This improves loading times and reduces bandwidth usage. Tools like Webpack or Babel can be used for automatic code minification.",
  },
  {
    topic: "Image Optimization",
    desc: "Optimizing images is crucial for reducing their file sizes without sacrificing quality. Techniques such as compression, resizing, and using modern image formats like WebP can significantly improve page load times. Tools like ImageOptim, Squoosh, or plugins like imagemin-webpack-plugin can automate image optimization in the build process.",
  },
  {
    topic: "Bundle Splitting",
    desc: "Breaking the application code into smaller chunks or bundles helps in loading only the required code for each specific page. This reduces the initial loading time and improves perceived performance. Code-splitting can be achieved using tools like Webpack s dynamic imports or React.lazy for lazy loading components",
  },
  {
    topic: "Memoization and Pure Components",
    desc: "Utilizing memoization techniques, such as memo or reselect, can help optimize rendering by preventing unnecessary re-renders of components.",
  },
];
export default data;

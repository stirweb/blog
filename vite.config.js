const { defineConfig } = require("vite");
const { resolve } = require("path");

module.exports = defineConfig({
  server: {
    port: 5001,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        home: resolve(__dirname, "pages/home.html"),
        search: resolve(__dirname, "pages/search.html"),
        page: resolve(__dirname, "pages/page.html"),
        research: resolve(__dirname, "pages/research.html"),
        post: resolve(__dirname, "pages/post.html"),
      },
    },
  },
});

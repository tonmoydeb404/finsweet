import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      // input: glob.sync("src/**/*.html"),
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        blog: resolve(__dirname, "src/pages/blog.html"),
        careers: resolve(__dirname, "src/pages/careers.html"),
        privacy: resolve(__dirname, "src/pages/privacy.html"),
        services: resolve(__dirname, "src/pages/services.html"),
        "contact-us": resolve(__dirname, "src/pages/contact-us.html"),
        "careers-post": resolve(__dirname, "src/pages/careers-post.html"),
        "blog-post": resolve(__dirname, "src/pages/blog-post.html"),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
});

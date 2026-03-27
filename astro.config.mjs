// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://disayner.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

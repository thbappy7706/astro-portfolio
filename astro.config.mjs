// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: 'https://thbappy7706.github.io/astro-portfolio/',
    base: '/astro-portfolio/',
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
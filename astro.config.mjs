// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    // Your GitHub Pages user/organization site URL (no trailing slash)
    site: 'https://thbappy7706.github.io',
    // Base path for a project page repository
    base: '/my-folio/',
    integrations: [react(), mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
});
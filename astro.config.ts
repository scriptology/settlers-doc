import { defineConfig } from "astro/config";

import { readFileSync } from "fs";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// @ts-ignore:next-line
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
    site: "https://vicvijayakumar.com/",
    base: process.env.BASE_PATH || '/',
    markdown: {
        remarkPlugins: [remarkReadingTime],
        remarkRehype: { 
            footnoteLabelProperties: { className: [""] },
            // This will unwrap images from paragraphs
            allowDangerousHtml: true
        },
        shikiConfig: {
            theme: "dracula",
            wrap: true,
        },
    },
    integrations: [
        mdx({}),
        tailwind({
            applyBaseStyles: false,
        }),
        sitemap(),
        prefetch(),
    ],
    vite: {
        plugins: [rawFonts([".ttf"])],
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"],
            
        },
    },
});

function rawFonts(ext: Array<string>) {
    return {
        name: "vite-plugin-raw-fonts",
        transform(code: string, id: string) {
            if (ext.some((e) => id.endsWith(e))) {
                const buffer = readFileSync(id);
                return {
                    code: `export default ${JSON.stringify(buffer)}`,
                    map: null,
                };
            }
        },
    };
}

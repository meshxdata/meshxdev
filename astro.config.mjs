import { defineConfig, sharpImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import { SITE_URL } from './src/site_config';
import clerk from "astro-clerk-auth";
import node from "@astrojs/node";

export default defineConfig({
  image: {
    service: sharpImageService(),
  },
  site: "www2.meshx.dev",
  output: "server",
  integrations: [ clerk(), tailwind(), sitemap(), react({
    include: ['**/react/*'],
  })],
  vite: {
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  },
  adapter: node({
    mode: "standalone",
  }),
});
function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}
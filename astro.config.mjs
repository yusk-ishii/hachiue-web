// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://tokyo-designplex.jp',
  base: '/~2504ishii/practice/',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/styles/mixins.scss" as *;
          `,
        },
      },
    },
  },

  integrations: [compress()],
});

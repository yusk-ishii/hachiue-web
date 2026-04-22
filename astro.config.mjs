// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://yusk-ishii.github.io',
  base: '/hachiue-web',

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

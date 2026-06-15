// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  redirects: {
    '/case-study/': '/case-study/overview/',
    '/getting-started/': '/getting-started/overview/',
  },
});

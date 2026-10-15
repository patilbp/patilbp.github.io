import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.GITHUB_ACTIONS === 'true' ? 'https://patilbp.github.io' : 'https://bhagyashri-portfolio-preview.pages.dev',
  output: 'static'
});

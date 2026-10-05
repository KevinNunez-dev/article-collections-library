import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

const site = process.env.PUBLIC_SITE_URL || 'https://rptclinic.com';

export default defineConfig({
  site,
  integrations: [sitemap(), react()],
  output: 'static',
});

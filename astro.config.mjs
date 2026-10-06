import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// Fixed on purpose: a stray PUBLIC_SITE_URL in the deploy environment once made canonicals and the sitemap point at github.com.
const site = 'https://rptclinic.com';

export default defineConfig({
  site,
  integrations: [sitemap(), react()],
  output: 'static',
  // rptclinic.com proxies only /health/* to this site, so built JS/CSS must live under /health.
  build: { assets: 'health/_astro' },
});

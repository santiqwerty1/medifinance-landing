import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://yourdomain.com', // Update this when you get your domain
});

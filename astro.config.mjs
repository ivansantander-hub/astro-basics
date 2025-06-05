// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: Number(process.env.PORT) || 4321,
    host: '0.0.0.0'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

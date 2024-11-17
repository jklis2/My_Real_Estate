import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      consts: path.resolve(__dirname, './src/consts'),
      contexts: path.resolve(__dirname, './src/contexts'),
      containers: path.resolve(__dirname, './src/containers'),
      hooks: path.resolve(__dirname, './src/hooks'),
      layouts: path.resolve(__dirname, './src/layouts'),
      interfaces: path.resolve(__dirname, './src/interfaces'),
      routes: path.resolve(__dirname, './src/routes'),
      services: path.resolve(__dirname, './src/services'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
});

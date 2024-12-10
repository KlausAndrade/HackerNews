import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    environment: 'jsdom', // Use jsdom for DOM testing
    globals: true,        // Enable global APIs like `describe` and `it`
    setupFiles: './tests/setup.ts', // Setup file for Jest DOM
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the portfolio project
export default defineConfig({
  plugins: [react()],
  css: {
    // Enable SCSS modules support
    modules: {
      localsConvention: 'camelCase',
    },
  },
});

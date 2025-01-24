import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [react()],
  esbuildOptions: {
    loader: {'.js': 'jsx'},
  },
})

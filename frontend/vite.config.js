import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://easy-bazard.vercel.app/",
      "/uploads/": "https://easy-bazard.vercel.app/",
    }
  }
})

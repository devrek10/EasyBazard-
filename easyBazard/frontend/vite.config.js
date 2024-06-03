import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://easybazard-3.onrender.com",
      "/uploads/": "https://easybazard-3.onrender.com"
    }
  }
})

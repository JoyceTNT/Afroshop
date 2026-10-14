import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Anfragen an /api während der Entwicklung an das Backend (Port 3000) weiterleiten
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  ],
  server: {
    port: 4000, host: true,

  },
  preview: {
    port: 4000,
    host: true, // Pastikan host diatur ke true atau string yang sesuai
    allowedHosts: true,
  },
})

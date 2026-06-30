import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
      port: 5173,
      strictPort: true,
      host: true,
    },
  }

  if (command !== 'serve') {
    config.base = '/SitoPortfolio/'
  }

  return config
})

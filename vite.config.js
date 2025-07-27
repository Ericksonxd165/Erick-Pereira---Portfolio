import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import taildwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), taildwindcss()],
    server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
     watch: {
      usePolling: true,   // necesario para hot reload en Docker
    } }
})

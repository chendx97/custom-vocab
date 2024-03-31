import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 3333,
    proxy: {
      '/vapi/': {
        target: "http://localhost:3000",
        changeOrigin: true,
      }
    }
  },
  css: {
    preprocessOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, "./src/assets/global-var.less")}";`,
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),wasm()],
  define: {
    __APP_ENV__: process.env.VITE_APP_WALLET_PROJECT_ID,
  },
})

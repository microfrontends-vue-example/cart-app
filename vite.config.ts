import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'cart-app',
      filename: 'cartEntry.js',
      remotes: {
        mainApp: 'http://localhost:5001/assets/mainAppEntry.js'
      },
      exposes: {
        './Cart.vue': './src/components/Cart.vue'
      },
      shared: ['vue', 'pinia']
    })
  ],
  build: {
    target: 'esnext'
  }
})
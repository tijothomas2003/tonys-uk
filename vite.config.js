import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        menu: resolve(__dirname, 'menu.html'),
        transportation: resolve(__dirname, 'transportation.html'),
      },
    },
  },
})

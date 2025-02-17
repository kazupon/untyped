import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import windiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    vue(),
    windiCSS({
      scan: {
        dirs: [__dirname]
      }
    })
  ]
})

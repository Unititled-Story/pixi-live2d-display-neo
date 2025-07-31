import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 3000,
    open: true
  }
})

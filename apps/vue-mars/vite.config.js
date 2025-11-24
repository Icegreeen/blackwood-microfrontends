import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    vue(),
    ...federation({
      name: 'vue_mars',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
        './MarsContent': './src/App.vue',
        './bootstrap': './src/bootstrap.js'
      },
      shared: {
        vue: {
          singleton: true,
          requiredVersion: '^3.4.21'
        }
      }
    })
  ],
  server: {
    port: 3001,
    host: '0.0.0.0',
    cors: true,
    strictPort: true
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})


import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    svelte(),
    ...federation({
      name: 'svelte_moon',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.svelte',
        './MoonContent': './src/App.svelte',
        './bootstrap': './src/bootstrap.js'
      },
      shared: {
        svelte: {
          singleton: true,
          requiredVersion: '^4.2.12'
        }
      }
    })
  ],
  server: {
    port: 3002,
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


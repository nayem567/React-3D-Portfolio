import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'model/gltf+json': ['gltf'],
      'model/gltf+binary': ['glb']
    }
  }
})

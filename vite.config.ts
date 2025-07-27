// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correct config
export default defineConfig({
  plugins: [react()],
})

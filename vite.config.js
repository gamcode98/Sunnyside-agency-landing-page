import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://gamcode98.github.io/Sunnyside-agency-landing-page/',
  plugins: [react()],
})

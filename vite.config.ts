import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base './': i percorsi relativi funzionano su qualsiasi indirizzo (es. GitHub Pages /TeamPetrux/).
export default defineConfig({
  base: './',
  plugins: [react()],
})

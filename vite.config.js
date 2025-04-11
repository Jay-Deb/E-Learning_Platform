import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/E-Learning_Platform/',
  plugins: [react()],
})

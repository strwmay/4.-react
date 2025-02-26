import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // habilitar rede externa
    port: 3000, // porta para conexão, alterar quando necessário
    open: true // abre o navegador e inicia o server
  }
})
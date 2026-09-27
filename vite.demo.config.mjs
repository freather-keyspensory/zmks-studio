import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
export default defineConfig({
  base: '/config/zmks/',
  plugins: [react()],
  resolve: { alias: [
    {find: /^@zmkfirmware\/zmk-studio-ts-client\/(.*)$/, replacement: path.resolve('../zmk-studio-ts-client/src')+'/$1'},
    {find: '@zmkfirmware/zmk-studio-ts-client', replacement: path.resolve('../zmk-studio-ts-client/src/index.ts')}
  ]},
  build: {outDir: '../../dist/config/zmks', emptyOutDir: true, target: 'es2020', rollupOptions:{input:'index.html'}}
});

import { defineConfig } from 'vite'; 
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(() => {
  return({
    plugins: [
      reactRefresh(),
      federation({
        name: 'host',
        remotes: { 
          components: 'http://localhost:3000/assets/remoteEntry.js'
        },
        shared: [
          'react',
          'react-dom',
          '@mui/material',
          '@emotion/react',
          '@emotion/styled',
          'react-router-dom'
        ]
      })
    ],
    server: {
      host: true, 
      port: 3001
    },
    preview: {
      host: true, 
      port: 3001
    }, 
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') }
    },
    build: {
      target: 'esnext',
    }
    });
})

import { defineConfig } from 'vite'; 
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(() => {
return({
    plugins: [
      reactRefresh(),
      federation({
        name: 'routes',
        exposes: {
          './MyRoutes': 'src/App.jsx',
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
      port: 3002
    },
    preview: {
      host: true, 
      port: 3002
    }, 
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') }
    },
    build: {
      target: 'esnext',
    }
  });
})

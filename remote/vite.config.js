import { defineConfig } from 'vite'; 
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(() => {
  return({
    plugins: [
      reactRefresh(),
      federation({
        name: 'remote',
        exposes: {
          './theme': 'src/theme/index.js',
          './Viewport': 'src/Viewport/index.jsx', 
          './Skeleton': 'src/components/Outline/index.jsx',
        
        },
        shared: [
          'react',
          'prop-types',
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
      port: 3000
    },
    preview: {
      host: true, 
      port: 3000
    }, 
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') }
    },
    build: {
      target: 'esnext',
    }
  });
})

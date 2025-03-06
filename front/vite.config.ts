import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 8080,
        proxy: {
            '/server/*': {
                target: 'http://localhost:3000/api/',
                changeOrigin: true,
                ws: true,
                secure: false,
                rewrite: (path) => path.replace('/server', ''),
            },
        },
    },
});

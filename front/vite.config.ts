import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
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

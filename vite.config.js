import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

const { VITE_PORT, VITE_SERVER_URL } = loadEnv(process.NODE_ENV, process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: VITE_PORT,
        proxy: {
            '/api': VITE_SERVER_URL,
        },
    },
    plugins: [react()],
});

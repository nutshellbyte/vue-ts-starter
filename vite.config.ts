import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import Components from 'unplugin-vue-components/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        vueDevTools(),
        Components({
            directoryAsNamespace: true,
            dirs: ['src/components/shared', 'src/components/features'],
            deep: true,
            dts: true,
            extensions: ['vue'],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        outDir: 'dist',
        minify: true,
        sourcemap: true,
    },
});

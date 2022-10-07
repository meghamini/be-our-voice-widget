import path from 'path'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin(),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: undefined,
                entryFileNames: `widget.js`,
            }
        },
    }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    build: { outDir: 'docs' },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    // base: '/'  // default is fine for user sites like username.github.io, otherwise use repo subpath (username.github.io/my-repo): '/my-repo/'
    // import.meta.env.BASE_URL: Vite-injected runtime constant derived from base. It always ends with a trailing slash and is available in both dev and build.
})
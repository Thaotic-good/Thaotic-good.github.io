import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    build: { outDir: 'build' },
    // base: '/'  // default is fine for user sites like username.github.io, otherwise use repo subpath (username.github.io/my-repo): '/my-repo/'
    // import.meta.env.BASE_URL: Vite-injected runtime constant derived from base. It always ends with a trailing slash and is available in both dev and build.
})
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const root = fileURLToPath(new URL('.', import.meta.url))

// Dev-only: rewrite extensionless paths like "/privacy-policy" or
// "/privacy-policy/" to the matching ".html" entry, mirroring the
// `cleanUrls` + `trailingSlash:false` behavior used in production.
function cleanUrlsDev() {
  return {
    name: 'clean-urls-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url || ''
        const [pathname, search = ''] = url.split('?')
        if (
          pathname === '/' ||
          pathname.includes('.') ||
          pathname.startsWith('/@') ||
          pathname.startsWith('/src/') ||
          pathname.startsWith('/node_modules/') ||
          pathname.startsWith('/__')
        ) {
          return next()
        }
        const cleanPath = pathname.replace(/\/+$/, '') || '/'
        const candidate = resolve(root, '.' + cleanPath + '.html')
        if (existsSync(candidate)) {
          req.url = `${cleanPath}.html${search ? '?' + search : ''}`
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cleanUrlsDev()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        privacyPolicy: resolve(root, 'privacy-policy.html'),
        termsAndConditions: resolve(root, 'terms-and-conditions.html'),
      },
    },
  },
})

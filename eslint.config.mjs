import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const nextCoreWebVitals = require('eslint-config-next/core-web-vitals')

export default [
  ...nextCoreWebVitals,
  {
    ignores: ['node_modules/**', '.next/**', 'public/**'],
  },
]

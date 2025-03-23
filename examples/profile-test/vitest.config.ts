import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['allure-vitest/setup'],
    reporters: ['default', 'allure-vitest/reporter'],
    include: ['tests/**/*.test.ts']
  },
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, '../../src')
    }
  }
})

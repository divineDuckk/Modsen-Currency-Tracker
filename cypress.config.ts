import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    viewportHeight: 720,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
})

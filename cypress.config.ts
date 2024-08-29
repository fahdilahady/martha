/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',

    watchForFileChanges: false,

    retries: {
      runMode: 0,
      openMode: 0,
    },
    setupNodeEvents(on, config) {

    },
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'webpack',
    },
  },
});

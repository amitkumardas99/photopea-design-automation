import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',

  timeout: 60000,

  expect: {
    timeout: 5000
  },

  retries: 1,

  workers: 1,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list']
  ],

  use: {
    baseURL: 'https://www.photopea.com',

    headless: process.env.CI ? true : false,

    viewport: { width: 1280, height: 960 },

    actionTimeout: 15000,

    navigationTimeout: 30000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    acceptDownloads: true
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],

  outputDir: 'test-results'
});
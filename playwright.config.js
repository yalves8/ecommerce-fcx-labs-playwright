const { defineConfig, devices } = require('@playwright/test');

// playwright.config.js

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    fullyParallel: true,
    retries: 1,
    reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
    use: {
        headless: false, //true to CI/CD
        baseURL: 'https://www.advantageonlineshopping.com/#/',
        viewport: { width: 1280, height: 720 },
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox'] }
        },
        {
            name: 'WebKit',
            use: { ...devices['Desktop Safari'] }
        }
    ]
});
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');

setDefaultTimeout(90 * 1000); // 90 segundos por cenário

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    await this.page.screenshot({ path: `screenshots/${scenario.pickle.name}.png` });
    await this.page.video().saveAs(`videos/${scenario.pickle.name}.webm`);
  }
  if (this.browser) {
    await this.browser.close();
  }
});

const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');

let browser, page, homePage, productPage;

Given('I am on the home page', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
  await homePage.navigate();
});

When('I click on {string} and select the first product', async function (category) {
  await homePage.goToCategory(category);
  await productPage.addFirstProductToCart();
});

When('I click "Add to Cart"', async function () {
  // Already handled in addFirstProductToCart
});

When('I go to the cart and proceed to checkout', async function () {
  await productPage.goToCart();
});

When('I fill in shipping and payment information', async function () {
  await page.fill('input[name="first_name"]', 'John');
  await page.fill('input[name="last_name"]', 'Doe');
  await page.fill('input[name="address"]', '123 Example Street');
  await page.fill('input[name="city"]', 'Recife');
  await page.fill('input[name="zip"]', '50000-000');
  await page.fill('input[name="email"]', 'john.doe@email.com');
  await page.fill('input[name="phone"]', '81999999999');
  await page.fill('input[name="card_number"]', '4111111111111111');
  await page.fill('input[name="expiry_date"]', '12/25');
  await page.fill('input[name="cvv"]', '123');
  await page.click('button:has-text("Place Order")');
});

Then('I should see the order confirmation', async function () {
  const confirmation = await page.textContent('.order_confirmation');
  expect(confirmation).toContain('Thank you for your purchase');
  await browser.close();
});

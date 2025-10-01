const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const RegistrationPage = require('../pages/RegistrationPage');
const CheckoutPage = require('../pages/CheckoutPage');
const ConfirmationPage = require('../pages/ConfirmationPage');

let faker;
(async () => {
  faker = (await import('@faker-js/faker')).faker;
})();

let homePage, productPage, cartPage, registrationPage, checkoutPage, confirmationPage;

Given('I am on the home page', async function () {
  homePage = new HomePage(this.page);
  productPage = new ProductPage(this.page);
  await homePage.navigate();
});

When('I click on {string} and select the first product', async function (category) {
  await homePage.goToCategory(category);
});

When('I click "Add to Cart"', async function () {
  await productPage.addFirstProductToCart();
});

When('I go to the cart and proceed to checkout', async function () {
  cartPage = new CartPage(this.page);
  await cartPage.goToCart();
  await cartPage.proceedToCheckout();
});

When('I register a new user with valid information', async function () {
    registrationPage = new RegistrationPage(this.page);
    await registrationPage.clickNewUser();
  await registrationPage.registerNewUser();
});

When('I fill in shipping and payment information', async function () {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.clickNext();
  await checkoutPage.fillSafePayInformation();
  await checkoutPage.pay();
});

Then('I should see the order confirmation', async function () {
  confirmationPage = new ConfirmationPage(this.page);
    await confirmationPage.isConfirmationPageVisible();
    await confirmationPage.isOrderNumberVisible();
});

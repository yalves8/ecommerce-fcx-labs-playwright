class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addFirstProductToCart() {
    await this.page.locator('div.categoryRight div.product').first().click();
    await this.page.click('button:has-text("Add to Cart")');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
    await this.page.click('button:has-text("Proceed to Checkout")');
  }
}

module.exports = ProductPage;
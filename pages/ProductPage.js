class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('button[name="save_to_cart"]');
    this.cartButton = page.locator('#menuCart');
  }

  async addFirstProductToCart() {
    const firstProduct = this.page.locator('ul li img.imgProduct').first();
    await firstProduct.waitFor({ state: 'visible', timeout: 10000 });
    await firstProduct.click();

    await this.addToCartButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartButton.waitFor({ state: 'visible' });
    await this.cartButton.click();
  }
}

module.exports = ProductPage;

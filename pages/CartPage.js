class CartPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = '#menuCart';
    this.checkoutButton = '#checkOutButton';
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}
module.exports = CartPage;

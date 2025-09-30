class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.addressField = '#address';
    this.cityField = '#city';
    this.zipField = '#zip';
    this.countryField = '#country';
    this.paymentMethod = '#creditCard';
    this.placeOrderButton = '#placeOrderBtn';
  }

  async fillShippingDetails() {
    await this.page.fill(this.addressField, '123 Test Street');
    await this.page.fill(this.cityField, 'Recife');
    await this.page.fill(this.zipField, '50000-000');
    await this.page.fill(this.countryField, 'Brazil');
  }

  async fillPaymentDetails() {
    await this.page.fill(this.paymentMethod, '4111111111111111'); // Visa test card
  }

  async placeOrder() {
    await this.page.click(this.placeOrderButton);
  }
}
module.exports = CheckoutPage;
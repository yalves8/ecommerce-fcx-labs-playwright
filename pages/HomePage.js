class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.advantageonlineshopping.com/#/');
  }

  async goToCategory(category) {
    await this.page.click(`text=${category}`);
  }
}

module.exports = HomePage;
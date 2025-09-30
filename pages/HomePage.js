class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  async goToCategory(category) {
    await this.page.click(`text=${category}`);
  }
}

module.exports = HomePage;
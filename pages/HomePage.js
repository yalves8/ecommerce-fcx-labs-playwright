class HomePage {
  constructor(page) {
    this.page = page;
    this.loginButton = "#menuUser";
    this.createNewAccountButton = "a.create-new-account";
  }

  async navigate() {
    await this.page.goto("https://www.advantageonlineshopping.com/#/");
  }

  async goToCategory(category) {
    await this.page.click(`text=${category}`);
  }
  async goToLogin() {
    await this.page.click(this.loginButton);
  }
  async createNewAccount() {
    await this.page.click(this.createNewAccountButton);
  }
}

module.exports = HomePage;

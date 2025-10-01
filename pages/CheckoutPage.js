let faker;
(async () => {
  faker = (await import("@faker-js/faker")).faker;
})();

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.nextButton = "#next_btn";
    this.payButton = "#pay_now_btn_SAFEPAY";
    this.safepayUsernameInput = 'input[name="safepay_username"]';
    this.safepayPasswordInput = 'input[name="safepay_password"]';
  }

  async clickNext() {
    await this.page.click(this.nextButton);
  }

  generateSafePayUsername() {
    const length = Math.floor(Math.random() * 11) + 5;
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
    let username = "";
    for (let i = 0; i < length; i++) {
      username += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return username;
  }

  generateSafePayPassword() {
    const length = Math.floor(Math.random() * 9) + 4;
    const upper = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const lower = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const number = Math.floor(Math.random() * 10).toString();

    const otherLength = length - 3;
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let other = "";
    for (let i = 0; i < otherLength; i++) {
      other += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const arr = [upper, lower, number, ...other.split("")];
    return arr.sort(() => Math.random() - 0.5).join("");
  }

  async fillSafePayInformation() {
    const username = this.generateSafePayUsername();
    const password = this.generateSafePayPassword();

    await this.page.fill(this.safepayUsernameInput, username);
    await this.page.fill(this.safepayPasswordInput, password);
  }

  async pay() {
    await this.page.click(this.payButton);
  }
}
module.exports = CheckoutPage;

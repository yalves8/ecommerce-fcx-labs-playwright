let faker;
(async () => {
  faker = (await import("@faker-js/faker")).faker;
})();

class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.usernameField = 'input[name="usernameRegisterPage"]';
    this.emailField = 'input[name="emailRegisterPage"]';
    this.passwordField = 'input[name="passwordRegisterPage"]';
    this.confirmPasswordField = 'input[name="confirm_passwordRegisterPage"]';
    this.firstNameField = 'input[name="first_nameRegisterPage"]';
    this.lastNameField = 'input[name="last_nameRegisterPage"]';
    this.phoneNumberField = 'input[name="phone_numberRegisterPage"]';
    this.countryField = 'select[name="countryListboxRegisterPage"]';
    this.cityField = 'input[name="cityRegisterPage"]';
    this.addressField = 'input[name="addressRegisterPage"]';
    this.stateField = 'input[name="state_/_province_/_regionRegisterPage"]';
    this.postalCodeField = 'input[name="postal_codeRegisterPage"]';
    this.inputAgreeTerms = 'input[name="i_agree"]';
    this.registerButton = "#register_btn";
    this.checkoutButton = "#registration_btn";
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
    const length = Math.floor(Math.random() * 9) + 4; // 4 a 12
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

  async clickNewUser() {
    await this.page.click(this.checkoutButton);
  }

  async registerNewUser() {
    const username = faker.internet.username();
    const email = faker.internet.email();
    const password = "Test1234!";

    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.emailField, email);
    await this.page.fill(this.passwordField, password);
    await this.page.fill(this.confirmPasswordField, password);
    await this.page.fill(
      this.firstNameField,
      faker.person.firstName().substring(0, 14)
    );
    await this.page.fill(
      this.lastNameField,
      faker.person.lastName().substring(0, 14)
    );
    let ddd = faker.string.numeric(3);

    let number = faker.string.numeric(9);

    let phone = `(${ddd})${number}`.substring(0, 17);

    await this.page.fill(this.phoneNumberField, faker.phone.number(phone));
    await this.page.selectOption(this.countryField, "Brazil");
    await this.page.fill(this.cityField, "Recife");
    await this.page.fill(this.addressField, faker.location.streetAddress());
    await this.page.fill(this.stateField, "Pernambuco");
    await this.page.fill(this.postalCodeField, "50000-000");
    await this.page.check(this.inputAgreeTerms);
    await this.page.click(this.registerButton);
  }
}
module.exports = RegistrationPage;

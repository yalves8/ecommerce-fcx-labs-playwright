let faker;
(async () => {
  faker = (await import('@faker-js/faker')).faker;
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

    this.registerButton = '#register_btn';
    this.checkoutButton = '#registration_btn';
    }
    
   async clickNewUser() {
    await this.page.click(this.checkoutButton);
  }

  async registerNewUser() {
    const username = faker.internet.username();
    const email = faker.internet.email();
    const password = 'Test1234!';

    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.emailField, email);
    await this.page.fill(this.passwordField, password);
    await this.page.fill(this.confirmPasswordField, password);
    await this.page.fill(this.firstNameField, faker.person.firstName());
    await this.page.fill(this.lastNameField, faker.person.lastName());
    await this.page.fill(this.phoneNumberField, faker.phone.number('(###)#########'));
    await this.page.selectOption(this.countryField, 'Brazil');
    await this.page.fill(this.cityField, 'Recife');
    await this.page.fill(this.addressField, faker.location.streetAddress());
    await this.page.fill(this.stateField, 'Pernambuco');
      await this.page.fill(this.postalCodeField, '50000-000');
    await this.page.check(this.inputAgreeTerms);
    await this.page.click(this.registerButton);
  }
}
module.exports = RegistrationPage;

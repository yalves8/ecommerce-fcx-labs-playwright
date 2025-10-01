# FCX Labs Test Automation

📌 **About the Challenge**  
This repository contains test scenarios written in **Gherkin** and the automation of the checkout flow for the **Advantage Online Shopping** e-commerce website, using **Playwright** and **Cucumber**.

---

## 📋 Prerequisites

### Node.js and npm
Make sure you have Node.js and npm installed.  
To verify, run:
```bash
node -v
npm -v
```
Google Chrome

Playwright uses Chrome to run the tests.
The browser will be installed automatically when installing the project dependencies.

Project Dependencies

All dependencies are managed via npm:
```bash
npm install
```
## 👨‍💻 How to Install and Run the Project

Clone the repository:
```bash
git clone https://github.com/yalves8/ecommerce-fcx-labs-playwright.git
cd ecommerce-fcx-labs-playwright
```

Running Tests

Run all tests:
```bash
npm run test
```

Run only tests tagged smoke:
```bash
npm run test:smoke
```

Run only tests tagged regression:
```bash
npm run test:regression
```

##  📝 Test Scenarios

The .feature files are located in /features/, covering cases such as:

✅ Registering a new user with valid data
✅ Adding products to the cart and verifying the items are included correctly
✅ Filling SafePay credentials during checkout
✅ Complete checkout flow, from adding the product to payment confirmation

## 🤖 Automation

This project uses Cucumber for defining Gherkin scenarios and Playwright to automate browser interactions.

## ⚙️ Automation Setup

Playwright: used to run tests in Chrome.

Cucumber: maps Gherkin scenarios to step definitions for automation.

Hooks: handle browser initialization and teardown before/after each test.

## 🌊 Execution Flow

Initialization:
hooks.js configures Playwright before each test and closes the browser after execution.

Step Definitions:
Steps from .feature files are implemented in files under /steps/.

Page Interaction:
Page classes (RegistrationPage, CartPage, CheckoutPage, ConfirmationPage) contain methods to interact with website elements.

Validations:
Validations use Playwright Test's expect to ensure expected behaviors are achieved.

## Project Structure
```bash
fcx-labs-test-automation/
├── pages/                 # Page classes
│   ├── BasePage.js
│   ├── RegistrationPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── ConfirmationPage.js
├── steps/                 # Cucumber step definitions
│   ├── checkout.steps.js
│   └── hooks.js
├── features/              # Feature files
│   └── checkout.feature
├── package.json           # Project configuration and npm scripts
├── playwright.config.js   # Playwright configuration
├── README.md              # Project documentation
└── .gitignore

```

## 🛠️ Contributing

Fork this repository.

Create a branch for your feature or fix:
```bash
git checkout -b feature/my-feature
```

Commit your changes:
```bash
git commit -m "[Feature]: my new feature"
```

Open a Pull Request!


### Made with ♥️ by Yasmin Souza 👋

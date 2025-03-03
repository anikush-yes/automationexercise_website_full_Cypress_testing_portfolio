# 🚀 Automated Testing with Cypress

## 📌 Overview

This project contains automated test scripts using [Cypress](https://www.cypress.io/) for testing various functionalities of the [Automation Exercise](https://automationexercise.com/) website.

## Table of Contents

[Features](#features)

[Test Coverage](#test-coverage)

[Project Structure](#project-structure)

[Getting Started](#getting-started)

[Running Tests](#running-tests)

[Custom Commands](#custom-commands)

[Contributing](#contributing)

[License](#license)

## 🌟 Features

- ✅ Automated end-to-end testing with Cypress

- 🚀 Fast and reliable test execution

- 🔍 Comprehensive coverage of UI, authentication, and API functionality

- 🛒 E-commerce workflow testing (product browsing, cart, checkout)

- 📩 Subscription and contact form validation

- 🔄 API testing for user and product management

- 📊 Detailed assertions and response validation

- 🔧 Easily extendable with custom commands


## ⚙️ Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install Cypress globally or locally:
  ```sh
  npm install cypress --save-dev
  ```
- Clone this repository and navigate to the project directory:
  ```sh
  git clone https://anikush-yes.github.io/automationexercise.com/cypress_tests)>
  cd <C:\FinalWorks\automationexercise_website_full_Cypress_testing_portfolio>
  ```
- Run Cypress Test Runner:
  ```sh
  npx cypress open
  ```

## 📂 Project Structure

```
project-root/
│── cypress/
│   ├── e2e/          # Contains all test cases
│   │   ├── tests/            # 20 UI test cases
│   │   ├── api-tests/        # API tests stored separately
│   ├── fixtures/             # Test data and JSON fixtures
│   ├── plugins/              # Cypress plugins
│   ├── support/              # Custom commands and configurations
│   │   ├── commands.js       # Custom Cypress commands
│── cypress.json              # Cypress configuration file
│── package.json              # Project dependencies and scripts
│── README.md                 # Project documentation
```

```
project-root/
│── cypress/
│   ├── e2e/          # Contains all test cases
│   │   ├── tests/            # 20 UI test cases
│   │   ├── api-tests/        # API tests stored separately
│   ├── fixtures/             # Test data and JSON fixtures
│   ├── plugins/              # Cypress plugins
│   ├── support/              # Custom commands and configurations
│── cypress.json              # Cypress configuration file
│── package.json              # Project dependencies and scripts
│── README.md                 # Project documentation
```

## 🧪 Test Suites

### 🖥️ UI Functional Tests

The UI test suite includes 20 test cases covering:

- 🛍️ User registration, login, and authentication flows
- 🔑 Login with valid and invalid credentials
- 🚪 Logout functionality
- 🛒 Product browsing, searching, and category filtering
- 🏷️ Shopping cart operations such as adding, updating, and removing items
- 📦 Checkout process with user registration and login before or during checkout
- ✉️ Subscription functionality on different pages
- 📩 Contact form submission

The UI test suite includes 15 test cases covering:

- 🛍️ Product browsing, searching, and category filtering
- 🛒 Shopping cart operations such as adding, updating, and removing items
- 🏷️ Checkout process with user registration and login before or during checkout
- ✉️ Subscription functionality on different pages
- 📩 Contact form submission

### 🔗 API Tests

The API test suite includes 14 test cases that verify:

- 📦 Product listing and search functionality
- 🏷️ Brand management operations
- 🔐 User authentication flows
- 📝 Account creation, update, and deletion
- ✅ Response validation for both successful and error scenarios
- 🔄 Support for different HTTP methods (GET, POST, PUT, DELETE)

## 📝 Test Examples

### Example: 🔐 User Registration Test

```javascript
describe('User Registration', () => {
  it('Should register a new user successfully', () => {
    cy.visit('https://automationexercise.com/');
    cy.contains('Signup / Login').click();
    cy.get('[data-qa="signup-name"]').type('John Doe');
    cy.get('[data-qa="signup-email"]').type('johndoe@example.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Enter Account Information').should('be.visible');
  });
});
```

### Example: 🖥️ UI Test - Searching for a Product

```javascript
describe('Search Product', () => {
  it('Should allow users to search for a product', () => {
    cy.visit('https://automationexercise.com/');
    cy.contains('Products').click();
    cy.get('.form-control.input-lg').type('Dress');
    cy.get('#submit_search').click();
    cy.contains('Searched Products').should('be.visible');
  });
});
```

### Example: 🔗 API Test - Get All Products

```javascript
describe('API Test - Get All Products', () => {
  it('Should retrieve all products successfully', () => {
    cy.request('https://automationexercise.com/api/productsList').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('products').and.not.be.empty;
    });
  });
});
```

## ▶️ Running Tests

### Run All Tests

```sh
npx cypress run
```

### Run API Tests Only

```sh
npx cypress run --spec "cypress/e2e/apiTest.cy.js"
```

### Run UI Tests Only

```sh
npx cypress run --spec "cypress/e2e/ui-tests.cy.js"
```

### Open Cypress Test Runner

````sh
npx cypress open
```### Run All Tests
```sh
npx cypress run
````

### Run API Tests Only

```sh
npx cypress run --spec "cypress/e2e/API.cy.js"
```

### Run UI Tests Only

```sh
npx cypress run --spec "cypress/e2e/Tests.cy.js"
```

### Open Cypress Test Runner

````sh
npx cypress open
```To run tests in headless mode:

```sh
npx cypress run
````

To run a specific test file:

```sh
npx cypress run --spec cypress/e2e/<test-file>.js
```

## 📌 Notes

- Cypress is configured to test against `https://automationexercise.com/`
- Some tests require account creation and deletion during execution.

## 🤝 Contribution

Feel free to contribute by adding more test cases or improving existing ones. Fork the repository, make changes, and submit a pull request.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).



📜 License

This project is open-source and available under the MIT License.



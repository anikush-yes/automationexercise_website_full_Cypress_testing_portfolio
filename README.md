🚀 Automated Testing with Cypress

Table of Contents

Overview

Prerequisites

Project Structure

Test Suites

UI Functional Tests

API Tests

Test Examples



Running Tests

Notes

Contribution

License📌 Overview

⚙️ Prerequisites

📂 Project Structure

🧪 Test Suites

🔐 User Authentication Tests

🖥️ UI Functional Tests

🔗 API Tests

📝 Test Examples

🔐 User Registration Test

🖥️ UI Test - Searching for a Product

🔗 API Test - Get All Products

▶️ Running Tests

📌 Notes

🤝 Contribution

📜 License

🌟 Features

End-to-end testing with Cypress

Fast execution and reliable results

UI, authentication, and API coverage

Shopping cart and checkout testing

API validation and response testingAutomated end-to-end testing with Cypress

Fast and reliable test execution

Comprehensive coverage of UI, authentication, and API functionality

E-commerce workflow testing (product browsing, cart, checkout)

Subscription and contact form validation

API testing for user and product management

Detailed assertions and response validation

Easily extendable with custom commands

✅ Automated end-to-end testing with Cypress

🚀 Fast and reliable test execution

🔍 Comprehensive coverage of UI, authentication, and API functionality

🛒 E-commerce workflow testing (product browsing, cart, checkout)

📩 Subscription and contact form validation

🔄 API testing for user and product management

📊 Detailed assertions and response validation

🔧 Easily extendable with custom commands

📌 Overview

This project contains automated test scripts using Cypress for testing various functionalities of the Automation Exercise website.

⚙️ Prerequisites

Install Node.js

Install Cypress globally or locally:

npm install cypress --save-dev

Clone this repository and navigate to the project directory:

git clone <repository-url>
cd <project-directory>

Run Cypress Test Runner:

npx cypress open

📂 Project Structure

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

🧪 Test Suites

🖥️ UI Functional Tests

The UI test suite includes 20 test cases covering:

🛍️ User registration, login, and authentication flows

🔑 Login with valid and invalid credentials

🚪 Logout functionality

🛒 Product browsing, searching, and category filtering

🏷️ Shopping cart operations such as adding, updating, and removing items

📦 Checkout process with user registration and login before or during checkout

✉️ Subscription functionality on different pages

📩 Contact form submission

The UI test suite includes 15 test cases covering:

🛍️ Product browsing, searching, and category filtering

🛒 Shopping cart operations such as adding, updating, and removing items

🏷️ Checkout process with user registration and login before or during checkout

✉️ Subscription functionality on different pages

📩 Contact form submission

🔗 API Tests

The API test suite includes 14 test cases that verify:

📦 Product listing and search functionality

🏷️ Brand management operations

🔐 User authentication flows

📝 Account creation, update, and deletion

✅ Response validation for both successful and error scenarios

🔄 Support for different HTTP methods (GET, POST, PUT, DELETE)

📝 Test Examples

Example: 🔐 User Registration Test

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

Example: 🖥️ UI Test - Searching for a Product

describe('Search Product', () => {
  it('Should allow users to search for a product', () => {
    cy.visit('https://automationexercise.com/');
    cy.contains('Products').click();
    cy.get('.form-control.input-lg').type('Dress');
    cy.get('#submit_search').click();
    cy.contains('Searched Products').should('be.visible');
  });
});

Example: 🔗 API Test - Get All Products

describe('API Test - Get All Products', () => {
  it('Should retrieve all products successfully', () => {
    cy.request('https://automationexercise.com/api/productsList').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('products').and.not.be.empty;
    });
  });
});

▶️ Running Tests

Run All Tests

npx cypress run

Run API Tests Only

npx cypress run --spec "cypress/e2e/apiTest.cy.js"

Run UI Tests Only

npx cypress run --spec "cypress/e2e/ui-tests.cy.js"

Open Cypress Test Runner

npx cypress open
```### Run All Tests
```sh
npx cypress run

Run API Tests Only

npx cypress run --spec "cypress/e2e/API.cy.js"

Run UI Tests Only

npx cypress run --spec "cypress/e2e/Tests.cy.js"

Open Cypress Test Runner

npx cypress open
```To run tests in headless mode:

```sh
npx cypress run

To run a specific test file:

npx cypress run --spec cypress/e2e/<test-file>.js

📌 Notes

Cypress is configured to test against https://automationexercise.com/

Some tests require account creation and deletion during execution.

🤝 Contribution

Feel free to contribute by adding more test cases or improving existing ones. Fork the repository, make changes, and submit a pull request.

📜 License

This project is open-source and available under the MIT License.


# 🚀 Automated Test Suite for End-to-End Validation

[![Cypress](https://img.shields.io/badge/Tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![UI Tests](https://img.shields.io/badge/UI%20Tests-20%20passing-brightgreen.svg)]() 
[![API Tests](https://img.shields.io/badge/API%20Tests-14%20passing-brightgreen.svg)]()

## 📌 Overview

This project compares automated UI and API testing for the Automation Exercise website using Cypress. It includes 20 UI tests and 14 API tests, covering authentication, product management, and checkout. API tests are implemented in Cypress for seamless integration.

## 🌟 Features

- Dual Testing Approach: Complete API and UI test coverage
- Custom Commands: Reusable functions for common operations
- Test Data Management: Efficient handling of user data
- Clean Architecture: Well-structured test organization
- Comprehensive Assertions: Thorough validation of application behavior


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

### 🔗 API Tests

The API test suite includes 14 test cases that verify:

- 📦 Product listing and search functionality
- 🏷️ Brand management operations
- 🔐 User authentication flows
- 📝 Account creation, update, and deletion
- ✅ Response validation for both successful and error scenarios
- 🔄 Support for different HTTP methods (GET, POST, PUT, DELETE)

# 🏁 Getting Started

## ⚙️ Prerequisites and Installation

* ***Install*** [Node.js](https://nodejs.org/)
  
* ***Install Cypress globally:***
```sh
npm install -g cypress
```
* ***Or install Cypress locally within the project:***
```sh
npm install cypress --save-dev
```
* ***Clone this repository and navigate to the project directory:***
```sh
git clone https://anikush-yes.github.io/automationexercise.com/cypress_tests)
cd automationexercise_website_full_Cypress_testing_portfolio
```
* ***Run Cypress Test Runner:***
```sh
npx cypress open
```

## 👟 Running Tests

### Run All Tests

```sh
npx cypress run
```

### Run UI Tests Only

```sh
npx cypress run --spec "cypress/e2e/Tests.cy.js"
```
### Run API Tests Only

```sh
npx cypress run --spec "cypress/e2e/API_Test.cy.js"
```

### To run a specific test file:

```sh
npx cypress run --spec cypress/e2e/<test-file>.js
```
### Run API tests only (executed in the pipeline with Newman):
``` npx cypress run --spec "cypress/e2e/API_Test.cy.js"
newman run api_tests_collection.json -e api_tests_environment.json
```

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

## 📌 Notes

- Cypress is configured to test against `https://automationexercise.com/`
- Some tests require account creation and deletion during execution.

## 🤝 Contribution

Feel free to contribute by adding more test cases or improving existing ones. Fork the repository, make changes, and submit a pull request.

## 📜 License

This project is open-source and available under the MIT License.

**⭐ If you like this project, don't forget to give it a star! ⭐** 




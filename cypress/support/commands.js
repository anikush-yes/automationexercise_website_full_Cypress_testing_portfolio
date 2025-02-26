// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('createAccount', () => {
    const timestamp = Date.now(); 
    const username = `User${timestamp}`;
    const email = `test${timestamp}@example.com`;

    cy.contains('a', 'Signup / Login').click();

    cy.get('input[data-qa="signup-name"]').type(username);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    cy.get('input[data-qa="password"]').type('123456');
    cy.get('select[data-qa="days"]').select('23');
    cy.get('select[data-qa="months"]').select('May');
    cy.get('select[data-qa="years"]').select('1999');
    cy.get('#newsletter').click();
    cy.get('#optin').click();
    cy.get('#first_name').type('Alice');
    cy.get('#last_name').type('Smith');
    cy.get('#company').type('GlobalTech');
    cy.get('#address1').type('456 Elm Street');
    cy.get('#address2').type('Suite 789');
    cy.get('#country').select('Canada');
    cy.get('#state').type('Ontario');
    cy.get('#city').type('Toronto');
    cy.get('#zipcode').type('M5H 2N2');
    cy.get('#mobile_number').type('+14165550000');
    cy.get('button[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('be.visible');
    cy.contains('Continue').click();

    cy.wrap({ username, email, password: '123456' }).as('newUser');
});


import 'cypress-file-upload';



Cypress.Commands.add('launchBrowser', () => {
    
        cy.visit('https://automationexercise.com/');
        cy.url().should('eq', 'https://automationexercise.com/');
        cy.contains('a', 'Home').should('be.visible');

        });
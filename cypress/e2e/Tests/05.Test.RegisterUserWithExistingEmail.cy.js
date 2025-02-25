/// <reference types = "cypress" />

describe('Register User with Existing Email', () => {
    it('Should not allow registration with an existing email', () => {
        cy.visit('https://automationexercise.com/');

        cy.contains('a', 'Signup / Login').click();

        cy.createAccount();
        cy.contains('Logout').click();

        cy.get('@newUser').then((user) => {
            cy.contains('New User Signup!').should('be.visible');


            cy.get('input[data-qa="signup-name"]').type(user.username);
            cy.get('input[data-qa="signup-email"]').type(user.email);


            cy.get('button[data-qa="signup-button"]').click();
            cy.contains('Email Address already exist!').should('be.visible');
        });
    });
});
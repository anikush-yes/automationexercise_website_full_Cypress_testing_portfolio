/// <reference types = "cypress" />

describe('Logout User', () => {
    it('Should visit homepage, login with correct email, logout', () => {
        cy.visit('https://automationexercise.com/');

        cy.contains('a', 'Signup / Login').click();


        cy.createAccount();

        cy.get('@newUser').then((user) => {
            cy.contains(`Logged in as ${user.username}`).should('be.visible');

            cy.contains('Logout').click();
            cy.wait(2000);
            cy.reload();

            cy.contains('Login to your account', { timeout: 10000 }).should('be.visible');
            cy.url().should('include', '/login');


            cy.get('[data-qa="login-email"]').type(user.email);
            cy.get('[data-qa="login-password"]').type(user.password);
            cy.get('[data-qa="login-button"]').click();

            cy.contains(`Logged in as ${user.username}`).should('be.visible');

            cy.contains('Logout').click();
            cy.wait(2000);
            cy.reload();

            cy.contains('Login to your account', { timeout: 10000 }).should('be.visible');
            cy.url().should('include', '/login');

        });
    });
});
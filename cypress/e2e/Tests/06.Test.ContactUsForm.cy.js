/// <reference types = "cypress" />

describe('Contact Us Form Test', () => {
    it('Should submit the contact form successfully', () => {
        cy.visit('https://automationexercise.com/');
        cy.url().should('eq', 'https://automationexercise.com/');

        cy.contains('a', 'Home').should('be.visible');

        cy.contains('Contact us').click();

        cy.contains('Get In Touch').should('be.visible');

        cy.get('[data-qa="name"]').type('Petras Petrauska');
        cy.get('[data-qa="email"]').type('Petras@ispopular.com');
        cy.get('[data-qa="subject"]').type('Test Subject');
        cy.get('[data-qa="message"]').type('This is a test message.');

        cy.get('input[type="file"]').attachFile('sample.jpg');

        cy.get('[data-qa="submit-button"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Press OK to proceed.');
        });

        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

        cy.contains('a', 'Home').click();
        cy.url().should('eq', 'https://automationexercise.com/');

    });
});
/// <reference types = "cypress" />


describe('Verify Subscription in Cart page', () => {
    it('Verify that the subscription input at Cart page allows entering an email and confirming the subscription', () => {
        cy.launchBrowser();

        cy.contains('Cart').click();

        cy.scrollTo('bottom', { duration: 2000 });

        cy.get('.single-widget h2').should('have.text', 'Subscription');

        const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;
        cy.get('#susbscribe_email').type(randomEmail);
        cy.wait(1000);

        cy.get('#subscribe').click();
        
        cy.contains('You have been successfully subscribed!').should('be.visible');

    });
});
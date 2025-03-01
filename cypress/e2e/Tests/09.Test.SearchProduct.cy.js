/// <reference types = "cypress" />


describe('Search Product', () => {
    it('Should navigate user to the the search product input, allow to enter searched product, verify all products related to search', () => {
    cy.launchBrowser();
    
    cy.contains('Products').click();
    cy.url().should('eq', 'https://automationexercise.com/products');
    cy.get('h2.title.text-center').should('have.text', 'All Products');
    cy.get('.form-control.input-lg').type('Dress');
    cy.get('#submit_search').click();
    cy.get('h2.title.text-center').should('have.text', 'Searched Products');
    cy.get('.features_items').should('be.visible');


    });
    });
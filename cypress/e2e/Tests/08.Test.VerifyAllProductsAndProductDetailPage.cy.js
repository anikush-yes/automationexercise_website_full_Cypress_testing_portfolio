/// <reference types = "cypress" />


describe('Verify All Products and product detail page', () => {
    it('Should open the browser and navigate user to the first product details page', () => {
    cy.launchBrowser();
    
    cy.contains('Products').click();
    cy.url().should('eq', 'https://automationexercise.com/products');
    cy.get('h2.title.text-center').should('have.text', 'All Products');

    cy.get('.features_items').should('exist').and('be.visible');

    cy.get('.features_items a[href*="product_details"]').first().click();
    
    cy.url().should('eq', 'https://automationexercise.com/product_details/1');

    });
    });

  
/// <reference types = "cypress" />

describe('Remove Products From Cart', () => {


  it('Should visit homepage, add product to the cart and remove it', () => {


    cy.visit('https://automationexercise.com/')
    cy.title().should('include', 'Automation Exercise')

    cy.get('.features_items .product-image-wrapper').first().scrollIntoView();
    cy.wait(1000);
    cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
    cy.wait(1000);
    cy.get('.features_items .product-image-wrapper').first().contains('Add to cart').click({ force: true });
    cy.wait(2000);

    cy.contains('Continue Shopping').click();

    cy.contains('Cart').click();


    cy.url().should('include', '/view_cart');
    cy.contains('Shopping Cart').should('be.visible');

    cy.get('.cart_quantity_delete[data-product-id="1"]').click();
    cy.wait(2000);
    cy.get('.cart_quantity_delete[data-product-id="1"]').should('not.exist');

  });
});
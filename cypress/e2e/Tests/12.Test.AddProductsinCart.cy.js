/// <reference types = "cypress" />


describe('Verify adding multiple products to the cart and checking prices', () => {
    it('Should add two selected products to the cart, verify prices, quantity, and total price', () => {
        cy.launchBrowser();

        cy.contains('Products').click();

        cy.get('.features_items .product-image-wrapper').first().scrollIntoView();
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').first().contains('Add to cart').click({ force: true });
        cy.wait(2000);

      
        cy.contains('Continue Shopping').click();
        cy.wait(2000);

 
        cy.get('.features_items .product-image-wrapper').eq(1).scrollIntoView();
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').eq(1).trigger('mouseover');
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').eq(1).contains('Add to cart').click({ force: true });
        cy.wait(2000);


        cy.contains('View Cart').click();

        cy.get('.cart_product').should('have.length', 2);


        
        cy.get('.cart_price').each(($price) => {
            cy.wrap($price).should('be.visible');
        });

        cy.get('.cart_quantity').each(($cart_quantity) => {
            cy.wrap($cart_quantity).should('be.visible');
        });

        cy.get('.cart_total_price').each(($cart_total_price) => {
            cy.wrap($cart_total_price).should('be.visible');
        });
    });
});


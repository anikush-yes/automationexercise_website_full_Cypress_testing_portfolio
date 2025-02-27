/// <reference types = "cypress" />


describe(' Verify Product quantity in Cart', () => {
    it('should verify product quantity in cart', () => {

        cy.launchBrowser();



        cy.get("a[href='/product_details/3']").click();

        cy.get('.product-information').should('be.visible');

        cy.get('#quantity').invoke('val', '4').trigger('change');

       // Cy.get('#quantity').clear().type('4')

       cy.contains('Add to cart').click();

       cy.contains('View Cart').click();

       cy.get('td.cart_quantity').should('contain', '4');

       });
    });
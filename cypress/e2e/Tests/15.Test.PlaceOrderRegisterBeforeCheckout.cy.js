/// <reference types = "cypress" />


describe('Place Order: Register before Checkout', () => {
    it('Completes the order process with account registration before Checkout', () => {

        cy.launchBrowser();
        
cy.contains('Signup / Login').click;

cy.createAccount();

cy.get('@newUser').then((user) => {
    cy.contains(`Logged in as ${user.username}`).should('be.visible');
});

cy.get("a[href='/product_details/2']").click();

        cy.get('.product-information').should('be.visible');

       cy.contains('Add to cart').click();

       cy.contains('Cart').click();

    
       cy.url().should('include', '/view_cart'); 
       cy.contains('Shopping Cart').should('be.visible'); 

       cy.contains('Proceed To Checkout').click();
      

        cy.get('#address_delivery').within(() => {
            cy.get('.address_firstname.address_lastname')
                .should('be.visible')
                .and('not.be.empty');

            cy.get('.address_address1.address_address2')
                .should('be.visible')
                .and('not.be.empty');

            cy.get('.address_city.address_state_name.address_postcode')
                .should('be.visible')
                .and('not.be.empty');

            cy.get('.address_country_name')
                .should('be.visible')
                .and('not.be.empty');

            cy.get('.address_phone')
                .should('be.visible')
                .and('not.be.empty');
        });

        cy.get('#address_invoice').within(() => {
            cy.get('.address_firstname.address_lastname')
                .should('be.visible')
                .and('not.be.empty');

            cy.get('.address_address1.address_address2')
                .should('be.visible')
                .and('not.be.empty');

            cy.get('.address_city.address_state_name.address_postcode')
                .should('be.visible')
                .and('not.be.empty');

            cy.get('.address_country_name')
                .should('be.visible')
                .and('not.be.empty');

            cy.get('.address_phone')
                .should('be.visible')
                .and('not.be.empty');
        });

        cy.contains('Review Your Order').should('be.visible'); 

        cy.get('textarea.form-control')
        .should('be.visible')
        .type('This is a test comment');

    cy.contains('a[href="/payment"]', 'Place Order', { timeout: 2000 })
        .should('be.visible')
        .and('not.be.disabled')
        .click();

    cy.get('input.form-control[name="name_on_card"]')
        .should('be.visible')
        .type('John Doe');

    cy.get('input.form-control[name="card_number"]')
        .should('be.visible')
        .type('4111111111111111');

    cy.get('input.form-control[name="cvc"]')
        .should('be.visible')
        .type('123');

    cy.get('input.form-control.card-expiry-month')
        .should('be.visible')
        .type('12');

    cy.get('input.form-control[name="expiry_year"]')
        .should('be.visible')
        .type('25');



    cy.contains('Pay and Confirm Order').click();

    cy.contains('Order Placed!').should('exist').and('be.visible');
        cy.contains('Delete Account').click();
        cy.contains('Account Deleted!').should('be.visible');
        cy.contains('Continue').click();
    });
});
/// <reference types = "cypress" />

describe('Search Products and Verify Cart After Login', () => {


    it('Verify Product Search, Add to Cart, and Persistence After Login.', () => {


        cy.visit('https://automationexercise.com/')

        cy.contains('Products').click();

        cy.contains('All Products').should('be.visible');
        cy.url().should('include', '/products');

        cy.get('.form-control.input-lg').type('Dress');
        cy.get('#submit_search').click();

        cy.get('h2.title.text-center').should('have.text', 'Searched Products');
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items .col-sm-4').each(($el) => {
            cy.wrap($el).should('be.visible');
        });


        cy.get('.features_items .product-image-wrapper').eq(4).scrollIntoView();
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').eq(4).trigger('mouseover');
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').eq(4).contains('Add to cart').click({ force: true });
        cy.wait(2000);

        cy.contains('Continue Shopping').click();

        cy.get('.features_items .product-image-wrapper').eq(5).scrollIntoView();
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').eq(5).trigger('mouseover');
        cy.wait(1000);
        cy.get('.features_items .product-image-wrapper').eq(5).contains('Add to cart').click({ force: true });
        cy.wait(2000);

        cy.contains('Continue Shopping').click();
        cy.contains('Cart').click();

        cy.get('#cart_info_table tbody tr').should('have.length', 2);

        cy.contains('Signup / Login').click;
        cy.createAccount().then((newUser) => {
            cy.contains('Logout').click();


            cy.contains('Signup / Login').click();

            cy.get('input[data-qa="login-email"]').type(newUser.email);
            cy.get('input[data-qa="login-password"]').type(newUser.password);

            cy.get('button[data-qa="login-button"]').click();


            cy.contains(`Logged in as ${newUser.username}`).should('be.visible');

            cy.contains('Cart').click();
            
        });
        cy.get('#cart_info_table tbody tr').should('have.length', 2);
    });
});
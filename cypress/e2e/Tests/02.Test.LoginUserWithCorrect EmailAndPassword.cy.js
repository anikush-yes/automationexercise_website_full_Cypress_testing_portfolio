/// <reference types = "cypress" />

describe('Login User with correct email and password', () => {

    it('Should visit homepage, login with correct email, delete acc', () => {

        //1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:

        cy.visit('https://automationexercise.com/');

        //4. Click on 'Signup / Login' button

        cy.contains('a', 'Signup / Login').click();


        cy.createAccount();

        //5-10 Verify 'Login to your account' is visible,  Enter correct email address and password,  Click 'login' button,Verify that 'Logged in as username' is visible, Click 'Delete Account' button, Verify that 'ACCOUNT DELETED!' is visible

        

        cy.get('@newUser').then((user) => {
            cy.contains(`Logged in as ${user.username}`).should('be.visible');

            
            cy.contains('Logout').click();
            cy.contains('a', 'Signup / Login').click();
            cy.contains('Login to your account').should('be.visible');
            cy.get('[data-qa="login-email"]').type(user.email);
            cy.get('[data-qa="login-password"]').type(user.password);
            cy.get('[data-qa="login-button"]').click();
            cy.contains(`Logged in as ${user.username}`).should('be.visible');

           
            cy.contains('Delete Account').click();
            cy.get('[data-qa="account-deleted"]').should('be.visible');
        });
    });

});

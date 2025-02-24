/// <reference types = "cypress" />

describe('Login User with correct email and password', () => {

    it('Should visit homepage, login with correct email, delete acc', () => {

        //1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:

        cy.visit('https://automationexercise.com/');

        //4. Click on 'Signup / Login' button

        cy.contains('a', 'Signup / Login').click();


        cy.createAccount();

        //5. Verify 'Login to your account' is visible

        cy.get('@newUser').then((user) => {
            cy.contains(`Logged in as ${user.username}`).should('be.visible');

            // 3️⃣ Atsijungiame ir bandome prisijungti su nauju vartotoju
            cy.contains('Logout').click();
            cy.contains('a', 'Signup / Login').click();
            cy.get('[data-qa="login-email"]').type(user.email);
            cy.get('[data-qa="login-password"]').type(user.password);
            cy.get('[data-qa="login-button"]').click();
            cy.contains(`Logged in as ${user.username}`).should('be.visible');

            // 4️⃣ Ištriname vartotoją
            cy.contains('Delete Account').click();
            cy.get('[data-qa="account-deleted"]').should('be.visible');
        });
    });

});

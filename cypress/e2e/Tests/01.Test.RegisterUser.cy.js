/// <reference types = "cypress" />

describe('Automation Exercise Homepage Test', () => {


  it('Should visit homepage, signup, delete acc', () => {

    //1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:

    cy.visit('https://automationexercise.com/')
    cy.title().should('include', 'Automation Exercise');

    //4. Click on 'Signup / Login' button

    cy.contains('a', 'Signup / Login').click();

    //5. Verify 'New User Signup!' is visible

    cy.contains('New User Signup!').should('be.visible');

    // 6. Enter name and email address

    cy.get('[data-qa="signup-name"]').should('be.visible').type('Petras Petrauskas');
    cy.get('[data-qa="signup-email"]').should('be.visible').type('PP@example.com');

    // 7. Click 'Signup' button

    cy.get('button[data-qa="signup-button"]').click();


    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible

    cy.get('.title.text-center').contains('Enter Account Information').should('be.visible');

    // 9. Fill details: Title, Name, Email, Password, Date of birth

    cy.get('input[data-qa="password"]').type('password');
    cy.get('select[data-qa="days"]').select('1');
    cy.get('select[data-qa="months"]').select('January');
    cy.get('select[data-qa="years"]').select('1990');


    // 10. Select checkbox 'Sign up for our newsletter!

    cy.get('#newsletter').click();
    cy.get('#optin').click();

    // 11. Select checkbox 'Receive special offers from our partners!'
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    // 13. Click 'Create Account button'
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    // 15. Click 'Continue' button
    // 16. Verify that 'Logged in as username' is visible
    // 17. Click 'Delete Account' button
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  });
});
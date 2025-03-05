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
    
    cy.get('[data-qa="signup-name"]').should('be.visible').type('Alison Smith');
    cy.get('[data-qa="signup-email"]').should('be.visible').type('Fakeee@fake.com');

    // 7. Click 'Signup' button

    cy.get('button[data-qa="signup-button"]').click();


    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible

    cy.get('.title.text-center').contains('Enter Account Information').should('be.visible');

    // 9. Fill details: Title, Name, Email, Password, Date of birth

    cy.get('input[data-qa="password"]').type('123456');
    cy.get('select[data-qa="days"]').select('23');
    cy.get('select[data-qa="months"]').select('May');
    cy.get('select[data-qa="years"]').select('1999');


    // 10. 11. Select checkbox 'Sign up for our newsletter! Select checkbox 'Receive special offers from our partners!'

    cy.get('#newsletter').click();
    cy.get('#optin').click();


    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number

    cy.get('#first_name').type('Alice');
    cy.get('#last_name').type('Smith');
    cy.get('#company').type('GlobalTech');
    cy.get('#address1').type('456 Elm Street');
    cy.get('#address2').type('Suite 789');
    cy.get('#country').select('Canada');
    cy.get('#state').type('Ontario');
    cy.get('#city').type('Toronto');
    cy.get('#zipcode').type('M5H 2N2');
    cy.get('#mobile_number').type('+14165550000');

    // 13. Click 'Create Account button'

    cy.get('button[data-qa="create-account"]').click();

    // 14. Verify that 'ACCOUNT CREATED!' is visible

    cy.contains('Account Created!', { timeout: 10000 })
    .should('be.visible');

    // 15. Click 'Continue' button

    cy.contains('Continue').click();
    
    // 16. Verify that 'Logged in as username' is visible

    cy.contains('Logged in as Alison Smith').should('be.visible');


    // 17. Click 'Delete Account' button

    cy.contains('Delete Account').click();

    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

    cy.get('[data-qa="account-deleted"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

  });
});
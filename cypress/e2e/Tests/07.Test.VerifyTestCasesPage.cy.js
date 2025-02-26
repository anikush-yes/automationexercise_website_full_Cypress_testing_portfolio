/// <reference types = "cypress" />


describe('Verify Test Cases Page', () => {
it('Should open the browser and navigate user to test cases page', () => {
cy.launchBrowser();

cy.contains('Test Cases').click();
cy.url().should('eq', 'https://automationexercise.com/test_cases');

});
});


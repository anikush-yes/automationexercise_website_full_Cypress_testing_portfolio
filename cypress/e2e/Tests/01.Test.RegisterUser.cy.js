/// <reference types="cypress" />

describe('Automation Exercise Homepage Test', () => {
    beforeEach(() => {
    it('Should visit homepage and verify title', () => {
      cy.visit('https://automationexercise.com/');
      cy.title().should('include', 'Automation Exercise');
      });
    });
  });
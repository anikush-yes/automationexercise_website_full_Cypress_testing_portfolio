/// <reference types = "cypress" />

describe('View Category Products', () => {


    it('Should visit the homepage and browse different category products.', () => {
  
  
      cy.visit('https://automationexercise.com/')

      cy.get('.left-sidebar h2').contains('Category').should('be.visible');

      cy.get('#accordian .panel.panel-default').contains('Women').should('be.visible');
      cy.get('#accordian .panel.panel-default').contains('Men').should('be.visible');
      cy.get('#accordian .panel.panel-default').contains('Kids').should('be.visible');

      cy.contains('Women').click();
      cy.contains('Dress').click();

      cy.contains('Women - Dress Products').should('be.visible');

      cy.contains('Kids').click();
      cy.get('a[href="/category_products/4"]').click();

      cy.contains('Kids - Dress Products').should('be.visible');

      });
      });
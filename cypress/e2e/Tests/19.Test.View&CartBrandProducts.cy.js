/// <reference types = "cypress" />

describe('View & Cart Brand Products', () => {


    it('Should visit the homepage, check if all brands are visible, and navigate to the exact brand page.', () => {
  
  
      cy.visit('https://automationexercise.com/')

      cy.contains('Products').click();

      cy.contains('Brands').should('be.visible');

      const brands = [
        'Polo',
        'H&M',
        'Madame',
        'Mast & Harbour',
        'Babyhug',
        'Allen Solly Junior',
        'Kookie Kids',
        'Biba'
    ];

    brands.forEach((brand) => {
        cy.get('.brands-name').contains(brand).should('be.visible');
    });

    cy.contains('Polo').click();

    cy.contains('Brand - Polo Products').should('be.visible');

      });
    });
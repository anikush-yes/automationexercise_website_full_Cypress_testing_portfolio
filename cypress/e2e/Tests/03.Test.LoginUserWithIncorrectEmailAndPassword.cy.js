/// <reference types = "cypress" />

describe('Login User with incorrect email and password', () => {


    it('Should visit homepage, Login with incorrect email and password', () => {
  
    
      cy.visit('https://automationexercise.com/')
      cy.title().should('include', 'Automation Exercise');
      cy.contains('a', 'Signup / Login').click();
      cy.contains('Login to your account').should('be.visible');
      cy.get('[data-qa="login-email"]').type('Incorrect@email.com');
      cy.get('[data-qa="login-password"]').type('Incorrectpassword');
      cy.get('[data-qa="login-button"]').click();
      cy.contains('Your email or password is incorrect!').should('be.visible');
      });
    });

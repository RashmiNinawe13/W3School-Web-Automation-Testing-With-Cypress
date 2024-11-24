describe('Login Functionality', () => {
    it('Should allow user to log in', () => {
      cy.visit('https://www.w3schools.com/');
      cy.get('a[href="/login"]').click();
      cy.url().should('include', '/login');
      cy.get('#email').type('testuser@example.com');
      cy.get('#password').type('Test@1234');
      cy.get('#loginButton').click();
      cy.get('.welcome-message').should('contain', 'Welcome Test User');
    });
  });
  
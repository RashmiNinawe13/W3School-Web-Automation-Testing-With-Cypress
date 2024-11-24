describe('Sign-Up Functionality', () => {

    it('Should navigate to the sign-up page and allow user registration', () => {

      cy.visit('https://www.w3schools.com/');
      cy.get('a[href="/signup"]').click();
      cy.url().should('include', '/signup');
      cy.get('#name').type('Test User');
      cy.get('#email').type('testuser@example.com');
      cy.get('#password').type('Test@1234');
      cy.get('#signupButton').click();
      cy.get('.success-message').should('contain', 'Registration successful');
      
    });
  });
  
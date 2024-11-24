describe('React Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the React section is visible and functional', () => {
      // Verify "React" section link is visible
      cy.get('a[title="React Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="React Tutorial"]').should('contain.text', 'Learn React');
  
      // Click the "React" link
      cy.get('a[title="React Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/react/');
  
      // Verify the React Tutorial page header
      cy.get('h1').should('contain.text', 'React Tutorial');
    });
  
  });
  
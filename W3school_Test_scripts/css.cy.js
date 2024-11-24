describe('CSS Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the CSS section is visible and functional', () => {
      // Verify CSS section link is visible
      cy.get('a[title="CSS Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="CSS Tutorial"]').should('contain.text', 'Learn CSS');
  
      // Click the CSS link
      cy.get('a[title="CSS Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/css/');
  
      // Verify the CSS Tutorial page header
      cy.get('h1').should('contain.text', 'CSS Tutorial');
    });
  
  });
  
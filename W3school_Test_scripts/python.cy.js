describe('Python Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Python section is visible and functional', () => {
      // Verify Python section link is visible
      cy.get('a[title="Python Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Python Tutorial"]').should('contain.text', 'Learn Python');
  
      // Click the Python link
      cy.get('a[title="Python Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/python/');
  
      // Verify the Python Tutorial page header
      cy.get('h1').should('contain.text', 'Python Tutorial');
    });
  
  });
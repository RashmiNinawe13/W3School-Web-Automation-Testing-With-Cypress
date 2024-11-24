describe('AI Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the AI section is visible and functional', () => {
      // Verify the "AI" section link is visible
      cy.get('a[title="Learn AI"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn AI"]').should('contain.text', 'Learn AI');
  
      // Click the "AI" link
      cy.get('a[title="Learn AI"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/ai/');
  
      // Verify the AI Tutorial page header
      cy.get('h1').should('contain.text', 'AI Tutorial');
    });
  
  });
  
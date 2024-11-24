describe('Excel Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Excel section is visible and functional', () => {
      // Verify the "Excel" section link is visible
      cy.get('a[title="Excel Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Excel Tutorial"]').should('contain.text', 'Learn Excel');
  
      // Click the "Excel" link
      cy.get('a[title="Excel Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/excel/');
  
      // Verify the Excel Tutorial page header
      cy.get('h1').should('contain.text', 'Excel Tutorial');
    });
  
  });
  
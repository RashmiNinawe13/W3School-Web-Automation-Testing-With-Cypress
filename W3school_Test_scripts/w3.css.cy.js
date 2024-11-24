describe('W3.CSS Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit the W3Schools homepage
    });
  
    it('Should verify the W3.CSS section is visible and functional', () => {
      // Verify the W3.CSS section link is visible
      cy.get('a[title="CSS Framework"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="CSS Framework"]').should('contain.text', 'Learn W3.CSS');
  
      // Click the "W3.CSS" link
      cy.get('a[title="CSS Framework"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/w3css/');
  
      // Verify the W3.CSS Tutorial page header
      cy.get('h1').should('contain.text', 'W3.CSS Tutorial');
    });
  
  });
  
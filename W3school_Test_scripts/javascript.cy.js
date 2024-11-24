describe('JavaScript Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the JavaScript section is visible and functional', () => {
      // Verify JavaScript section link is visible
      cy.get('a[title="JavaScript Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="JavaScript Tutorial"]').should('contain.text', 'Learn JavaScript');
  
      // Click the JavaScript link
      cy.get('a[title="JavaScript Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/js/');
  
      // Verify the JavaScript Tutorial page header
      cy.get('h1').should('contain.text', 'JavaScript Tutorial');
    });
  
  });
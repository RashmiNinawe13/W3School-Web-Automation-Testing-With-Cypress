describe('PHP Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the PHP section is visible and functional', () => {
      // Verify PHP section link is visible
      cy.get('a[title="PHP Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="PHP Tutorial"]').should('contain.text', 'Learn PHP');
  
      // Click the PHP link
      cy.get('a[title="PHP Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/php/');
  
      // Verify the PHP Tutorial page header
      cy.get('h1').should('contain.text', 'PHP Tutorial');
    });
  
  });
  
describe('HTML Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the HTML section is visible and functional', () => {
      // Verify HTML section link is visible
      cy.get('a[title="HTML Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="HTML Tutorial"]').should('contain.text', 'Learn HTML');
  
      // Click the HTML link
      cy.get('a[title="HTML Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/html/');
  
      // Verify the HTML Tutorial page header
      cy.get('h1').should('contain.text', 'HTML Tutorial');
    });
  
  });
describe('Bootstrap Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Bootstrap section is visible and functional', () => {
      // Verify "Bootstrap" section link is visible
      cy.get('a[title="Bootstrap Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Bootstrap Tutorial"]').should('contain.text', 'Learn Bootstrap');
  
      // Click the "Bootstrap" link
      cy.get('a[title="Bootstrap Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/bootstrap/');
  
      // Verify the Bootstrap Tutorial page header
      cy.get('h1').should('contain.text', 'Bootstrap Tutorial');
    });
  
  });
  
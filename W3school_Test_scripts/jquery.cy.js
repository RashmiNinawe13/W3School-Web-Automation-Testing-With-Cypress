describe('jQuery Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the jQuery section is visible and functional', () => {
      // Verify "jQuery" section link is visible
      cy.get('a[title="jQuery Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="jQuery Tutorial"]').should('contain.text', 'Learn jQuery');
  
      // Click the "jQuery" link
      cy.get('a[title="jQuery Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/jquery/');
  
      // Verify the jQuery Tutorial page header
      cy.get('h1').should('contain.text', 'jQuery Tutorial');
    });
  
  });
  
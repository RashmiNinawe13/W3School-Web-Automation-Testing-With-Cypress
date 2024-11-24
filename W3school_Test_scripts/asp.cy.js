describe('ASP Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the ASP section is visible and functional', () => {
      // Verify the "ASP" section link is visible
      cy.get('a[title="Learn ASP"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn ASP"]').should('contain.text', 'Learn ASP');
  
      // Click the "ASP" link
      cy.get('a[title="Learn ASP"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/asp/');
  
      // Verify the ASP Tutorial page header
      cy.get('h1').should('contain.text', 'ASP Tutorial');
    });
  
  });
  
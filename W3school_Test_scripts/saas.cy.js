describe('SASS Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the SASS section is visible and functional', () => {
      // Verify the "SASS" section link is visible
      cy.get('a[title="Learn SASS"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn SASS"]').should('contain.text', 'Learn SASS');
  
      // Click the "SASS" link
      cy.get('a[title="Learn SASS"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/sass/');
  
      // Verify the SASS Tutorial page header
      cy.get('h1').should('contain.text', 'SASS Tutorial');
    });
  
  });
  
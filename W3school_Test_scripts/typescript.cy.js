describe('TypeScript Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the TypeScript section is visible and functional', () => {
      // Verify the "TypeScript" section link is visible
      cy.get('a[title="Learn TypeScript"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn TypeScript"]').should('contain.text', 'Learn TypeScript');
  
      // Click the "TypeScript" link
      cy.get('a[title="Learn TypeScript"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/ts/ts_intro.php');
  
      // Verify the TypeScript Tutorial page header
      cy.get('h1').should('contain.text', 'TypeScript Tutorial');
    });
  
  });
  
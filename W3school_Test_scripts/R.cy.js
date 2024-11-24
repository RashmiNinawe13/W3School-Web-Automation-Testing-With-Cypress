describe('R Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the R section is visible and functional', () => {
      // Verify the "R" section link is visible
      cy.get('a[title="R Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="R Tutorial"]').should('contain.text', 'Learn R');
  
      // Click the "R" link
      cy.get('a[title="R Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/r/r_intro.php');
  
      // Verify the R Tutorial page header
      cy.get('h1').should('contain.text', 'R Tutorial');
    });
  
  });
  
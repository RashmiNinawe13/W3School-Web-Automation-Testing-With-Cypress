describe('Pandas Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Pandas section is visible and functional', () => {
      // Verify the "Pandas" section link is visible
      cy.get('a[title="Pandas Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Pandas Tutorial"]').should('contain.text', 'Learn Pandas');
  
      // Click the "Pandas" link
      cy.get('a[title="Pandas Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/python/pandas_intro.php');
  
      // Verify the Pandas Tutorial page header
      cy.get('h1').should('contain.text', 'Pandas Tutorial');
    });
  
  });
  
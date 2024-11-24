describe('SQL Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the SQL section is visible and functional', () => {
      // Verify SQL section link is visible
      cy.get('a[title="SQL Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="SQL Tutorial"]').should('contain.text', 'Learn SQL');
  
      // Click the SQL link
      cy.get('a[title="SQL Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/sql/');
  
      // Verify the SQL Tutorial page header
      cy.get('h1').should('contain.text', 'SQL Tutorial');
    });
  
  });
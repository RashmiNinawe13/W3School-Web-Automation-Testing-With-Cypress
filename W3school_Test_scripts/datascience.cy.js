describe('Data Science Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Data Science section is visible and functional', () => {
      // Verify the "Data Science" section link is visible
      cy.get('a[title="Data Science Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Data Science Tutorial"]').should('contain.text', 'Data Science Tutorial');
  
      // Click the "Data Science" link
      cy.get('a[title="Data Science Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/datascience/');
  
      // Verify the Data Science Tutorial page header
      cy.get('h1').should('contain.text', 'Data Science Tutorial');
    });
  
  });
  
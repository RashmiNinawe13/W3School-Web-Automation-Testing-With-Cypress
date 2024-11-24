describe('PostgreSQL Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the PostgreSQL section is visible and functional', () => {
      // Verify the "PostgreSQL" section link is visible
      cy.get('a[title="Learn PostgreSQL"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn PostgreSQL"]').should('contain.text', 'Learn PostgreSQL');
  
      // Click the "PostgreSQL" link
      cy.get('a[title="Learn PostgreSQL"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/postgresql/');
  
      // Verify the PostgreSQL Tutorial page header
      cy.get('h1').should('contain.text', 'PostgreSQL Tutorial');
    });
  
  });
  
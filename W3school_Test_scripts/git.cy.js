describe('Git Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Git section is visible and functional', () => {
      // Verify the "Git" section link is visible
      cy.get('a[title="Learn Git"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn Git"]').should('contain.text', 'Learn Git');
  
      // Click the "Git" link
      cy.get('a[title="Learn Git"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/git/');
  
      // Verify the Git Tutorial page header
      cy.get('h1').should('contain.text', 'Git Tutorial');
    });
  
  });
  
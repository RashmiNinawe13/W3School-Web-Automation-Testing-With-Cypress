describe('MongoDB Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the MongoDB section is visible and functional', () => {
      // Verify the "MongoDB" section link is visible
      cy.get('a[title="Learn MongoDB"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn MongoDB"]').should('contain.text', 'Learn MongoDB');
  
      // Click the "MongoDB" link
      cy.get('a[title="Learn MongoDB"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/mongodb/');
  
      // Verify the MongoDB Tutorial page header
      cy.get('h1').should('contain.text', 'MongoDB Tutorial');
    });
  
  });
  
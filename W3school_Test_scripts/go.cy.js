describe('Go Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Go section is visible and functional', () => {
      // Verify the "Go" section link is visible
      cy.get('a[title="Learn Go"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn Go"]').should('contain.text', 'Learn Go');
  
      // Click the "Go" link
      cy.get('a[title="Learn Go"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/go/');
  
      // Verify the Go Tutorial page header
      cy.get('h1').should('contain.text', 'Go Tutorial');
    });
  
  });
  
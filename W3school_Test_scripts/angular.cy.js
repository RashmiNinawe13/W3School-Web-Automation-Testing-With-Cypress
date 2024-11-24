describe('Angular Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Angular section is visible and functional', () => {
      // Verify the "Angular" section link is visible
      cy.get('a[title="Learn Angular"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn Angular"]').should('contain.text', 'Learn Angular');
  
      // Click the "Angular" link
      cy.get('a[title="Learn Angular"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/angular/');
  
      // Verify the Angular Tutorial page header
      cy.get('h1').should('contain.text', 'Angular Tutorial');
    });
  
  });
  
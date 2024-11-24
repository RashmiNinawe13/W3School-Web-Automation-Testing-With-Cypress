describe('Kotlin Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Kotlin section is visible and functional', () => {
      // Verify the "Kotlin" section link is visible
      cy.get('a[title="Learn Kotlin"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn Kotlin"]').should('contain.text', 'Learn Kotlin');
  
      // Click the "Kotlin" link
      cy.get('a[title="Learn Kotlin"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/kotlin/');
  
      // Verify the Kotlin Tutorial page header
      cy.get('h1').should('contain.text', 'Kotlin Tutorial');
    });
  
  });
  
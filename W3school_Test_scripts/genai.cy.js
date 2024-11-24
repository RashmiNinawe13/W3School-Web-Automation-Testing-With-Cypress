describe('Gen AI Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Gen AI section is visible and functional', () => {
      // Verify the "Gen AI" section link is visible
      cy.get('a[title="Learn Generative AI"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn Generative AI"]').should('contain.text', 'Learn Generative AI');
  
      // Click the "Gen AI" link
      cy.get('a[title="Learn Generative AI"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/ai/');
  
      // Verify the Gen AI Tutorial page header
      cy.get('h1').should('contain.text', 'Generative AI Tutorial');
    });
  
  });
  
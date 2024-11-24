describe('Numpy Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Numpy section is visible and functional', () => {
      // Verify the "Numpy" section link is visible
      cy.get('a[title="Numpy Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Numpy Tutorial"]').should('contain.text', 'Learn Numpy');
  
      // Click the "Numpy" link
      cy.get('a[title="Numpy Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/python/numpy_intro.php');
  
      // Verify the Numpy Tutorial page header
      cy.get('h1').should('contain.text', 'Numpy Tutorial');
    });
  
  });
  
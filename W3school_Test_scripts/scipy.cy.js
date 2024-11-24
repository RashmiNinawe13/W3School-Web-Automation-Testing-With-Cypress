describe('SciPy Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the SciPy section is visible and functional', () => {
      // Verify the "SciPy" section link is visible
      cy.get('a[title="SciPy Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="SciPy Tutorial"]').should('contain.text', 'SciPy Tutorial');
  
      // Click the "SciPy" link
      cy.get('a[title="SciPy Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/scipy/');
  
      // Verify the SciPy Tutorial page header
      cy.get('h1').should('contain.text', 'SciPy Tutorial');
    });
  
  });
  
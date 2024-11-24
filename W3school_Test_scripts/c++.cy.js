describe('C++ Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the C++ section is visible and functional', () => {
      // Verify "C++" section link is visible
      cy.get('a[title="C++ Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="C++ Tutorial"]').should('contain.text', 'Learn C++');
  
      // Click the "C++" link
      cy.get('a[title="C++ Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/cpp/');
  
      // Verify the C++ Tutorial page header
      cy.get('h1').should('contain.text', 'C++ Tutorial');
    });
  
  });
  
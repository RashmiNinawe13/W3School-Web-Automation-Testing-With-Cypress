describe('DSA Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the DSA section is visible and functional', () => {
      // Verify the "DSA" section link is visible
      cy.get('a[title="Learn Data Structures and Algorithms"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn Data Structures and Algorithms"]').should('contain.text', 'Learn Data Structures and Algorithms');
  
      // Click the "DSA" link
      cy.get('a[title="Learn Data Structures and Algorithms"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/ds/');
  
      // Verify the DSA Tutorial page header
      cy.get('h1').should('contain.text', 'Data Structures and Algorithms Tutorial');
    });
  
  });
  
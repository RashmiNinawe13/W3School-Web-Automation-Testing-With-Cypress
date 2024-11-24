describe('XML Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the XML section is visible and functional', () => {
      // Verify the "XML" section link is visible
      cy.get('a[title="XML Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="XML Tutorial"]').should('contain.text', 'Learn XML');
  
      // Click the "XML" link
      cy.get('a[title="XML Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/xml/');
  
      // Verify the XML Tutorial page header
      cy.get('h1').should('contain.text', 'XML Tutorial');
    });
  
  });
  
describe('How To Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the How To section is visible and functional', () => {
      // Verify "How To" section link is visible
      cy.get('a[title="How To Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="How To Tutorial"]').should('contain.text', 'Learn How To');
  
      // Click the "How To" link
      cy.get('a[title="How To Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/howto/');
  
      // Verify the How To Tutorial page header
      cy.get('h1').should('contain.text', 'How To Tutorial');
    });
  
  });
  
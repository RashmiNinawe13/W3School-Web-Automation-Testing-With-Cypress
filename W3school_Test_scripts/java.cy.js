describe('Java Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Java section is visible and functional', () => {
      // Verify Java section link is visible
      cy.get('a[title="Java Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Java Tutorial"]').should('contain.text', 'Learn Java');
  
      // Click the Java link
      cy.get('a[title="Java Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/java/');
  
      // Verify the Java Tutorial page header
      cy.get('h1').should('contain.text', 'Java Tutorial');
    });
  
  });
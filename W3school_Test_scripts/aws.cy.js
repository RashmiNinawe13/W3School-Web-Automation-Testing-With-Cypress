describe('AWS Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the AWS section is visible and functional', () => {
      // Verify the "AWS" section link is visible
      cy.get('a[title="AWS Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="AWS Tutorial"]').should('contain.text', 'AWS Tutorial');
  
      // Click the "AWS" link
      cy.get('a[title="AWS Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/aws/');
  
      // Verify the AWS Tutorial page header
      cy.get('h1').should('contain.text', 'AWS Tutorial');
    });
  
  });
  
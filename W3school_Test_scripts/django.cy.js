describe('Django Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Django section is visible and functional', () => {
      // Verify the "Django" section link is visible
      cy.get('a[title="Django Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Django Tutorial"]').should('contain.text', 'Learn Django');
  
      // Click the "Django" link
      cy.get('a[title="Django Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/django/');
  
      // Verify the Django Tutorial page header
      cy.get('h1').should('contain.text', 'Django Tutorial');
    });
  
  });
  
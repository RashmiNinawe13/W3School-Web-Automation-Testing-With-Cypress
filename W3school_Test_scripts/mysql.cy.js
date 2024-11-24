describe('MySQL Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the MySQL section is visible and functional', () => {
      // Verify "MySQL" section link is visible
      cy.get('a[title="MySQL Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="MySQL Tutorial"]').should('contain.text', 'Learn MySQL');
  
      // Click the "MySQL" link
      cy.get('a[title="MySQL Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/mysql/');
  
      // Verify the MySQL Tutorial page header
      cy.get('h1').should('contain.text', 'MySQL Tutorial');
    });
  
  });
  
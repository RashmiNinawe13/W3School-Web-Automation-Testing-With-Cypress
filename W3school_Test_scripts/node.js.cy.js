describe('Node.js Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Node.js section is visible and functional', () => {
      // Verify the "Node.js" section link is visible
      cy.get('a[title="Node.js Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Node.js Tutorial"]').should('contain.text', 'Learn Node.js');
  
      // Click the "Node.js" link
      cy.get('a[title="Node.js Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/nodejs/nodejs_intro.php');
  
      // Verify the Node.js Tutorial page header
      cy.get('h1').should('contain.text', 'Node.js Tutorial');
    });
  
  });
  
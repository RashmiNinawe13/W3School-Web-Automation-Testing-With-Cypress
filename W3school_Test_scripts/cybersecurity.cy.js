describe('Cybersecurity Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Cybersecurity section is visible and functional', () => {
      // Verify the "Cybersecurity" section link is visible
      cy.get('a[title="Cybersecurity Tutorial"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Cybersecurity Tutorial"]').should('contain.text', 'Cybersecurity Tutorial');
  
      // Click the "Cybersecurity" link
      cy.get('a[title="Cybersecurity Tutorial"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/cybersecurity/');
  
      // Verify the Cybersecurity Tutorial page header
      cy.get('h1').should('contain.text', 'Cybersecurity Tutorial');
    });
  
  });
  
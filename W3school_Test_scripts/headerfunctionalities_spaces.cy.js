describe('Header Functionalities Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
    it('Should verify Spaces feature', () => {
        // Verify the "Spaces" link is visible
        cy.get('a[title="Spaces"]').should('be.visible');
    
        // Click on the "Spaces" link
        cy.get('a[title="Spaces"]').click();
    
        // Verify the URL after clicking
        cy.url().should('include', '/spaces/');
    
        // Verify the page title contains "Spaces"
        cy.get('h1').should('contain.text', 'Spaces');
      });)
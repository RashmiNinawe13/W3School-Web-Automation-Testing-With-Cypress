describe('Dropdown Functionalities on W3Schools Header', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit the W3Schools homepage
    });
    it('Should verify Exercise dropdown options', () => {
        cy.get('#navbtn_exercises').click(); // Click on the Exercise dropdown
        cy.get('#nav_exercises').should('be.visible'); // Verify dropdown is visible
        cy.get('#nav_exercises a').each(($el) => {
          cy.wrap($el).should('not.be.empty'); // Assert all dropdown links are not empty
        });
      });)
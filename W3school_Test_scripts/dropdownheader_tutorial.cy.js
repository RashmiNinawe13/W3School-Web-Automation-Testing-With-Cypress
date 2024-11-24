describe('Dropdown Functionalities on W3Schools Header', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit the W3Schools homepage
    });
  
    it('Should verify Tutorials dropdown options', () => {
      cy.get('#navbtn_tutorials').click(); // Click on the Tutorials dropdown
      cy.get('#nav_tutorials').should('be.visible'); // Verify dropdown is visible
      cy.get('#nav_tutorials a').each(($el) => {
        cy.wrap($el).should('not.be.empty'); // Assert all dropdown links are not empty
      });
    });)
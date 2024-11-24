describe('Dropdown Functionalities on W3Schools Header', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit the W3Schools homepage
    });
    it('Should verify Certificates dropdown options', () => {
        cy.get('#navbtn_certificates').click(); // Click on the Certificates dropdown
        cy.get('#nav_certificates').should('be.visible'); // Verify dropdown is visible
        cy.get('#nav_certificates a').each(($el) => {
          cy.wrap($el).should('not.be.empty'); // Assert all dropdown links are not empty
        });
      });
    )    
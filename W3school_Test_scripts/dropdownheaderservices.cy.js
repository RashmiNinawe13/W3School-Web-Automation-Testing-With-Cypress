describe('Dropdown Functionalities on W3Schools Header', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit the W3Schools homepage
    });
    it('Should verify Services dropdown options', () => {
        cy.get('#navbtn_services').click(); // Click on the Services dropdown
        cy.get('#nav_services').should('be.visible'); // Verify dropdown is visible
        cy.get('#nav_services a').each(($el) => {
          cy.wrap($el).should('not.be.empty'); // Assert all dropdown links are not empty
        });
      });
    
    });)

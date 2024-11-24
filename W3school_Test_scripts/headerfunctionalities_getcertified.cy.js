
describe('Header Functionalities Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
    it('Should verify Get Certified feature', () => {
    // Verify the "Get Certified" link is visible
    cy.get('a[href="https://www.w3schools.com/cert/default.asp"]').should('be.visible');

    // Click on the "Get Certified" link
    cy.get('a[href="https://www.w3schools.com/cert/default.asp"]').click();

    // Verify the URL after clicking
    cy.url().should('include', '/cert/');

    // Verify the page contains the "Get Certified" text
    cy.get('h1').should('contain.text', 'Get Certified');
  });

});
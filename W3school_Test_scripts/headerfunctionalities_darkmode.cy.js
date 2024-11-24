describe('Header Functionalities Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
    // Test for Light/Dark Mode Toggle
  it('Should toggle between light and dark mode', () => {
    // Verify the light/dark mode toggle icon is visible
    cy.get('button#w3-light-dark').should('be.visible');

    // Click to toggle dark mode
    cy.get('button#w3-light-dark').click();
    cy.get('body').should('have.class', 'darkmode'); // Check if dark mode is applied

    // Click again to toggle back to light mode
    cy.get('button#w3-light-dark').click();
    cy.get('body').should('not.have.class', 'darkmode'); // Check if dark mode is removed
  });)
describe('Header Functionalities Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    // Test for Search Bar
    it('Should verify search bar functionality', () => {
      // Verify search bar is visible
      cy.get('input#search2').should('be.visible');
  
      // Type into the search bar and submit
      cy.get('input#search2').type('JavaScript').should('have.value', 'JavaScript');
      cy.get('button[type="submit"]').click(); // Click the search button
  
      // Verify the search results page is displayed
      cy.url().should('include', '/search/');
      cy.get('h1').should('contain.text', 'Search Results');
    });
  
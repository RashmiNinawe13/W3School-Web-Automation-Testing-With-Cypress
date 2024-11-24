describe('Vue.js Feature Testing on W3Schools', () => {

    beforeEach(() => {
      cy.visit('https://www.w3schools.com/'); // Visit W3Schools homepage
    });
  
    it('Should verify the Vue.js section is visible and functional', () => {
      // Verify the "Vue.js" section link is visible
      cy.get('a[title="Learn Vue.js"]').should('be.visible');
  
      // Verify the link text is correct
      cy.get('a[title="Learn Vue.js"]').should('contain.text', 'Learn Vue.js');
  
      // Click the "Vue.js" link
      cy.get('a[title="Learn Vue.js"]').click();
  
      // Assert the URL after clicking
      cy.url().should('include', '/vuejs/');
  
      // Verify the Vue.js Tutorial page header
      cy.get('h1').should('contain.text', 'Vue.js Tutorial');
    });
  
  });
  
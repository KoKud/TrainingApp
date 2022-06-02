describe('About', () => {
    it('Visit about', () => {
        cy.visit('/about-us')
        cy.get('.position-absolute > .btn').contains('Join us now!');
      })
    it('Authorization', () => {
        cy.get('.btn-outline-light').click();
        cy.get('#email').type('test@test.com');
        cy.get('#password').type('tester');
        cy.get('[type="submit"]').click();

      })
      it('Checks if it is authorized', () => {
          
        cy.get('.position-absolute > .btn').contains('Start new training');
        cy.get('.text-end > div > .btn').contains('Logout');
        
      })
      it('Back to About us', () => {
        cy.get(':nth-child(3) > .nav-link').click();
        
      })
      it('Logout', () => {
        cy.get('.text-end > div > .btn').click();
        
      })
})
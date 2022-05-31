describe('Leaderboards', () => {
    it('Visit leaderboard', () => {
        cy.visit('/leaderboard')
        cy.get('.col-sm-12 > :nth-child(1) > .row > .col-sm-2 > h4').contains('Place');
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
      it('Back to leaderboard', () => {
        cy.get(':nth-child(3) > .nav-link').click();
        
      })
      it('Logout', () => {
        cy.get('.btn').click();
        
      })


})
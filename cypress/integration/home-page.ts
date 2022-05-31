describe('Home-page', () => {
    it('Visit Home Page', () => {
        cy.visit('/')
        cy.contains('Welcome to Workapp!')
      })
    it('Authorization', () => {
        cy.get('.btn-dark').click();
        cy.get('#email').type('test@test.com');
        cy.get('#password').type('tester');
        cy.get('[type="submit"]').click();
      })
      it('Checks if it is authorized', () => {
          
        cy.get('.position-absolute > .btn').contains('Start new training');
        cy.get('.text-end > div > .btn').contains('Logout');
        
      })
      it('Start training', () => {
        cy.get('.position-absolute > .btn').click();
        cy.get('.col-md-7').contains('Please select a Training');
        cy.get('[ng-reflect-index="0"] > .list-group-item').click();
        cy.get('.col-xs-2 > .btn').click();
      })
      it('Logout', () => {
        cy.get('.text-end > div > .btn').click();
        
      })
})
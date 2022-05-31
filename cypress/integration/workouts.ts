describe('Workouts', () => {
    it('Visits Workouts tab', () => {
      cy.visit('/workouts')
      cy.get('app-workout-list > :nth-child(1) > .col-xs-12 > .btn').should('not.exist')
    
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
      it('Create new workout', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('.col-xs-12 > .btn').click();
        cy.get('#name').type('Some Test Training');
        cy.get('#imagePath').type('https://cdn.pixabay.com/photo/2016/12/04/22/15/fitness-1882721_960_720.jpg');
        cy.get('#description').type('Some training description');
        cy.get('.btn-success').click();
      })
      it('Check exising workout', () => {
        cy.get(' .list-group-item').contains('Some Test Training').first().click();
        cy.get('.btn-success').click();
        cy.get('#name').clear().type('Some new Test Training');
        cy.get('.btn-success').click();
        cy.get('.btn-danger').click();
        cy.get(' .list-group-item').contains('Some new Test Training').should('not.exist');
      })
      it('Logout', () => {
        cy.get('.text-end > div > .btn').click();
        
      })
})
  
describe('Workouts', () => {
    it('Visits Workouts tab', () => {
      cy.visit('/workouts')
      cy.get('app-workout-list > :nth-child(1) > .col-xs-12 > .btn').should('not.exist')
    
    })



})
  
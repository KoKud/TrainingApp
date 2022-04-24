describe('Workouts', () => {
    it('Visits the initial project page', () => {
      cy.visit('/workouts')
      cy.contains('New Workout')
    })
  })
  
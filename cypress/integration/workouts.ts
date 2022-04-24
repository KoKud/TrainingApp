describe('Workouts', () => {
    it('Visits Workouts tab', () => {
      cy.visit('/workouts')
      cy.contains('New Workout')
    
    })


    it('Checks if selecting works', () => {
        cy.visit('/workouts/001')
        cy.contains('Jumping Jacks').should('have.css','color','rgb(255, 255, 255)')
        cy.visit('/workouts/002')
        cy.contains('Jumping Jacks').should('have.css','color','rgb(33, 37, 41)')
        cy.contains('Wall Sit').should('have.css','color','rgb(255, 255, 255)')
    })


    it('Checks if images are displayed', () => {
        cy.visit('/workouts')
        cy.get('body').find('img').should('have.attr','src')
        cy.visit('/workouts/001')
        cy.get('body').find('img').should('have.attr','src')
    })


})
  
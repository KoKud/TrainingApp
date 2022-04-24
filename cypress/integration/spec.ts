describe('Home page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Home-page Tab!')
  })
})


describe('About us', () => {
  it('Visits the About Us page', () => {
    cy.visit('/about-us')
    cy.contains('Join us now!')
  })
})



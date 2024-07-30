describe('Contact spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/contato')
  })
  it('Should render contact page correctly', () => {
    cy.get('[data-testid="contact"]').should('exist')
  })
  it('should type text into input', () => {
    cy.get('input[type="text"]').type('divine').should('have.value', 'divine')
    cy.get('input[type="email"]')
      .type('ada@gmail.com')
      .should('have.value', 'ada@gmail.com')
    cy.get('textarea')
      .type('mdabwfbabwkjf')
      .should('have.value', 'mdabwfbabwkjf')
  })
})

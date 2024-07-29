describe('bankcard spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/bank_card')
  })

  it('Should render bankcard page correctly', () => {
    cy.get('[data-testid="bank"]').should('exist')
  })
  it('test search hint', () => {
    cy.get('[data-testid="bank_search"]').type('e')
    cy.get('[data-testid="bank_hint"]').should('exist')
  })
  it('test search', () => {
    cy.get('[data-testid="bank_search"]').type('e')
    cy.get('[data-testid="bank_hint"]').should('exist')
    cy.get('[data-testid="bank_Euro"]').should('exist').click()
    cy.get('[data-testid="bank_search"]').should('have.value', 'Euro')
  })
})

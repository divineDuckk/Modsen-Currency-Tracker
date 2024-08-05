describe('timeline spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/timeline')
  })

  it('Should render timeline page correctly', () => {
    cy.get('[data-testid="timeline"]').should('exist')
  })
  it('test clear button', () => {
    cy.get('[data-testid="timeline_random"]').click()
    cy.contains('the graph is built').should('exist')
    cy.get('[data-testid="timeline_clear"]').click()
  })
  it('Create random graph', () => {
    cy.get('[data-testid="timeline_random"]').click()
    cy.contains('the graph is built').should('exist')
    cy.get('[data-testid="timeline_clear"]').click()
  })
  it('try add chart with empty inputs', () => {
    cy.get('[data-testid="timeline_add"]').click()
    cy.contains('the graph is built').should('not.exist')
  })
  it('try add chart with inputs', () => {
    cy.get('[data-testid="timeline_date"]').type('2024-05-10')
    cy.get('[data-testid="timeline_open"]').type('100')
    cy.get('[data-testid="timeline_close"]').type('200')
    cy.get('[data-testid="timeline_high"]').type('500')
    cy.get('[data-testid="timeline_low"]').type('50')

    cy.get('[data-testid="timeline_add"]').click()
    cy.contains('the graph is built').should('exist')
  })
  it('try add chart with one empty input', () => {
    cy.get('[data-testid="timeline_open"]').type('100')
    cy.get('[data-testid="timeline_close"]').type('200')
    cy.get('[data-testid="timeline_high"]').type('500')
    cy.get('[data-testid="timeline_low"]').type('50')

    cy.get('[data-testid="timeline_add"]').click()
    cy.contains('the graph is built').should('not.exist')
  })
  it('change selector', () => {
    cy.get('[data-testid="timeline_selector"]').select('Yen')
    cy.get('[data-testid="timeline_selector"]').should('have.value', 'Yen')
  })
})

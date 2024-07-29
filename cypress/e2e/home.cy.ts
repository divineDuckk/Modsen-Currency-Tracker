describe('home spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000')
  })

  it('Should render home page correctly', () => {
    cy.get('[data-testid="main"]').should('exist')
  })

  it('Should show and interact with modal correctly exit by popup wrapper', () => {
    cy.get('[data-testid="open_popup_EUR"]').should('be.visible').click()
    cy.get('[data-testid="popup"]').should('be.visible')
    cy.get('[data-testid="popup_wrapper"]').should('exist')
    cy.get('[data-testid="popup_wrapper"]').click(1150, 700)
    cy.get('[data-testid="popup"]').should('not.exist')
  })

  it('Should show and interact with modal correctly exit by close button', () => {
    cy.get('[data-testid="open_popup_EUR"]').should('be.visible').click()
    cy.get('[data-testid="popup"]').should('be.visible')
    cy.get('[data-testid="popup_close_button"]').should('exist').click()
    cy.get('[data-testid="popup"]').should('not.exist')
  })

  it('Switch currencies into popup', () => {
    cy.get('[data-testid="open_popup_EUR"]').should('be.visible').click()
    cy.get('[data-testid="popup"]').should('be.visible')
    cy.get('[data-testid="switch_Yen"]').should('exist').click()

    cy.get('[data-testid="popup_close_button"]').should('exist').click()
    cy.get('[data-testid="popup"]').should('not.exist')
  })
})

describe('Funcionalidade Login', () => {
  
  it('Deve fazer login com sucesso', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.loginComSucesso(user, password, options)

    cy.get('.top-bar-container > .btn').should('be.visible')
  })
  
})
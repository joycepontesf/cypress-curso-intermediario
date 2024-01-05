describe('Funcionalidade Logout', () => {
   
    beforeEach(() => {
        cy.loginComSucesso()
    })

    it('Deve fazer logout com sucesso', () => {
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })

})

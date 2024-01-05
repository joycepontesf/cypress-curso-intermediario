import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Funcionalidade Projeto', options, () => {
  
  beforeEach(() => {
    cy.api_deleteProjetos()
    cy.loginComSucesso()
    
  })

  it('Deve criar projeto em branco com sucesso', () => {
    const project = {
      name: `projeto-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_criarProjeto(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name_valido')}/${project.name}`)

    cy.get('[data-testid="alert-info"]').should('be.visible').and('contain', project.name)
  })

})

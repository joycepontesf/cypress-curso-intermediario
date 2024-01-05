
import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Funcionalidade Issue', options, () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
          name: `projeto-${faker.datatype.uuid()}`,
          description: faker.random.words(5)
        }
      }
    
      beforeEach(() => {
        cy.api_deleteProjetos()
        cy.loginComSucesso()
        cy.api_criarProjeto(issue.project)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
      })
   
    it('Deve criar um issue com sucesso', () => {
        cy.gui_criarIssue(issue)

        cy.get('[data-testid="issue-title"]').should('contain', issue.title)
    })

})
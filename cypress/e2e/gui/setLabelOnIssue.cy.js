import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Label de uma issue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `projeto-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  const label = {
    name: `label-${faker.random.word()}`,
    color: '#ffaabb'
  }

  beforeEach(() => {
    cy.api_deleteProjetos()
    cy.loginComSucesso()
    cy.api_criarIssue(issue)
      .then(response => {
        cy.api_criarLabel(response.body.project_id, label)
        cy.visit(`${Cypress.env('user_name_valido')}/${issue.project.name}/issues/${response.body.iid}`)
      })
  })

  it('Deve configurar uma label na issue com sucesso', () => {
    cy.gui_configurarLabelOnIssue(label)

    cy.get('.gl-word-break-word').should('contain', label.name)
    cy.get('span[data-testid="selected-label-content"]')
      .should('have.attr', 'style', `--label-background-color: ${label.color}; --label-inset-border: inset 0 0 0 2px ${label.color};`)
  })

})

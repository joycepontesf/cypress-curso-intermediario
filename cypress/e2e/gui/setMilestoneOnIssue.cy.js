import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Milestone de uma issue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `projeto-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  const milestone = {
    title: `milestone-${faker.random.word()}`
  }

  beforeEach(() => {
    cy.api_deleteProjetos()
    cy.loginComSucesso()
    cy.api_criarIssue(issue)
      .then(response => {
        cy.api_criarMilestone(response.body.project_id, milestone)
        cy.visit(`${Cypress.env('user_name_valido')}/${issue.project.name}/issues/${response.body.iid}`)
      })
  })

  it('Deve configurar um milestone na issue com sucesso', () => {
    cy.gui_configurarMilestoneOnIssue(milestone)

    cy.get('.sidebar-collapsed-icon').should('contain', milestone.title)
  })
})

import { faker } from '@faker-js/faker'

describe('Git Clone', () => {
  const project = {
    name: `projeto-${faker.datatype.uuid()}`,
    description: faker.random.words(5)
  }

  beforeEach(() => {
    cy.api_deleteProjetos()
    cy.api_criarProjeto(project)
  })

  it('Deve fazer git clone via CLI com sucesso', () => {
    cy.cloneViaSSH(project)

    cy.readFile(`cypress/downloads/${project.name}/README.md`)
      .should('contain', `# ${project.name}`)
      .and('contain', project.description)
  })
})

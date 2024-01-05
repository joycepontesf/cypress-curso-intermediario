import { faker } from '@faker-js/faker'

describe('Funcionalidade Issue', () => {
  beforeEach(() => cy.api_deleteProjetos())

  it('Deve criar issue com sucesso', () => {
    const issue = {
      title: `issue-${faker.datatype.uuid()}`,
      description: faker.random.words(3),
      project: {
        name: `projeto-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
      }
    }

    cy.api_criarIssue(issue)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.title).to.equal(issue.title)
        expect(response.body.description).to.equal(issue.description)
      })
  })
})
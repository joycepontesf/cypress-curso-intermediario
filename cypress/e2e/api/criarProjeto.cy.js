import { faker } from '@faker-js/faker'

describe('Funcionalidade Projeto', () => {
  
    beforeEach(() => {
        cy.api_deleteProjetos()
    });
    it('Deve criar projeto com sucesso', () => {
    const projeto = {
      name: `projeto-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.api_criarProjeto(projeto)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(projeto.name)
        expect(response.body.description).to.equal(projeto.description)
      })
  })
})
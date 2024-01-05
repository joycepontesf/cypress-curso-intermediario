const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

Cypress.Commands.add('api_criarProjeto', projeto => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/`,
    body: {
      name: projeto.name,
      description: projeto.description,
      initialize_with_readme: true
    },
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('api_reunirProjetos', () => {
    cy.request({
      method: 'GET',
      url: '/api/v4/projects/',
      headers: { Authorization: accessToken },
    })
})
  
Cypress.Commands.add('api_deleteProjetos', () => {
    cy.api_reunirProjetos().then(res =>
      res.body.forEach(project => cy.request({
        method: 'DELETE',
        url: `/api/v4/projects/${project.id}`,
        headers: { Authorization: accessToken },
      }))
    )
})

Cypress.Commands.add('api_criarIssue', issue => {
    cy.api_criarProjeto(issue.project)
      .then(response => {
        cy.request({
          method: 'POST',
          url: `/api/v4/projects/${response.body.id}/issues`,
          body: {
            title: issue.title,
            description: issue.description
          },
          headers: { Authorization: accessToken },
        })
    })
})

Cypress.Commands.add('api_criarLabel', (projectId, label) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/labels`,
      body: {
        name: label.name,
        color: label.color
      },
      headers: { Authorization: accessToken },
    })
})

Cypress.Commands.add('api_criarMilestone', (projectId, milestone) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/milestones`,
      body: { title: milestone.title },
      headers: { Authorization: accessToken },
    })
})


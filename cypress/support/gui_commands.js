Cypress.Commands.add('loginComSucesso', (
    user = Cypress.env('user_name_valido'),
    password = Cypress.env('user_password_valida'),
    { cacheSession = true } = {},
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get('input[name="user[login]"]').type(user)
        cy.get('input[name="user[password]"]').type(password, { log: false })
        cy.get('button[type="submit"]').click()
    }
  
    //permite que o cache seja compartilhado com outras specs, além daquela onde o cache foi originado.
    const options = {
      cacheAcrossSpecs: true,
    }
  
    if (cacheSession) {
      cy.session(user, login, options)
    } else {
      login()
    }
})

Cypress.Commands.add('logout', () => {
    cy.get('.top-bar-container > .btn').click()
    cy.get('[data-testid="user-avatar-content"]').click()
    cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_criarProjeto', project => {
    cy.visit('/projects/new')
    cy.get(':nth-child(1) > [data-testid="panel-link"]').click()
    cy.get('#project_name').type(project.name)
    cy.get('#__BVID__149__BV_toggle_').should('be.visible').click()
    cy.get('.dropdown-menu').contains('root').click()
    cy.get('input[name="project[initialize_with_readme]"]').check()
    cy.contains('Create project').click()
})

Cypress.Commands.add('gui_criarIssue', issue => {
    cy.visit(`/${Cypress.env('user_name_valido')}/${issue.project.name}/issues/new`)
  
    cy.get('input[name="issue[title]"]').type(issue.title)
    cy.get('[data-testid="issuable-form-description-field"]').type(issue.description)
    cy.contains('Create issue').click()
})

Cypress.Commands.add('gui_configurarLabelOnIssue', label => {
    cy.get('[data-testid="sidebar-labels"] > :nth-child(1) > .gl-line-height-20 > [data-testid="edit-button"] > .gl-button-text').click()
    cy.get('.gl-dropdown-item-text-wrapper').should('be.visible')
    cy.contains(label.name).click()
    cy.get('body').click()
})

Cypress.Commands.add('gui_configurarMilestoneOnIssue', milestone => {
    cy.get('[data-testid="milestone-edit"] > .gl-display-flex > [data-testid="edit-button"] > .gl-button-text').click()
    cy.get('.gl-dropdown-item-text-wrapper').should('be.visible')
    cy.contains(milestone.title).click()
})
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    
	/*"hideCredential: true" ocultando dados sensíveis.
	"requestMode: true" para feedback visual utilizando o comando cy.request().disponibilizados pela lib cypress-plugin-api.*/
	env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
})

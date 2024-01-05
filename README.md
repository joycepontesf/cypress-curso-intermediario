## Curso Cypress Intermediário

Projeto criado em atendimento aos exercícios do curso Cypress Intermediário ministrado por [Walmyr Filho](https://walmyr.dev).

Neste repositório será encontrado uma suíte de testes via API, GUI e CLI para a versão open-source do GitLab, rodando em container em um ambiente local, exercitando as seguintes funcionalidades:

- Login e Logout
- Criação de projeto e de issue
- Adição de uma etiqueta (label) à uma issue
- Adição de um marco (milestone) à uma issue
- Git clone

> Nota: Estou usando a imagem Docker [yrzr/gitlab-ce-arm64v8](https://hub.docker.com/r/yrzr/gitlab-ce-arm64v8), dado que possuo uma máquina com chip M1. No entanto, durante o curso é utilizado a imagem [wlsf82/gitlab-ce](https://hub.docker.com/r/wlsf82/gitlab-ce). Essa diferença pode impactar nos seletores CSS.

#### Pré-requisitos

Certifique-se de ter instalado as seguintes ferramentas:

- [Docker](https://www.docker.com/) (versão `24.0.6`)
- [git](https://git-scm.com/) (versão `2.39.2`)
- [Node.js](https://nodejs.org/en/) (versão `v20.8.0`)
- npm (versão `10.1.0`)

#### Passos de Instalação

Abra o terminal da sua preferência e faça o clone deste repositório no seu ambiente local:

```bash
git clone https://github.com/joycepontesf/cypress-curso-intermediario.git
```

Ainda no terminal, navegue até a pasta já clonada em sua máquina e execute o comando abaixo para instalar as dependências usadas no projeto:

```bash
npm install
```

### Executando Testes

Em seu terminal, na pasta raiz do diretório, execute os scripts abaixo para rodar os testes

`npm test` - para executar os testes no modo headless.

`npm run cy:open` - para abrir o Cypress no modo interativo.

### Dúvidas

Surgiu alguma dúvida sobre este projeto? Estou disponível em [Joyce Pontes](https://www.linkedin.com/in/joycepontes/).
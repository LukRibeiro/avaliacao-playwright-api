#  Avaliação Prática – Testes de API com Playwright

Este repositório apresenta a solução do desafio técnico utilizando **Playwright** para automação de testes em uma API pública (JSONPlaceholder).

---

## Objetivo

Executar testes automatizados nos principais métodos HTTP (**GET, POST, PUT, DELETE**), abrangendo tanto **testes positivos quanto negativos**, com execução via linha de comando e geração de relatório em HTML.

---

##  Ferramentas Utilizadas

- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- Terminal PowerShell
- Git e GitHub
- API pública: [`https://jsonplaceholder.typicode.com`](https://jsonplaceholder.typicode.com)

---

##  Estrutura do Projeto

avaliacao-playwright-api/
├── tests/
│ ├── api.test.js # Testes de API - cenários positivos
│ └── api-negative.spec.js # Testes de API - cenários negativos
├── playwright-report/ # Relatório HTML (gerado automaticamente)
├── test-results/ # Resultados da execução (gerado automaticamente)
├── .gitignore
├── package.json
├── README.md

markdown
Copy
Edit

---

## Testes Implementados

### Cenários Positivos (`tests/api.test.js`)
- **GET /posts/1**: Retorna status 200 e possui `userId`
- **POST /posts**: Cria novo post e retorna status 201 com os dados enviados
- **PUT /posts/1**: Atualiza um post existente e valida os dados retornados
- **DELETE /posts/1**: Remove um post e retorna status 200

### Cenários Negativos (`tests/api-negative.spec.js`)
- **GET /posts/9999**: Tenta acessar recurso inexistente (esperado 404)
- **POST /posts com campos faltando**: Retorna 201 (API fake não valida os campos)
- **PUT /posts/9999**: Atualiza recurso inexistente (esperado 200)
- **DELETE /posts/9999**: Tenta excluir recurso inexistente (esperado 200)

---

##  Como Executar os Testes

1. Instale as dependências:
```bash
npm install
Execute os testes com relatório HTML:

bash
Copy
Edit
npx playwright test --reporter=html
Visualize o relatório:

bash
Copy
Edit
npx playwright show-report
Observações
O relatório é gerado automaticamente em playwright-report/

Os testes cobrem tanto fluxos esperados (positivos) quanto comportamentos inesperados (negativos)

A API utilizada é apenas para fins de teste e não realiza persistência real

 Autor
Lucas Ribeiro
GitHub: LukRibeiro

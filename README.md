
# Avaliação Prática – Testes de API com Playwright

Este repositório apresenta a solução do desafio técnico utilizando **Playwright** para automação de testes em uma API pública (JSONPlaceholder).

---

## Objetivo

Executar testes automatizados nos principais métodos HTTP (GET, POST, PUT, DELETE), utilizando a biblioteca [Playwright](https://playwright.dev/), com execução via linha de comando e geração de relatório em HTML.

---

## Ferramentas Utilizadas

* [Playwright](https://playwright.dev/)
* [Node.js](https://nodejs.org/)
* Terminal PowerShell
* Git e GitHub
* API pública: [`https://jsonplaceholder.typicode.com`](https://jsonplaceholder.typicode.com)

---

## Estrutura do Projeto

```
avaliacao-playwright-api/
├── tests/
│   └── api.test.js            # Testes automatizados de API
├── playwright-report/         # Relatório gerado após execução
├── test-results/              # Dados da execução (gerados automaticamente)
├── .gitignore
├── package.json
├── README.md
```

---

## Testes Implementados

* `GET /posts/1`: Verifica o status 200 e a presença da propriedade `userId`
* `POST /posts`: Criação de novo post com validação do status 201 e do corpo da resposta
* `PUT /posts/1`: Atualização de post com verificação dos dados
* `DELETE /posts/1`: Exclusão de post e verificação do status 200

---

## Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes com geração do relatório:

```bash
npx playwright test --reporter=html
```

3. Visualize o relatório:

```bash
npx playwright show-report
```

---

## Evidências

O relatório de execução está disponível na pasta `playwright-report/`.
Todos os testes foram executados com sucesso.

---

## Conclusão

Este projeto demonstra a aplicação do Playwright para testes automatizados de API, com foco em organização, clareza na implementação e geração de evidências de execução.


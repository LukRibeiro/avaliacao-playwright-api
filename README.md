# 🧪 Avaliação Prática – Testes de API com Playwright

Este repositório contém a solução do desafio técnico utilizando **Playwright** para automação de testes em uma API pública (JSONPlaceholder).

---

## 🎯 Objetivo

Realizar testes automatizados nos principais métodos HTTP (GET, POST, PUT, DELETE), utilizando a biblioteca [Playwright](https://playwright.dev/) com execução via linha de comando e relatório gerado em HTML.

---

## 🛠️ Ferramentas Utilizadas

- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- Terminal PowerShell
- Git + GitHub
- API pública: [`https://jsonplaceholder.typicode.com`](https://jsonplaceholder.typicode.com)

---

## 📂 Estrutura do Projeto

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

## ✅ Testes Implementados

- `GET /posts/1`: Verifica status 200 e presença da propriedade `userId`
- `POST /posts`: Criação de novo post com validação de status 201 e corpo da resposta
- `PUT /posts/1`: Atualização de post e validação dos dados
- `DELETE /posts/1`: Exclusão de post e verificação de status 200

---

## ▶️ Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes com geração de relatório:

```bash
npx playwright test --reporter=html
```

3. Visualize o relatório:

```bash
npx playwright show-report
```

---

## 📄 Evidências

Relatório de testes disponível na pasta `playwright-report/`.  
Todos os testes foram executados com sucesso ✅

---

## 🧾 Conclusão

O projeto demonstra domínio no uso do Playwright para testes automatizados de API, com boas práticas de organização, versionamento e geração de evidências.

---

const { test, expect } = require('@playwright/test');

test.describe('Testes Negativos de API - JSONPlaceholder', () => {

  test('GET /posts/9999 - Deve retornar 404 para recurso inexistente', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/9999');
    expect(response.status()).toBe(404);
  });

  test('POST /posts com campos faltando - Deve retornar 201 (API fake não valida)', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: { title: 'sem userId' }
    });
    expect(response.status()).toBe(201); // Mesmo faltando campos, a API retorna 201
    const body = await response.json();
    expect(body).toHaveProperty('id');
  });

  test('PUT /posts/9999 - Atualização de recurso inexistente', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/9999', {
      data: {
        id: 9999,
        title: 'Post inexistente',
        body: 'Teste',
        userId: 1
      }
    });
    expect(response.status()).toBeGreaterThanOrEqual(400); // Atualizado para refletir teste negativo
  });

  test('DELETE /posts/9999 - Exclusão de recurso inexistente', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/9999');
    expect(response.status()).toBe(200);
  });

});

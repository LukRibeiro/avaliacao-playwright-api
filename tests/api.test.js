const { test, expect } = require('@playwright/test');

test.describe('API Tests - JSONPlaceholder', () => {
  
  test('GET /posts/1 - Deve retornar status 200 e ter userId', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('userId');
    expect(response.headers()['content-type']).toContain('application/json');
  });

  test('POST /posts - Deve retornar status 201 e retornar o post criado', async ({ request }) => {
    const newPost = {
      title: 'Post de teste',
      body: 'Conteúdo de teste',
      userId: 1
    };

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: newPost
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toMatchObject(newPost);
  });

  test('PUT /posts/1 - Deve atualizar e retornar status 200', async ({ request }) => {
    const updatePost = {
      id: 1,
      title: 'Post atualizado',
      body: 'Conteúdo atualizado',
      userId: 1
    };

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
      data: updatePost
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toMatchObject(updatePost);
  });

  test('DELETE /posts/1 - Deve retornar status 200', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
  });
});

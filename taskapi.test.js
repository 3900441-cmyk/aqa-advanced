const axios = require('axios');

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000,
});

test('GET', async () => {
    const response = await api.get('/posts');
    expect(response.status).toBe(200);
});

test('POST', async () => {
    const newPost = { title: 'New Post', body: 'Test', userId: 1 };
    const response = await api.post('/posts', newPost);
    expect(response.status).toBe(201);
});

test('PUT', async () => {
    const updatedPost = { id: 1, title: 'Updated Title', body: 'New test content', userId: 1 };
    const response = await api.put('/posts/1', updatedPost);
    expect(response.status).toBe(200);
});

test('DELETE', async () => {
    const response = await api.delete('/posts/1');
    expect(response.status).toBe(200);
});

test('GET ID', async () => {
    const response = await api.get('/posts/5');
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(5);
});
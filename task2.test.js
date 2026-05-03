const axios = require('axios');

async function customHeaderParams(token, userId) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: { userId: userId },
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response;
}

test('Testing Request Headers and Params', async () => {
  const token = 'test';
  const userId = 1;
  
  const response = await customHeaderParams(token, userId);

  expect(response.status).toBe(200);
  expect(response.data[0].userId).toBe(userId);
  expect(response.config.headers['Authorization']).toBe(`Bearer ${token}`);
});
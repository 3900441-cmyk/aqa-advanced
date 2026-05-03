const axios = require('axios');

async function wrongUrl() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/postspost');
  } catch (error) {
    return error.message;
  }
}

test('Should return error', async () => {
  const result = await wrongUrl();
  expect(result).toContain('404');
});
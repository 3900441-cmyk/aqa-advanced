const axios = require('axios');
jest.mock('axios');

async function getPostData(id) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Post not found');
  }
}

describe('Mocking Axios in Jest', () => {
  test('Success', async () => {
    const fakePost = { id: 1, title: 'Mocked Title' };
    axios.get.mockResolvedValue({ data: fakePost });

    const result = await getPostData(1);
    expect(result.title).toBe('Mocked Title');
  });

  test('Failure', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(getPostData(999)).rejects.toThrow('Post not found');
  });
});
class TodoService {
    async fetchById(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return await response.json();
    }
}

class UserService {
    async fetchById(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return await response.json();
    }
}

const todoService = new TodoService();
const userService = new UserService();

async function runServices() {
    const todo = await todoService.fetchById(1);
    const user = await userService.fetchById(1);
    console.log("Результати:", { todo, user });
}

runServices();
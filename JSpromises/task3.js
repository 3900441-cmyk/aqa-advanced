async function getTodoAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    } catch (error) {
        console.error("Помилка в колекції Todos:", error);
    }
}

async function getUserAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    } catch (error) {
        console.error("Помилка в колекції Users:", error);
    }
}

async function showData() {
    const todo = await getTodoAsync();
    const user = await getUserAsync();
    console.log("Async/Await результат:", { todo, user });
}

showData();
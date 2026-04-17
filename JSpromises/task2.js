function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => console.error("Помилка в колекції Todos:", error));
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => console.error("Помилка в колекції Users:", error));
}

const allPromise = Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        const [todo, user] = results;
        console.log("Promise.all:", { todo, user });
    });

const racePromise = Promise.race([fetchTodo(), fetchUser()])
    .then(firstResult => {
        console.log("Promise.race:", firstResult);
    });
const users = [
    {name: "Олеся", email: "olesya@gmail.com", age: 18},
    {name: "Тарас", email: "taras@gmail.com", age: 19},
    {name: "Григорій", email: "grygoryi@gmail.com", age: 20}
];

for (const {name, email, age} of users) {
    console.log(`${name}, ${email}, ${age}`);
}
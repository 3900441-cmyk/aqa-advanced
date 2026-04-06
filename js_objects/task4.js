const person = {
    firstName: "Петро",
    lastName: "Петренко",
    age: 18
};

person.email = "petro@gmail.com";

delete person.age;

console.log(person);
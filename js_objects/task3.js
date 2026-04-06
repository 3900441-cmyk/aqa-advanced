const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2021
};

const car2 = {
    brand: "Infinity",
    model: "Q50",
    year: 2020
};

const car3 = { ...car1, ...car2 };

console.log(car3);
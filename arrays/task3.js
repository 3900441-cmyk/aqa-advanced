const numbers = [10, 20, 30, 40, 50];

const total = function(accumulator, currentValue) {
    return accumulator + currentValue;
};

const sum = numbers.reduce(total, 0);

console.log(sum);
function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Ділити на нуль неможливо!");
    }

    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Два аргументи мають бути числами!");
    }

    return numerator / denominator;
}

function resultDivide(a, b) {
    try {
        const result = divide(a, b);
        console.log(`Результат: ${result}`);
    } catch (error) {
        console.error(`Помилка: ${error.message}`);
    } finally {
        console.log("Робота завершена");
    }
}

resultDivide(10, 5);
resultDivide(10, 0);
resultDivide(10, "test");
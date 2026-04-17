function printWithDelay(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

printWithDelay("Hello World!", 3000);
const initialArray = [1, 2, 3, 4, 5];

const newArray = initialArray.map(function(element, index) {
    return element * index;
});

console.log("Новий масив (число * індекс):", newArray);
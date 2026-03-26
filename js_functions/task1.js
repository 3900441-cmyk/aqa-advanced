function getAreaDeclaration(width, height) {
    return width * height;
}
console.log("Result for Declaration:", getAreaDeclaration(5, 10));

const getAreaExpression = function(width, height) {
    return width * height;
};
console.log("Result for Expression:", getAreaExpression(5, 10));

const getAreaArrow = (width, height) => width * height;

console.log("Result for Arrow:", getAreaArrow(5, 10));
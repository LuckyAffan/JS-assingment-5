// 1. Variables and Math Expressions
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// 2. Conditionals
let age = 20;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// 3. Array Initialization and Manipulation
let fruits = [];
fruits.push("apple", "banana", "orange", "grape", "kiwi");
console.log("Fruits:", fruits);

// 4. Looping through Arrays
for (let fruit of fruits) {
    console.log(fruit);
}

// 5. Pattern Printing with Nested Loops
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}

// 6. Mathematical Operations with Loops
let sumOfFirstTen = 0;
for (let i = 1; i <= 10; i++) {
    sumOfFirstTen += i;
}
console.log("Sum of the first 10 natural numbers:", sumOfFirstTen);

// 7. Array Manipulation with Loop
let colors = [];
colors.push("red", "green", "blue", "yellow", "orange");
console.log("Colors:", colors);

// 8. Accessing Array Elements
for (let i = 0; i < colors.length; i++) {
    console.log("Index:", i, "Color:", colors[i]);
}

// 9. Reversing Array Elements
let reversedColors = colors.reverse();
console.log("Reversed Colors:", reversedColors);
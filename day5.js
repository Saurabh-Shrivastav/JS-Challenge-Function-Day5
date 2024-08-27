/* *************************************Function*******************************
   ************************Activity 1 - Function Declaration*******************

Write a function to check if a number is even or odd and log the result to the console.*/

const num = 10

function checkNumber() {
    if (num % 2 == 0) {
        console.log(`Your number is ${num} and it's Even Number.`);
    } else {
        console.log(`Your number is ${num} and it's Odd Number.`);
    }
}
// checkNumber();

// Write a function to calculate the square of a number and return the result.

const square = 20;

function calculateSquare(square) {
    console.log(square * square);
}
// calculateSquare(square)


/* ***************************Activity 2 - Function Expression**************************
 Write a function expression to find the maximum of two numbers and log the result to the console.*/

function findmax(x, y) {
    // (x > y) ? console.log(`${x} is Greter Than ${y}`) : console.log(`${x} is Less Than ${y}`)
}
findmax(2, 1)

// Write a function expression to concatenate two strings and return the result.
function concate(x, y) {
    return x + y
}
// console.log(concate("Aditya", " Shrivastav"))


/* ***************************Activity 3 - Arrow Function********************************
 Write an arrow function to calculate the sum of two numbers and return the result.*/

const sumOfTwoNum = (x, y) => { return x + y };
// console.log(sumOfTwoNum(5, 6));

// Write an arrow function to check if a string contains a specific character and return a boolean value.
const char = "Aditya#"

const containSpecific = (item) => {
    if (char.includes('@') || char.includes('#') || char.includes('&') || char.includes('$')) {
        console.log(`Special characters are included here ${char}, So this condition is`);
        return true;
    } else {
        console.log(`Special character are nope included here ${char}, So this condition is`);
        return false
    }

}
// console.log(containSpecific(char));


/*************************Activity 4 - Function Parameters and Default Values****************** 

 Write a function that takes two parameters and returns there product. Provide a default value 
for the second parameter.*/

function defaultValue(x, y = 2) {
    return x * y
}
// console.log(defaultValue(6));

/* Write a function that takes a person's name and age and returns a greeting message. Provide a 
default value for the age.*/

function greet(x, y) {
    return `Hello, Mr ${x}, your is ${y}`
}
// console.log(greet('Saurabh', 22));


/*****************************Activity 5 - Higher-Order Function************************

Write a higher-order function that takes a function and a number, and calls the function 
that many time.*/

function repeatVal(fn, number) {
    for (let i = 0; i < number; i++) {
        fn()
    }
}
function moreVal() {
    console.log("Hey! Guys");
}

// repeatVal(moreVal, 8)

/* Write a higher-order function that takes two functions and a value, applies the first function to the 
value, and than applies the second function to the result. */

function higherOeder(fn1, fn2, value) {
    return fn2(fn1(value))
}
function a(item) {
    console.log("item 1 :=",item);
    return item + 2
    
}
function b(item) {
    console.log("item 2 :=",item);
    return item * 2
    
}

// console.log(higherOeder(a, b, 6));

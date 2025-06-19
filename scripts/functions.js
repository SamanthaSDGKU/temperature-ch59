console.log("Functions");
let firstName = "Tatiana";
let lastName = "McCray";

//concatenation 
console.log("Hello " + firstName + " " + lastName + ", welcome");
console.log(`Hello ${firstName} ${lastName} ${1+1} ,welcome`);

// 1. function declaration (creating a function)
function sayHello(){
    // body of the function
    console.log("Hello Cohort 59");
}

//2. call the function (code, console, from the user)
sayHello();
sayHello();

//Example 2 with 1 parameter (inputs)
function greet(name){
    console.log(`Hello ${name}, welcome!`);
}

greet("Tim");
greet("Alex");

//Example 3 with 2 parameter (inputs)
function greet2(name1="someone",name2){
    console.log(`Hello ${name1} and ${name2}, welcome!`);
}

greet2("John","Smith");
greet2();

// Challenge 1: Double the Number
// Task:
// - Create a function called `doubleNumber` that takes one number as a parameter.
// - The function should display the number multiplied by 2.
// - Print the result when you call the function with different numbers.
function doubleNumber(num1){
    let total = num1*2;
    console.log(total);
}

//Example 4, with prompt 

function welcome(){
    let name2 = prompt("Enter your name");
    let age = prompt("Enter your age: ");

    console.log(`Welcome ${name2} - ${age}`);
}


// Example 5 default parameters

function add(num1=0,num2=0){
    console.log(`The total is  ${num1 + num2}`);
}

add(3,5);//8
add();
add(4);

// Challenge 2: Combine Names
// Task:
// - Create a function called `combineNames` that takes two parameters: `firstName` and `lastName`.
// - The function should return the full name in the format: `"firstName lastName"`.
// - If either parameter is missing, it should use the default value `"Unknown"` for that parameter.

function combineNames(firstName="Unknown",lastName="Unknown"){
    console.log(`${firstName} ${lastName}`);
}

combineNames("Alice","Johnson"); // Alice Johnson
combineNames("Alice");// Alice Unknown
combineNames(); // Unknown Unknown

// Challenge 3: Convert Minutes to Seconds

// Task:
// - Create a function called `convertToSeconds` that takes one parameter, `minutes`.
// - The function should return the number of seconds by multiplying the minutes by 60.
// - Call the function with different values of minutes and print the results.

function convertToSeconds(){
    let min=prompt("Enter minutes: ");
    document.getElementById("results").innerHTML += `<p> The conversion is: ${min *60} </p>`;
}


// create a button on the HTML 
/*************************
Import and Export
*************************/

// Importing variable from util.js
// import {apiKey} from './util.js';
// console.log(apiKey);

// Importing default value from util.js
// import apiKeyDefault from './util.js';
// console.log(apiKeyDefault);

// Importing as an object from util.js
import * as util from './util.js';
console.log(util.someData);

/*************************
Values and Variables
*************************/
const helloMessage = 'Hello world'; // Cannot be changed, read-only
let usermessage = "New Value"; // Can be changed

/*************************
Operators
*************************/

console.log(10 + 5);
console.log('Hello' + 'world');
console.log(10 === 5);

/*************************
Functions and Parameters
*************************/

// Function definition; () contains parameters. 
// Func can have as many parameters as needed. 
// Parameters can have default value eg message
// Function can perform a task and print/return the final result
function greetUser (userName, message = "Hello") { 
    console.log('Hello ' + userName + '! ' + message);
    // return username + message;
}
greetUser('Alan', "Lets catch em all"); // Can be recalled as many times as needed

function createGreeting (userName, message) {
    return 'Hi I am ' + userName + '. ' + message;
}
let greeting = createGreeting('Max', ' Awesome!')
console.log(greeting)

function combine(a, b, c) {
    let result = a * b / c;
    return result;
}

// Arrow function
const btn = document.getElementById('btn');
btn.onclick = () => console.log('clicked');
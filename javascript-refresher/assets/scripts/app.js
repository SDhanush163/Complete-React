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
import * as util from "./util.js";
console.log(util.apiKey);
util.utilGreet();
const user = new util.User("Ash", 10);
console.log(user);

/*************************
Values and Variables
*************************/
const helloMessage = "Hello world"; // Cannot be changed, read-only
let usermessage = "New Value"; // Can be changed

/*************************
Operators
*************************/

console.log(10 + 5);
console.log("Hello" + "world");
console.log(10 === 5);

/*************************
Functions and Parameters
*************************/

// Function definition; () contains parameters.
// Func can have as many parameters as needed.
// Parameters can have default value eg message
// Function can perform a task and print/return the final result
function greetUser(userName, message = "Hello") {
    console.log("Hello " + userName + "! " + message);
    // return username + message;
}
greetUser("Alan", "Lets catch em all"); // Can be recalled as many times as needed

function createGreeting(userName, message) {
    return "Hi I am " + userName + ". " + message;
}
let greeting = createGreeting("Max", " Awesome!");
console.log(greeting);

function combine(a, b, c) {
    let result = (a * b) / c;
    return result;
}

// Arrow function
const btn = document.getElementById("btn");
btn.onclick = () => console.log("clicked");

/*************************
Objects
*************************/

import { User } from "./util.js";
const user1 = new User("Mark", 29);
console.log(user1);
user1.greet();

/*************************
Arrays and Array methods
*************************/

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[1]);
hobbies.push("Swimming");
console.log(hobbies);

// Finding the index of the required value in the array
const index = hobbies.findIndex((item) => item === "Cooking");
console.log("Index = " + index);

// Map the array to a unordered list
const hobbyList = document.getElementById("hobby");
hobbies.map((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    hobbyList.appendChild(li);
});

// convertt the array of strings to array of objects with text and index
const editHobbies = hobbies.map((item) => ({
    text: item,
    index: hobbies.findIndex((item2) => item2 == item),
}));
console.log(editHobbies);

/*************************
Destructuring
*************************/
// Array destruct, var names are user defined
const [firstName, lastName] = ["Tom", "Cruise"];
console.log(firstName, lastName);

// Object destruct, var names must be same as class vars
// Alias is allowed eg., name:userName
const { name, age } = {
    name: "Peter",
    age: 50,
};
console.log(name, age);

// Destruct function value
function storeOrder({ id, currency }) {
    // destructuring
    localStorage.setItem("id", id);
    localStorage.setItem("currency", currency);
}

/*************************
Spread Operator
*************************/
const newHobbies = ["Music", "Gym"];
const incorrectMergedHobbies = [hobbies, newHobbies];
const mergedHobbies = [...hobbies, ...newHobbies];

console.log("Incorrect merging of arrays :", incorrectMergedHobbies);
console.log("Correct merging of arrays :", mergedHobbies);

const extendedUser = {
    isAdmin: true,
    ...user1,
};
console.log(extendedUser);

/*************************
Control Structures
*************************/
const password = prompt("Enter Password");

if (password === "Hello") {
    console.log("Hello works!");
} else if (password === "hello") {
    console.log("hello works!");
} else {
    console.log("Access denied");
}

for (const hobby of newHobbies) {
    console.log("Hobby :", hobby);
}

/*************************
More functional operations
*************************/
// Timeouts and passing functions as values
function handleTimeout() {
    console.log("Timed out!");
}
const handleTimeout1 = () => {
    console.log("Timed out again...");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout1, 3000);
setTimeout(() => {
    console.log("Timeout funtion as value");
}, 4000);

// Function inside another function
function init() {
    function greet() {
        console.log("Hello from init");
    }
    greet();
}
// greet(); will not work as it is not scoped outside init()
init();

// Exporting default value
export default "testDefault";

// Exporting values
export let apiKey = "testApiKey";
export let someData = 10;

// Exporting function
export function utilGreet() {
    console.log("Greetings from Util method");
}

// Exporting class
export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi!");
    }
}

// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives: number, string, boolean, null, symbols, undefined

// Variable declaration
// Type of the value
// let age: number;

// Assign a string gives an error
// age = '12';

// Set types
let age: number;
age = 12;

let userName: string;

// Lowercase starting character
userName = 'Max';

// Store boolean values
let isInstructor: boolean;
isInstructor = true;

// null, undefined
// let hobbies: null;
// hobbies = 12; // error

// More complex types
// let hobbies: string; one value
let hobbies: string[]; // array of strings
// let hobbies: number[]; // array of numbers
// let hobbies: boolean:[]; // array of booleans

// Store array of strings
// hobbies = ['Sports', 'Cooking'];

// If I would store number get an error because only string types are allowed
hobbies = ['Sports', 'Cooking'];


// let person;
// Anything is allowed
// Default
// let person: any;
// person = {
//     name: 'Max',
//     age: 32
// }

// Storing another object with another structure
// The type for an object {}
// We're defining type for an object
// We're defining the structur of an object
// We could say the person should store objects that have a name field where the value of type name field is string, age type number
// let person: {}
// We're telling TypeScript that only objects that have this kind of type should be storable in that variable.
let person: {
    name: string,
    age: number
};

person = {
    name: 'Max',
    age: 32
};

// Does not match
// person = {
//     isEmployee: true
// }

// Store array of objects
let people: {
    name: string,
    age: number
}[];

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
// let person: {
//     name: string,
//     age: number
// };

// person = {
//     name: 'Max',
//     age: 32
// };

// Does not match
// person = {
//     isEmployee: true
// }

// Store array of objects
// let people: {
//     name: string,
//     age: number
// }[];

// Type inference
/*
Now, that we have learned about those base types before I dive into functions and parameters, I wanna talk about type inference. In all those examples, which are listed here, I always declared a variable with a type assigned. And then in a second step, I set a value. Now, often in programming, you do that in one step. You create a variable and you then already immediately assign an initial value. So therefore here let's talk about type inference. And let me show you what that is. Let's say we have another variable down here. The course variable. And in that course variable, I wanna store the name of a course like react the complete guide. Like this. Now, if I create this variable like this, and thereafter I try to store a number for an example, the course ID then you will see that I get an error, because the type number is not assignable to type string. But why am I getting this error? After all, I don't define a type anywhere. Well, here TypeScript used its powerful feature of type inference. By default, TypeScript tries to infer as many types as possible. So it tries to know which types are used where, without you explicitly stating those types. Which means that you need to write less code. I could also set my type here as we learned it. That would not be wrong, but it's redundant because if you immediately initialize this variable with a type TypeScript, will look at the value type here. So it will see that we stored a string in that variable. And it will then use that value type as an inferred type for this variable. And if you then try to assign a different type thereafter you'll get an error, because of type inference. And it is considered a good practice and a good idea to embrace that type inference feature. So to not unnecessarily specify the type in addition, you can do that you can explicitly state to type, but it's really redundant. It just means more word from your side and therefore you should not do that. You should instead stick to that type inference and use it whenever possible. And that's another super important feature which I wanted to highlight here.
 */
// let course = 'React - The Complete Guide';
// let course:string = 'React - The Complete Guide';

// course = 12341;

// Using Union Types
// Every variable took just one type so we always had just one posstible type that could be stored in a variable just a number, string or boolean

/**
 * And often that is what you need, but sometimes you want to allow multiple, different types. Let's say here for the course we might be fine with storing a string in there but maybe storing a course ID as a number should also be correct.
 */
// A union type is a type definition that allows more than one type.
// String and Nubmer should be allowed
// let course:string = 'React - The Complete Guide';

// let userName: string | string[]
// We're allowing a number alternatively in combination of
let course:string | number = 'React - The Complete Guide';

// Type Aliases
/**
 * Now the more TypeScript code you're going to write, the higher the chances that at some point you might be repeating some type definition. And we're actually already doing this here. Here, for people, I'm saying that I want an array of this kind of object. So that I want an array full of objects that have this structure. And that's the same object I have up here for person. The same type definition just in the non array form. But the object type is the same. Now you can, of course, duplicate the type definition but it's more realistic that you wanna avoid that duplication. And for that, you can create a so-called type alias. You can define your own base type in which a more complex type definition is stored and the use that type alias instead of repeating the entire type definitions.
 */

/*
let person: {
    name: string;
    age: number
}

let people: {
    name: string;
    age: number;
}[];
*/

// Added TypeScript
// type Person(Upto you) = Type Definition
type Person = {
    name: string,
    age: number
};

// let person: Alias

// let person: {
//     name: string,
//     age: number
// };

// let people: {
//     name: string;
//     age: number;
// }[];

// Person Object
let person: Person;

// Array full of persons
let people: Person[];

/**
 * And that's the very important feature of type aliases which can save you a lot of typing work and which can, therefore, make your code more concise and easier to maintain.
 */

/*
type StringAlias = string;
type NumberAlias = number;
// aliases for 'normal' types

type SixAlias = 6;
type MyFavouriteFood = "burger";
// aliases for 'literal' types
// these are usually useless on their own

type Food = MyFavouriteFood | "pizza" | "pasta" | "salad";
// they get useful when you combine them:
// a Food can be one of these choices.

type Foods = Food[];
// this is an alias for an array of Foods.

type SuccessfulResponse = {
	message: string,
  	statusCode: number,
  	attachment?: string,
	preferredFoods?: Foods,
}          
*/

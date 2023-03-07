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

// Functins & types
function add(a: number, b: number) {
    // Inference type
    // Well, here in this function, I am returning a value and that tells TypeScript something about the return type, the type of the returned value of this function.
    return a + b;
}

// Set the return type
// function sum(a: number, b: number): string | number {
//     return a + b;
// }

// I don't care about concrete type
// Function clash
// Getting an error
// No return type
/*
It has no return statement and therefore it has a special return type called void. Void is basically comparable to nul and undefined, but it's only used in conjunction with functions and it means that this function never returns.
*/
function print(value: any) {
    console.log(value);
}

// // Named function

// //function with type as number
// function add(x: number, y: number): number {
//     // return sum of numbers entered as params
//     return x + y;
//   }

//   // Anonymous function

//   // variable to call and define function
//   let myAdd = function (x: number, y: number): number {
//     // return sum of numbers entered as params
//     return x + y;
//   };

// Generics
// Generic function
// Utility helper function
// Don't mutate original array

// Convert to a generic function
// function insertAtBeginning(array: any[], value: any) {
//     // Create a new array
//     // Copying the existing array
//     const newArray = [value, ...array];
// }

// const demoArray = [1, 2, 3];
// const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// updatedArray[0].split('');


// Define a generic type
// Same type of arguments array of numbers and value should have same type
function insertAtBeginning<T>(array: T[], value: T) {
    // Create a new array
    // Copying the existing array
    const newArray = [value, ...array];
    return newArray;
}
// function insertAtBeginning<T>(array: T[], value: T) {
//     // Create a new array
//     // Copying the existing array
//     const newArray = [value, ...array];
//     return newArray;
// }

// const demoArray = [1, 2, 3];
// const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

insertAtBeginning(['a', 'b', 'c'], 'd');

// Error: 'split' does not exist on type 'number'
// updatedArray[0].split('');

/*
But how does this help us?

Well like this set of codes it's just very cryptic, but now when we call this function, now TypeScript actually is able to understand that it should look at the concrete values of the arguments here. And it understands that this is an array of numbers and this is just a number and they are free to understand that updated array will be an array of numbers. Because of this generic type feature, because we're telling TypeScript that the type here is actually not any type it's not any kind of value. Instead, we tell it that the type of this array and of this value should be the same just that this is an array, but it's an array full of the same types of values as this single value has it. And that's an important piece of information. Therefore, TypeScript is able to look at the type of demo array, which it knows. It knows that this is a, an array of numbers it's able to infer this, and it looks at this type. And then it knows that logically, the array which gets constructed here has to be of the same type as the input array. It's able to infer this here. And hence, it's able to infer that what we get back here has to be an array of numbers. And if I would call, 'insertAtBeginning' here with an array of strings Like this, and I then pass in a string here, and I have my string array here, TypeScript is also able to infer this correctly because again, it looks at this type and this type and it knows that the return type is of the same value as this type, as T input array, enhance it again, infers this correctly. And therefore for the updated array here where it knows that it has to be an array full of numbers. It's now able to warn me when I try to call split. It tells me that this does not exist on type number. So that's just as important feature of generics.
Importance: It's simply helps you write functions in this case, which are type safe yet flexible. They are flexible. They work with any type, but then once a certain type is used for that function, execution, that type is locked in and known. And that allows you to get the best of both worlds, flexibility and type safety. Again, I am fully aware that this generics feature can still be tricky to wrap your head around, but we'll also see it in action.
*/

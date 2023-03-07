// This function doesn't expect any particular type
function add(a, b) {
  return a + b;
}

// JavaScript is dynamically typed
// const result = add(2, 5);
// Concatenate
// Static typing could enhance your code and prevents errors like this
// Which error?
// In a bigger project with lots of code files and potentially a lot of people working on the code base, you might somethig call a function or use some object in an unintended way and then you could run into problems like this because nothing is warning you that this is not how you should use this function. Nothing is telling you, that this function actually wants two numbers, instead of two strings or any values. And that's where TypeScript can help us.
// Because with TypeScript, and I'll show you this code even though we haven't installed TypeScript yet, but I have it installed on my system already, and we will install it together in the next lecture too. But let me show you this first. So with TypeScript, if I copy this code, what we will be able to do is, we can add type annotations here, simply by adding a colon after our parameter, and then adding the type which should be used for this parameter. I'll do this for B as well. And we'll also not just be able to use type annotations on function parameters, but as you will see throughout this module, we can use types and many other situations as well. So now I am making it clear, with TypeScript that here, I actually want two parameters which both should be of type number. And hence, I already get an error here in my IDE, which tells me that this argument of type string is not assignable to a parameter of type number, pretty helpful. And with that, I can catch such an error, such an unintended use of this function before I run and test my code. And that of course allows us to write better code in the end, because we can avoid such errors and we don't have to track them at runtime but we see such errors right, when we start writing code. And that's why using TypeScript could be worth a thought.
const result = add('2', '5');

console.log(result);

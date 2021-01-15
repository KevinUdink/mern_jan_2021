//------------------------------------------------------------------------------------------------------
// we can assign a function to a variable name - we have already worked with this
//------------------------------------------------------------------------------------------------------
const sayHello = function(name) {
  console.log(`Hello ${name}`);
};

//------------------------------------------------------------------------------------------------------
// In ES6 (ES2015) we can create a "Fat Arrow" or "Arrow Function"
// By removing the function keyword, we can change the scope of variables
//    remember that the keyword function creates a new scope...without it we remain in the same scope
// we will see why this is helpful later on
//------------------------------------------------------------------------------------------------------
const es6sayHello = (name) => {
  var myname;
  console.log(`Hello ${name}`);
};

console.log("\n");
sayHello("Billy");
es6sayHello("Bob");



//------------------------------------------------------------------------------------------------------
// ES5
// we can quickly rewrite ES5 functions as arrow functions
//------------------------------------------------------------------------------------------------------
var add = function(a, b) {
  return a + b;
}

var square = function(n) {
  return n * n;
};

console.log("\nES5 math functions");
console.log(add(5,3));
console.log(square(5));



//------------------------------------------------------------------------------------------------------
// ES2015 / ES6
// Shortcuts to note as you look at other code:
//    the parameters only requires ( ) around them if you have more than 1 parameter
//      I suggest you just use them all the time to add clarity to your code
//    no { } are required if you only have one "statement"
//      they are required if you have more than one statement
//      if you use { } you will need to use a return to return a value
//    no return keyword required...it is assumed / implicit when you only have one statement
//      note that when you have more than one statement you will need both { } and a return statement
//------------------------------------------------------------------------------------------------------
const es6_add = (a, b) => a + b;

const es6_square = n => n * n;

const es6_sayHello = (name) => {
  const greeting = `Hello ${name}`;
  console.log("We have created the following greeting: " + greeting);
  return greeting;
};

console.log("\n");
console.log(es6_add(5,3));
console.log(es6_square(5));
console.log(es6_sayHello("Billy Bob"));

//=================================================================================
// everything has a data type in Javascript
//=================================================================================

var myBoolean = true;
console.log("myBoolean: " + myBoolean);

var myNumber = 10;
console.log("myNumber: " + myNumber);


// using backticks for string interpolation on the next 2 console logs (prints)
var myString = "This is a string";
console.log(`myString: ${myString}`);

var myUndefinedVariable;
console.log(`myUndefinedVariable: ${myUndefinedVariable}`);



//=================================================================================
// arrays are zero indexed and have a .length property
//    uses square brackets [ ]
// in JS, an array is technically an object data type with methods and properties
//=================================================================================
var arr = ["a", "b", "c"];
console.log(arr);
console.log("arr has a length of: " + arr.length);
console.log(typeof(arr));


//=================================================================================
// objects / dictionaries use key value pairs and do NOT have an index
//    uses curly brackets { }
//=================================================================================
var obj = {
  "name": "Kevin",
  "age": 29,
  "isLyingAboutAge": true,
}
console.log(obj);


//=================================================================================
// functions can be considered variables as well...just assign it!
//=================================================================================
var myFunction = function() {
  console.log("this is inside a function");
}

console.log("before calling the function");
myFunction();
console.log("after calling the function");

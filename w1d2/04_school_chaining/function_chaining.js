//------------------------------------------------------------------------------
// this is a special case where you CANNOT use an arrow function
//    it MUST have its own context to call the "new" keyword
// typescript will suggest you convert this to a class instead of a function
//    it will require a constructor
// I am intentionally demonstrating a different way of creating objects
//    https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript
//------------------------------------------------------------------------------
var mathObj = function() {
  this.i = 0;

  // by returning "this" object we can continue a chain with "this" object
  this.add = (i) => {
    this.i += i;
    return this;
  };

  this.subtract = (i) => {
    this.i -= i;
    return this;
  };

  // if you do NOT return a value, it can NOT be chained
  //    this is the LAST call you can make while chaining
  this.print = () => {
    console.log(this.i);
  };
}


//------------------------------------------------------------------------------
// the way we would normally do things without chaining
//------------------------------------------------------------------------------
console.log("\nNo chaining...the old way");
var myMathObj = new mathObj();
myMathObj.add(5);
myMathObj.subtract(2); 
myMathObj.print();


//------------------------------------------------------------------------------
// chaining methods can make things easier to read and is also more efficient
//    when running the code
//------------------------------------------------------------------------------
console.log("\nRunning a chain of methods");
var myMathObj1 = new mathObj();
myMathObj1.add(5).subtract(2).print();


//------------------------------------------------------------------------------
// we could also write it this way...which you will see a lot later in react
//------------------------------------------------------------------------------
console.log("\nRunning an alternate syntax for chaining methods");
var myMathObj2 = new mathObj();
myMathObj2
  .add(5)
  .subtract(2)
  .print();

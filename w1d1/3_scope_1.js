// the keyword function defines a new scope

// every javascript file has a "global" scope
//    beatles are in the global scope
var beatles = ['Paul', 'George', 'John', 'Ringo'];

function printNames(names) {
  console.log("Inside of printNames()");

  function actuallyPrintingNames() {
    // var name is scoped for ONLY the "actuallyPrintingNames" function
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  
  // var name cannot be used here since we are outside of the "actuallyPrintingNames" function
  actuallyPrintingNames();
}

printNames(beatles);
// programmer version
magic();

var foo = "bar";

function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}

console.log(foo);

// practicing HOISTING
// This is the way javascript views what was written
// REMEMBER:
//      an equal sign is like an anchor
//          const and let are anchors as well (only available in ES6)
//      the keyword "var" allows things to float to the top of their scope
//          const and let are anchors as well
//      functions (not assigned to variables) ALWAYS float to the top of
//          their scope in both ES5 and ES6
//      functions float first, then vars float 2nd
function magic(){
    var foo;   // this var floated to the top of the function (its scope)
    foo = "hello world";
    console.log(foo);
}

var foo;

magic();

foo = "bar";

console.log(foo);
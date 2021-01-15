const person = {
  firstName: 'Billy',
  lastName: 'Bob',
  email: 'bbob@email.com',
  password: 'passw0rd!',
  username: 'billyb',
  addresses: [
    {
      address: '1600 Pennsylvania Avenue',
      city: 'Washington, D.C.',
      zipcode: '20500',
    },
    {
      address: '221B Baker St.',
      city: 'London',
      zipcode: 'WC2N 5DU',
    }
  ],
};

// If we invoke either of these functions, they will return the same exact result.

// Basic if statement
console.log("\nUsing the 'normal' if / else statement");
if(person.password === "passw0rd!") {
  console.log("You need to change your password!");
} else {
  console.log("Thanks for changing your password!");
}


// Ternary statement
//    First check to see if the expression is true or false
//    the statement(s) after the ? is what we do if it is TRUE
//    the statement(s) after the : is what we do if it is FALSE
//    don't forget the ; at the end of the last statement
console.log("\nUsing the 'ternary' if / else statement");
person.password === "passw0rd!"                         // "if" - this must return true or false like normal
  ? console.log("You need to change your password!")    // ? starts the then
  : console.log("Thanks for changing your password!");  // : means else


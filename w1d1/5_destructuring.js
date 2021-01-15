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

const animals = [
    'horse', 
    'dog', 
    'fish', 
    'cat', 
    'bird'
  ];

//****************************************************************************************************************/
// BEFORE ES6 - you had to access everything manually / specifically
var es5Email = person.email;
var es5FirstAnimal = animals[0];

// AFTER ES6 - destructuring "automatically" copies a value from the object / array
//    in to a local variable of the SAME KEY NAME (objects) or based on index (arrays)
const { email } = person;
const [es6_firstAnimal] = animals;

console.log("\nES5 email: " + es5Email);
console.log("Destructured email: " + email);
// => bob@email.com

console.log("\nES5 first animal: " + es5FirstAnimal);
console.log("Desctructured first animal: " + es6_firstAnimal);
// => horse

//****************************************************************************************************************/
// Before ES6 
//    only one piece of data can be accessed at a time
var es5_email = person.email;
var es5_password = person.password;
var es5_firstAnimal = animals[0];
var es5_thirdAnimal = animals[2];


// with ES6 destructuring I can pull any variable out that I want...all at once!

// skipping a value in an array can be done with commas

const [ firstAnimal, , thirdAnimal ] = animals;
// solving name conflicts can be done when destructuring
const { email: es6_email, password } = person;

// nested destructuring
//    access the addresses array inside of the person object
//    use the array destructuring to create 2 new local variables to hold each address
const { addresses: [ whiteHouse, sherlock ] } = person;


console.log("\nDestructured:");
console.log("\nArray Third animal: " + thirdAnimal);
// => fish 

console.log("email: " + es6_email);
console.log("pw: " + password)
console.log("Sherlock Holmes address: " + sherlock);
console.log("\nSherlock Holmes address (showing values):");
console.log(sherlock);

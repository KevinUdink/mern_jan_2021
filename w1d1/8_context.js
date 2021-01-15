//------------------------------------------------------------------------------------------------------
// The normal way to write this without using arrow functions
//    the "for of" loops keep the context - they are not functions (which create their own scope)
//------------------------------------------------------------------------------------------------------
class Deck {
  constructor() {
    const suits = ['Diamonds', 'Hearts']; // , 'Spades', 'Clubs'];
    const faces = ['Ace', '2', '3']; // , '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];

    for (const suit of suits) {
      for (const face of faces) {
        deck.push(this.createCard(suit, face));
      }
    }

    this.deck = deck;
  }

  createCard(suit, face) {
    return face + " of " + suit;
  }
}

//------------------------------------------------------------------------------------------------------
// this results in the following error:
//    TypeError: Cannot read property 'createCard' of undefined 
//      ("this" is not defined)
// This is because createCard doesn't exist in this context / scope, 
//    By using anonymous functions, it creates a new context / scope, so this won't point to the right place
//------------------------------------------------------------------------------------------------------
class BadDeck {
  constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];

    // uncomment the line for this to see the error it will cause
    suits.forEach(function(suit) {
      faces.forEach(function(face) {
        // deck.push(this.createCard(suit, face));
        console.log(`creating card for ${suit} and ${face}`);
      });
    });

    this.deck = deck;
  }

  createCard(suit, face) {
    return face + " of " + suit;
  }
}

//------------------------------------------------------------------------------------------------------
// Using arrow functions we can still use anonymous functions AND KEEP the context we need
//    no function keywords allows us to keep the same context!
//------------------------------------------------------------------------------------------------------
class ArrowDeck {
  constructor() {
    const suits = ['Diamond', 'Heart']; // , 'Spade', 'Club'];
    const faces = ['Ace', '2', '3']; // , '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];

    suits.forEach( (suit) => {
      faces.forEach( (face) => {
        deck.push(this.createCard(suit, face));
      });
    });

    this.deck = deck;
  }

  createCard(suit, face) {
    return face + " of " + suit;
  }
}


const myDeck = new Deck();
console.log("Look at the first deck");
console.log(myDeck.deck);

const myBadDeck = new BadDeck();
console.log("Look at the bad deck");
console.log(myBadDeck.deck);

const myArrowDeck = new ArrowDeck();
console.log("\nLook at the arrow deck");
console.log(myArrowDeck.deck);

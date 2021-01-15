//------------------------------------------------------------------------------------------------------
// think of our Card class as a factory that produces cards 
//    and our constructor is the template we will use to create a card
//------------------------------------------------------------------------------------------------------
class Card {
  constructor(suit, rank, value) {
    // every card we create will contain their own values for each property / attribute
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }

  printCard() {
    console.log("Printing our awesome card:");
    console.log(this);
    // output:  Card { suit: 'Suit', rank: 'Joker', value: 100 }
  }
}


//------------------------------------------------------------------------------------------------------
// our Deck class (a factory that makes card decks)
//------------------------------------------------------------------------------------------------------
// Remember last time we used arrow functions to keep the context we need  (Week 1 Day 1 lecture)
//    by not using function keywords it allow us to keep the same context!
//------------------------------------------------------------------------------------------------------
class Deck {
  constructor() {
    // we will start EVERY deck with an empty array to hold our card instances
    this.deck = [];    
  }
  
  createDeck() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const deck = [];

    // using map to go through each element in an array
    suits.map( (suit) => {
      faces.map( (face, index) => {
        // the "this" keyword is referring to this specific instance...not ALL instances
        deck.push(this.createCard(suit, face, values[index]));
      });
    });

    this.deck = deck;
  }

  createCard(suit, face, value) {
    return new Card(suit, face, value);
  }

  shuffleDeck() {
    let location1, location2, tmp;

    // we will swap 2 cards places in the deck ten thousand times
    for (let i = 0; i < 10000; i++) {
      // choose 2 random locations in the deck
      location1 = Math.floor((Math.random() * this.deck.length));
      location2 = Math.floor((Math.random() * this.deck.length));

      // swap the cards at the two locations in the deck
      tmp = this.deck[location1];
      this.deck[location1] = this.deck[location2];
      this.deck[location2] = tmp;
    }
  }

  printDeck() {
    console.log("The deck order is:");
    console.log(this);
  }

  dealCard(player) {
    // take a card from the deck and put it in the players hand
    player.playerDrawCard();
  }
}


//------------------------------------------------------------------------------------------------------
// Our Player class is very similar to our Card class "factory" - it produces Player instances
//    and our constructor is the template we will use to create each Player
//------------------------------------------------------------------------------------------------------
class Player {
  // passing in the player's name to the constructor reduced extra lines of code
  constructor(playerName) {
    this.playerName = playerName;
    this.playerCards = [];
  }

  drawCard(card) {
    this.playerCards.push(card);
  }

  discardCard(card) {
    // find this card in the players hand and remove it

  }

  printPlayer() {
    console.log(`${this.playerName}'s hand is:`);
    console.log(this.playerCards);
  }
}


//------------------------------------------------------------------------------------------------------
// Now to use our classes and create a game!
//------------------------------------------------------------------------------------------------------
console.log("\nWelcome to our card game!\n");

const gameDeck = new Deck();

// Fill the deck array with all of the cards
gameDeck.createDeck();
gameDeck.shuffleDeck();
gameDeck.printDeck();

const player1 = new Player("Billy");
const player2 = new Player("Sally");

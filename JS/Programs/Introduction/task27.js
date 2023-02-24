// Shuffle Deck of Cards


/**
 * 
 * In this example, you will learn to write a JavaScript program that shuffles a deck of cards.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array sort()
JavaScript for loop
Example: Shuffle Deck of Cards



// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');

// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}




In the above program, the suits and values variables contain the elements of a card.

The nested for loop is used to create a deck of cards.

We need to create a deck of cards containing each suits with all the values. So the first for loop iterates over all the suits and the second for loop iterates over the values. Then, the elements are created and added to the deck array.
The array elements are stored as an object as:
[{Value: "Ace", Suit: "Spades"},{Value: "2", Suit: "Spades"}.....]
The second for loop is used to shuffle the deck of cards.

Math.random() generates a random number.
Math.floor() returns the number by decreasing the value to the nearest integer value.
A random number is generated between 0 and 51 and two card positions are swapped.
The third for loop is used to display the first five cards in the new deck.


 */
// Class for the card deck
class Deck {
    // Function that creates a deck of cards
    constructor(
    faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'], 
    values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    ) {
        // Array that holds cards
        this.deck = []

        let cardIndex = 0
        // for loop that loops through suits
        for(let i = 0; i < suits.length; i++) {
            // for loop that loops through faces
            for(let x = 0; x < faces.length; x++) {
                this.deck[cardIndex++] = new Card(faces[x], suits[i], values[x])
            }
        }
    }

    // Remove and return the first card from the deck array
    removeFirstCard(deck_instance) {
        let deck = deck_instance.deck
        // Temporarily store the first card in a variable
        let firstCard = deck[0]
        // Remove the first card from the deck array
        // Loop through the deck and shift all of the cards to the left by one
        for(let i = 0; i < deck.length - 1; i++) {
            deck[i] = deck[i + 1]
        }
        // Remove the last card from the array
        deck.length = deck.length - 1
        // Return the first card
        return firstCard
    }
}

// Class for card
class Card {
    constructor(face, suit, value) {
        this.face = face
        this.suit = suit
        this.value = value
    }
}

let card_deck = new Deck()
let returnedCard = card_deck.removeFirstCard(card_deck)

console.log(card_deck)
console.log(returnedCard)
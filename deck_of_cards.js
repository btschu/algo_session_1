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

console.log(card_deck)
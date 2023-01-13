//possible values and suits
let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//pair each possible suit with each possible value to create a new card object
//push that card object to a deck array
function getDeck(){
    let deck = [];

    for(let i = 0; i < suits.length; i++){
        for(let j = 0; j < values.length; j++){
            let card = {value: values[j], suit: suits[i]};
            deck.push(card);
        }
    }

    return deck;
}

//shuffle deck: take 2 random cards in the deck and swap their positions in the deck array
//do this 2000 times to get a good shuffle
function shuffle(deck){
    for(let i = 0; i < 2000; i++){
        let indexCard1 = Math.floor(Math.random() * deck.length);
        let indexCard2 = Math.floor(Math.random() * deck.length);

        let temp = deck[indexCard1];

        deck[indexCard1] = deck[indexCard2];
        deck[indexCard2] = temp;
    }
}

//render deck to DOM
function renderDeck(deck){

    document.getElementById("deck").innerHTML = "";

    for(let i = 0; i < deck.length; i++){
        let card = document.createElement("div")
        let value = document.createElement("div")
        let suit = document.createElement("div")

        card.className = "card"
        value.className = "value"
        suit.className = "suit" + " " + deck[i].suit

        value.innerHTML = deck[i].value
        card.appendChild(value)
        card.appendChild(suit)

        document.getElementById("deck").appendChild(card);
    }
}

let deck = getDeck();
shuffle(deck);
renderDeck(deck);

document.getElementById("shuffle").addEventListener('click', function(){
    shuffle(deck)
    renderDeck(deck)
})

// //deal a card
// function dealCard(deck){
//     let card = deck.pop();
//     console.log(card)
//     return card;
// }

// //render card
// function renderCard(card){

//     document.getElementById("card").innerHTML = "";

//         let cardRender = document.createElement("div")
//         let cardValue = document.createElement("div")
//         let cardSuit = document.createElement("div")

//         cardRender.className = "card"
//         cardValue.className = "value"
//         cardSuit.className = "suit" + " " + card.suit

//         cardValue.innerHTML = card.value
//         cardRender.appendChild(cardValue)
//         cardRender.appendChild(cardSuit)

//     document.getElementById("card").appendChild(cardRender)
// }

// document.getElementById("deal").addEventListener('click', function(){
//     let card = dealCard(deck)
//     renderCard(card)
//     renderDeck(deck)
// })
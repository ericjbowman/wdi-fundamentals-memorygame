var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
function flipCard() {
  var ran = Math.random();
  var rand = (ran * 3);
  var rando = Math.floor(rand);
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[rando].rank);
  console.log(cards[rando].suit);
  console.log(cards[rando].cardImage);
  this.setAttribute('src', cards[rando].cardImage);
  cardsInPlay.push(cards[rando].rank);
  if ((cardsInPlay.length === 2) && (cardsInPlay[0] === cardsInPlay[1])) {
    alert("You found a match!");
  }
    else {
      if ((cardsInPlay.length === 2) && (cardsInPlay[0] !== cardsInPlay[1])) {
        alert("Sorry, try again");
      }
    }
  }
function createBoard() {
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', 'images/back.png');
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', flipCard);
  document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();

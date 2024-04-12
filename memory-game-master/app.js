const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  }, {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  }, {
    name: 'milkshake',
    img: 'images/milkshake.png',
  }, {
    name: 'pizza',
    img: 'images/pizza.png',
  }, {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  }
]
// Randomize the order of the cards in the array
// console.log(cardArray)
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let score = 0

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optOneId = cardsChosenIds[0]
  const optTwoId = cardsChosenIds[1]

  if (optOneId == optTwoId) {
    cards[optOneId].setAttribute('src', 'images/blank.png')
    cards[optTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image!')
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match!')
    score += 2
    cards[optOneId].setAttribute('src', 'images/white.png')
    cards[optTwoId].setAttribute('src', 'images/white.png')
    cards[optOneId].removeEventListener('click', flipCard)
    cards[optTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optOneId].setAttribute('src', 'images/blank.png')
    cards[optTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry, try again!')
    score -= 1
  }
  resultDisplay.textContent = score
  cardsChosen = []
  cardsChosenIds = []
  if(cardsWon.length == cardArray.length/2){
    resultDisplay.textContent = 'Congrats! You won! 🎉✨ with a score of '+ score
  }

} 

function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}
// Reset the game
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', resetGame)

function resetGame() {
  alert('The game has been reset')
  cardsChosen = []
  cardsChosenIds = []
  cardsWon = []
  score = 0
  resultDisplay.textContent = 0
  gridDisplay.innerHTML = ''
  createBoard()
}



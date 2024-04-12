const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')

document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.querySelector('#start');
  startButton.addEventListener('click', startGame);
});

let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let countDownTimerId

//start game
function startGame() {
  moveMole()
  countDownTimerId = setInterval(countDown, 1000)
}

function moveMole() {
  timerId = setInterval(randomSquare, 600)
}

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })
  let randomSquare = squares[Math.floor(Math.random() * squares.length)]
  randomSquare.classList.add('mole')
  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      playAudio()
      hitPosition = null
    } else {
      result--
      score.textContent = result
    }
  })
})

//End game
function countDown() {
  currentTime--
  timeleft.textContent = currentTime
  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('Game Over! Your final score is: ' + result)
  }
}


function playAudio() {
  const audio = document.querySelector('#audio');
  audio.currentTime = 0;
  audio.play();
}

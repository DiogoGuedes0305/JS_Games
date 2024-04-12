document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 'red'

  const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]

  function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
      const square1 = squares[winningArrays[y][0]];
      const square2 = squares[winningArrays[y][1]];
      const square3 = squares[winningArrays[y][2]];
      const square4 = squares[winningArrays[y][3]];
  
      // Check if all four squares have the class of player-one or player-two
      if (
        square1.classList.contains('player-one') &&
        square2.classList.contains('player-one') &&
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one')
      ) {
        result.innerHTML = '<span style="color: red;">Player Two Won!</span>';
      } else if (
        square1.classList.contains('player-two') &&
        square2.classList.contains('player-two') &&
        square3.classList.contains('player-two') &&
        square4.classList.contains('player-two')
      ) {
        result.innerHTML = '<span style="color: blue;">Player One Won!</span>';
      }
    }
  }
  

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      // If the square below your current square is taken and your current square is not taken
      if (squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken')) {
        // Check if the current player is 'red' (player one)
        if (currentPlayer === 'red') {
          // Add the 'taken' class and the 'player-one' class to the current square
          squares[i].classList.add('taken');
          squares[i].classList.add('player-one');
          // Change currentPlayer to 'blue' (player two)
          currentPlayer = 'blue';
          // Update displayCurrentPlayer to show the current player's color
          displayCurrentPlayer.style.color = currentPlayer;
          displayCurrentPlayer.innerHTML = 'Player Two (Blue)';
        } else if (currentPlayer === 'blue') {
          // Add the 'taken' class and the 'player-two' class to the current square
          squares[i].classList.add('taken');
          squares[i].classList.add('player-two');
          // Change currentPlayer to 'red' (player one)
          currentPlayer = 'red';
          // Update displayCurrentPlayer to show the current player's color
          displayCurrentPlayer.style.color = currentPlayer;
          displayCurrentPlayer.innerHTML = 'Player One (Red)';
        }
      } else {
        // Alert if the move is invalid
        alert('You cannot place your piece here.');
      }
      // Check the board for a win or draw
      checkBoard();
    };
  }
  

  displayCurrentPlayer.style.color = currentPlayer; // Set the color of the displayCurrentPlayer element to the current player's color

  // Optionally, you can set the text content of displayCurrentPlayer to indicate the current player's color
  displayCurrentPlayer.innerHTML = currentPlayer === 'red' ? 'Player One (Red)' : 'Player Two (Blue)';
  
})
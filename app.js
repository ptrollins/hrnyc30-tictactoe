// document.querySelectorAll('.column').forEach((element) => {
//   element.addEventListener('click', handleClick);
// });

const board = {};
let player = 'X';
let win = false;
let count = 0;

document.querySelectorAll('.column').forEach((element) => {
  element.addEventListener('click', handleClick);
  board[element.id] = element;
});

function handleClick(event) {
  if (!win) {
    const element = event.target;
    if (!win && element.innerHTML === '') {
      element.innerHTML = `<span>${player}</span>`;
      checkWin();
      if (!win) {
        togglePlayer();
      }
      count++;
      checkTie();
    }
  }
}

function togglePlayer() {
  player = player === 'X' ? 'O' : 'X';
  document.getElementById('player').innerText = player;
}

function checkWin() {
  const possibleWins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  possibleWins.forEach((row) => {
    // [1,2,3]
    if (
      board[row[0]].innerText === player &&
      board[row[1]].innerText === player &&
      board[row[2]].innerText === player
    ) {
      board[row[0]].style['background-color'] = 'green';
      board[row[1]].style['background-color'] = 'green';
      board[row[2]].style['background-color'] = 'green';
      win = true;
      document.getElementById(
        'message'
      ).innerText = `Player ${player} has won!`;

      return;
    }
  });
}

function checkTie() {
  if (count === 9) {
    win = true;
    setBoardColor('red');
    document.getElementById('message').innerText = 'Both players have tied.';
  }
}

function resetBoard() {
  document.getElementById('message').innerText = '';
  player = 'X';
  document.getElementById('player').innerText = player;
  win = false;
  count = 0;
  setBoardColor('powderblue');
  setBoardText('');
  for (element in board) {
    board[element].innerText = '';
  }
}

function setBoardColor(color) {
  for (element in board) {
    board[element].style['background-color'] = color;
  }
}

function setBoardText(text) {
  for (element in board) {
    board[element].innerText = text;
  }
}

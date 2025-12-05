const boardEl = document.getElementById('board');
const resetBtn = document.getElementById('reset');
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = 'X';
let gameOver = false;

function renderBoard() {
  boardEl.innerHTML = '';
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = board[r][c];
      cell.addEventListener('click', () => makeMove(r, c));
      boardEl.appendChild(cell);
    }
  }
}

function makeMove(r, c) {
  if (board[r][c] !== '' || gameOver) return;
  board[r][c] = currentPlayer;
  if (checkWin(currentPlayer)) {
    alert(currentPlayer + ' wins!');
    gameOver = true;
  } else if (board.flat().every(v => v !== '')) {
    alert('Draw!');
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
  renderBoard();
}

function checkWin(p) {
  // rows
  for (let r = 0; r < 3; r++) {
    if (board[r][0] === p && board[r][1] === p && board[r][2] === p) return true;
  }
  // cols
  for (let c = 0; c < 3; c++) {
    if (board[0][c] === p && board[1][c] === p && board[2][c] === p) return true;
  }
  // diagonals
  if (board[0][0] === p && board[1][1] === p && board[2][2] === p) return true;
  if (board[0][2] === p && board[1][1] === p && board[2][0] === p) return true;
  return false;
}

resetBtn.addEventListener('click', () => {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  gameOver = false;
  renderBoard();
});

renderBoard();


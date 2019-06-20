const Snake = require('./snake.js');

class Board {
  constructor() {
    this.board = [];
    this.snake = new Snake();
    this.apple = [];
    this.createBoard();
    this.generateApple();
  }
}

Board.prototype.createBoard = function() {
  // structures the board
  for (let i = 0; i < 20; i++) {
    const row = [];
    for (let y = 0; y < 20; y++) {
      row.push([i, y]);
    }
    this.board.push(row);
  }
};

Board.prototype.position = function(pos) {
  // returns a board position when passed an Array with x,y coords
  const posX = pos[0];
  const posY = pos[1];

  return this.board[posX][posY];
};

Board.prototype.randomPos = function() {
  // returns a random board position
  const posX = Math.floor(Math.random() * 20);
  const posY = Math.floor(Math.random() * 20);

  return [posX, posY];
};

Board.prototype.generateApple = function() {
  // apple places a apple at a random spot to be collected
  const applePos = this.randomPos();
  this.apple = applePos;
};

module.exports = Board;

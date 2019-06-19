class Board {
  constructor() {
    this.board = [];
    // this.snake = new Snake();
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
  const posX = pos[0];
  const posY = pos[1];

  return this.board[posX][posY];
};

Board.prototype.randomPos = function() {
  const posX = Math.floor(Math.random() * 20);
  const posY = Math.floor(Math.random() * 20);

  return [posX, posY];
};

module.exports = Board;

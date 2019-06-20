class Snake {
  constructor() {
    this.direction = 'E';
    this.segments = [[3, 10], [2, 10], [1, 10]];
  }
}

Snake.DIRS = {
  N: [-1, 0],
  E: [0, 1],
  S: [1, 0],
  W: [0, -1]
};

Snake.prototype.move = function() {
  this.segments.pop();
  const prevHead = this.segments[0];
  const currentDirection = Snake.DIRS[this.direction];
  const nextCoord = this.addCoord(prevHead, currentDirection);
  if (this.validMove(nextCoord)) {
    this.segments.unshift(nextCoord);
  } else {
    alert('You lose!');
  }
};

Snake.prototype.validMove = function(pos) {
  if (this.segments.includes(pos) || pos[0] > 19 || pos[0] < 0 || pos[1] > 19 || pos[1] < 0) {
    return false;
  }
  return true;
};

Snake.prototype.addCoord = function(position, increaseBy) {
  const posX = position[0] + increaseBy[0];
  const posY = position[1] + increaseBy[1];
  return [posX, posY];
};

Snake.prototype.turn = function(direction) {
  this.direction = direction.toUpperCase();
};

Snake.prototype.apple = function() {};

module.exports = Snake;

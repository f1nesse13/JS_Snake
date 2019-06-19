class Snake {
  constructor() {
    this.direction = 'W';
    this.segments = [[5, 10], [6, 10], [7, 10]];
  }
}

Snake.DIRS = {
  N: [0, -1],
  E: [1, 0],
  S: [0, 1],
  W: [-1, 0]
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

Snake.prototype.addCoord = function(position, increaseBy) {
  const posX = position[0] + increaseBy[0];
  const posY = position[1] + increaseBy[1];
  return [posX, posY];
};

Snake.prototype.turn = function(direction) {
  this.direction = direction.toUpperCase();
};

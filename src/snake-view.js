const Board = require('./board.js');

class View {
  constructor($el) {
    this.$el = $el;
    this.board = new Board();
    this.keyHandler();
    this.createBoard();
    this.render();
    setInterval(() => {
      this.step();
    }, 1000);
  }
}

View.KEYS = {
  38: 'N',
  40: 'S',
  39: 'E',
  37: 'W'
};

View.prototype.keyHandler = function() {
  const that = this;
  $(document).on('keydown', function(e) {
    // these cases ensure that we are not trying to 'turn around' on ourselves and change our snakes direction
    const newDirection = that.board.snake.direction;
    switch (e.which) {
      case 37:
        if (newDirection !== 'E') {
          that.board.snake.direction = 'W';
        }
        break;
      case 38:
        if (newDirection !== 'S') {
          that.board.snake.direction = 'N';
        }
        break;
      case 39:
        if (newDirection !== 'W') {
          that.board.snake.direction = 'E';
        }
        break;
      case 40:
        if (newDirection !== 'N') {
          that.board.snake.direction = 'S';
        }
        break;
      default:
        break;
    }
    // const buttonPressed = e.which;
    // if (View.KEYS.buttonPressed !== undefined) {
    //   this.board.snake.direction = View.KEYS.buttonPressed;
    // }
  });
};

View.prototype.createBoard = function() {
  this.board.board.forEach(row => {
    $(this.$el).append('<ul>');
    row.forEach(col => {
      $('ul')
        .last()
        .append('<li>');
    });
  });
};

View.prototype.render = function() {
  this.board.snake.segments.forEach(pos => {
    $(`ul:nth-of-type(${pos[0]}) li:nth-of-type(${pos[1]})`).addClass('selected');
  });
};

View.prototype.step = function() {
  const posX = this.board.snake.segments[this.board.snake.segments.length - 1][0];
  const posY = this.board.snake.segments[this.board.snake.segments.length - 1][1];
  $(`ul:nth-of-type(${posX}) li:nth-of-type(${posY})`).removeClass('selected');
  this.board.snake.move();
  this.render();
};

module.exports = View;

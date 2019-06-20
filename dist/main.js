/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Snake = __webpack_require__(/*! ./snake.js */ \"./src/snake.js\");\n\nclass Board {\n  constructor() {\n    this.board = [];\n    this.snake = new Snake();\n    this.createBoard();\n  }\n}\n\nBoard.prototype.createBoard = function() {\n  // structures the board\n  for (let i = 0; i < 20; i++) {\n    const row = [];\n    for (let y = 0; y < 20; y++) {\n      row.push([i, y]);\n    }\n    this.board.push(row);\n  }\n};\n\nBoard.prototype.position = function(pos) {\n  // returns a board position when passed an Array with x,y coords\n  const posX = pos[0];\n  const posY = pos[1];\n\n  return this.board[posX][posY];\n};\n\nBoard.prototype.randomPos = function() {\n  // returns a random board position\n  const posX = Math.floor(Math.random() * 20);\n  const posY = Math.floor(Math.random() * 20);\n\n  return [posX, posY];\n};\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./snake-view.js */ \"./src/snake-view.js\");\n\n$(() => {\n  const rootEl = $('.root');\n  new View(rootEl);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/snake-view.js":
/*!***************************!*\
  !*** ./src/snake-view.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n\nclass View {\n  constructor($el) {\n    this.$el = $el;\n    this.board = new Board();\n    this.keyHandler();\n    this.createBoard();\n    this.render();\n    setInterval(() => {\n      this.step();\n    }, 1000);\n  }\n}\n\nView.KEYS = {\n  38: 'N',\n  40: 'S',\n  39: 'E',\n  37: 'W'\n};\n\nView.prototype.keyHandler = function() {\n  const that = this;\n  $(document).on('keydown', function(e) {\n    // these cases ensure that we are not trying to 'turn around' on ourselves and change our snakes direction\n    const newDirection = that.board.snake.direction;\n    switch (e.which) {\n      case 37:\n        if (newDirection !== 'E') {\n          that.board.snake.direction = 'W';\n        }\n        break;\n      case 38:\n        if (newDirection !== 'S') {\n          that.board.snake.direction = 'N';\n        }\n        break;\n      case 39:\n        if (newDirection !== 'W') {\n          that.board.snake.direction = 'E';\n        }\n        break;\n      case 40:\n        if (newDirection !== 'N') {\n          that.board.snake.direction = 'S';\n        }\n        break;\n      default:\n        break;\n    }\n    // const buttonPressed = e.which;\n    // if (View.KEYS.buttonPressed !== undefined) {\n    //   this.board.snake.direction = View.KEYS.buttonPressed;\n    // }\n  });\n};\n\nView.prototype.createBoard = function() {\n  this.board.board.forEach(row => {\n    $(this.$el).append('<ul>');\n    row.forEach(col => {\n      $('ul')\n        .last()\n        .append('<li>');\n    });\n  });\n};\n\nView.prototype.render = function() {\n  this.board.snake.segments.forEach(pos => {\n    $(`ul:nth-of-type(${pos[0]}) li:nth-of-type(${pos[1]})`).addClass('selected');\n  });\n};\n\nView.prototype.step = function() {\n  const posX = this.board.snake.segments[this.board.snake.segments.length - 1][0];\n  const posY = this.board.snake.segments[this.board.snake.segments.length - 1][1];\n  $(`ul:nth-of-type(${posX}) li:nth-of-type(${posY})`).removeClass('selected');\n  this.board.snake.move();\n  this.render();\n};\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/snake-view.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Snake {\n  constructor() {\n    this.direction = 'E';\n    this.segments = [[3, 10], [2, 10], [1, 10]];\n  }\n}\n\nSnake.DIRS = {\n  N: [-1, 0],\n  E: [0, 1],\n  S: [1, 0],\n  W: [0, -1]\n};\n\nSnake.prototype.move = function() {\n  this.segments.pop();\n  const prevHead = this.segments[0];\n  const currentDirection = Snake.DIRS[this.direction];\n  const nextCoord = this.addCoord(prevHead, currentDirection);\n  if (this.validMove(nextCoord)) {\n    this.segments.unshift(nextCoord);\n  } else {\n    alert('You lose!');\n  }\n};\n\nSnake.prototype.validMove = function(pos) {\n  if (this.segments.includes(pos) || pos[0] > 19 || pos[0] < 0 || pos[1] > 19 || pos[1] < 0) {\n    return false;\n  }\n  return true;\n};\n\nSnake.prototype.addCoord = function(position, increaseBy) {\n  const posX = position[0] + increaseBy[0];\n  const posY = position[1] + increaseBy[1];\n  return [posX, posY];\n};\n\nSnake.prototype.turn = function(direction) {\n  this.direction = direction.toUpperCase();\n};\n\nSnake.prototype.apple = function() {};\n\nmodule.exports = Snake;\n\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ });
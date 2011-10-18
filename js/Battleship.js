// Game class, contains game state
function Battleship(board_x, board_y, player_1_name, player_2_name) {


    this.boards = [
      new Board(board_x, board_y),
      new Board(board_x, board_y)
    ];

    this.shots_fired  = {}:
    this.ships_placed = {};

    this.place_ship = function(player, x, y, size, dir) {
      jk
    }
  }



  // Board class, keeps track of ship locations and hit/miss status
  function Board(x, y) {

    max_x = x;
    max_y = y;

    grid = [];

    this.place_ship = function(coords, dir, length) {
      ship = new Ship(length);
    }

    this.shot_fired = function(x,y) {
      if (!check_valid_shot(x,y)) { return INVALID_SHOT; }
      if (shots[x][y])            { return ALREADY_SHOT; }
      shots[x] ||= []
      shots[x][y] = true;
      if (ships[x][y] != undefined) {
        return ships[x][y].got_hit(x,y);
      }
    }

    check_valid_shot(x,y) {
      return x < max_x && x > 0 && y < max_y && y > 0;
    }
  }



  // Ship class, keeps track of individual hits and sunk / not status
  function Ship(length) {

    this.length = length;

    this.HIT  = 0;
    this.SUNK = 1;

    this.got_hit = function(x,y) {
      
    }
 
    this.is_sunk = function() {
    }
  }
}

game = Battleship.new(10,10,'asdf','qwer');

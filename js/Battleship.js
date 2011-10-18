// Game class, contains game state
function Battleship(board_x, board_y, player_1_name, player_2_name) {

    this.boards = [
      new Board(board_x, board_y),
      new Board(board_x, board_y)
    ];

  }

  // Board class, keeps track of ship locations and hit/miss status
  function Board(x, y) {

    this.INVALID_SHOT = 0;
    this.ALREADY_SHOT = 1;
    this.WIN          = 2;

    max_x = x;
    max_y = y;

    ships = []; shots = [];
    ships_sunk = 0; ships_placed = 0;

    this.place_ship = function(x, y, dir, length) {
      ship = new Ship(length);
      for (l=0; l<length; l++) {
        ships[x]    ||= [];
        ships[x][y] = ship;
        switch(dir) {
          case 'N': y--; break;
          case 'S': y++; break;
          case 'W': x--; break;
          case 'E': x++; break;
        }
      }
      ships_placed++;
    }

    this.shot_fired = function(x,y) {

      if (!check_valid_shot(x,y)) { return INVALID_SHOT; }
      if (shots[x][y])            { return ALREADY_SHOT; }

      shots[x] ||= []
      shots[x][y] = true;
      if (ships[x][y] != undefined) {
        shot_result = ships[x][y].got_hit(x,y);
      }
      if (shot_result == Ship.SUNK) {
        ships_sunk++;
        return (ships_sunk >= ships_placed) ? WIN : shot_result;
      }
    }

    check_valid_shot(x,y) {
      return x < max_x && x > 0 && y < max_y && y > 0;
    }
  }


  // Ship class, keeps track of individual hits and sunk / not status
  function Ship(length) {

    this.HIT  = 0;
    this.SUNK = 1;

    length = length;
    hits   = 0;

    this.got_hit = function(x,y) {
      this.hits++;
      return this.is_sunk?() ? SUNK : HIT;
    }

    this.is_sunk = function() { this.hits >= this.length); }
  }
}

game = Battleship.new(10,10,'asdf','qwer');

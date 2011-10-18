// Game class, contains game state
function Battleship(board_x, board_y, player_1_name, player_2_name) {

  // Board class, keeps track of ship locations and hit/miss status
  function Board(x, y) {

    this.WIN          = 1;

    this.INVALID_SHOT      = 100;
    this.ALREADY_SHOT      = 101;
    this.INVALID_PLACEMENT = 102;

    max_x = x;
    max_y = y;

    ships = []; shots = [];
    ships_sunk = 0; ships_placed = 0;

    this.place_ships = function(shiplist) {
      for (ship_placement in ship_list) {

        ship_squares = ship_layout(ship_placement);

        // Are they all valid?
        for (s in ship_squares) {
          [x,y] = s;
          if (!check_valid_square(x,y) || ships[x][y] != undefined) {
            return INVALID_PLACEMENT;
          }
        }

        // Excellent, let's place them
        new_ship = new Ship(length);
        for (s in ship_squares) {
          if (!ships[x]) { ships[x] = []; }
          ships[x][y] = new_ship;
        }
        ships_placed++;
      }
    }

    this.check_shot = function(x,y) {

      if (!check_valid_square(x,y)) { return INVALID_SHOT; }
      if (shots[x][y])              { return ALREADY_SHOT; }

      if (!shots[x]) { shots[x] = []; }
      shots[x][y] = true;

      if (ships[x][y] != undefined) {
        shot_result = ships[x][y].got_hit(x,y);
      }
      if (shot_result == Ship.SUNK) {
        ships_sunk++;
        return (ships_sunk >= ships_placed) ? WIN : shot_result;
      }
    }

    // utility
    function check_valid_square(x,y) {
      return x < max_x && x > 0 && y < max_y && y > 0;
    }

    function ship_layout(placement) {
      [x, y, dir, length] = placement;
      squares = []
      for (l=0; l<length; l++) {
        square[l] = [x,y];
        switch(dir) {
          case 'N': y--; break;
          case 'S': y++; break;
          case 'W': x--; break;
          case 'E': x++; break;
        }
      }
      return squares;
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

function displayMessage(msg) {
	
	var block = $("#message");
	block.text(msg).css({ opacity: 1, fontSize: "12pt" });
	block.animate({ opacity: 0, fontSize: "30pt" }, 1000 );
	
}

function Board(id) {
	
	var that = this;
	
	that.fleet = Array(5);
	
	this.startPlacement = function() {
		
	}
	
	var drawFleet = function() {
		
		var boxSize = 25;
		var fleetModel = [5, 4, 3, 3, 2];
		
		var drawBoat = function(el, size) {
			
			var canvas = el;
			var context = canvas.getContext("2d");
			
			context.beginPath(); // begin custom shape
			context.moveTo(0, boxSize * 5);
			context.lineTo(boxSize, boxSize * 5);
			context.lineTo(boxSize, boxSize * (5 - size + 1));
			context.lineTo(boxSize / 2, boxSize * (5 - size));
			context.lineTo(0, boxSize * (5 - size + 1));
			context.lineTo(0, boxSize * 5);
			context.closePath(); // complete custom shape
			
			context.stroke();
			
			context.fillStyle = "gray";
			context.fill();
			
			return el;
		}
		
		for (i in fleetModel) {
			that.fleet.push(
				drawBoat(that.board.find("canvas.boat-" + i)[0], fleetModel[i])
			);
		}
	}
	
	var setListener = function() {
		
		that.board.find("td").click(function() {
			
			console.log($(this).index() - 1, $(this).parents("tr").index());
		});
	}
	
	this.board = $("#board-" + id);
	
	drawFleet();
	
	setListener();
}

function Player(long_name, id) {
	
	var that = this;
	
	this.long_name = long_name;
	this.name = undefined;
	this.board = new Board(id);
	
	this.initPlace = function() {
		displayMessage("Now, " + that.name + ", place your boats");
	}
}

$(function() {
	
	// this code runs after DOM laoded
	
	$("#new-game").click(function() {
		
		var players = [new Player("first", 0), new Player("second", 1)]
		
		for (var p in players) {
			
			players[p].name = prompt("What's the " + players[p].long_name + " player's name?")
			$("#board-" + p + " .player-name").text(players[p].name);
		}
		
		for (var p in players) {
			
			players[p].initPlace();
			
			for (b in players[p].board.fleet) {
				$(players[p].board.fleet[b]).css( { background: "red" } );
			}
			
			
		}
		
		
	})
	
})

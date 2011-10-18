function Board(id) {
	
	var that = this;
	
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
		}
		
		for (i in fleetModel) {
			console.log(that.board, "canvas.boat-" + i)
			drawBoat(that.board.find("canvas.boat-" + i)[0], fleetModel[i])
		}
	}
	
	this.board = $("#board-" + id)
	
	drawFleet();
}

function Player(long_name, id) {
	
	this.long_name = long_name;
	this.name = undefined;
	this.board = new Board(id);
}

$(function() {
	
	// this code runs after DOM laoded
	
	$("#new-game").click(function() {
		
		var players = [new Player("first", 0), new Player("second", 1)]
		
		for (p in players) {
			
			players[p].name = prompt("What's the " + players[p].long_name + " player's name?")
			$("#board-" + p + " .player-name").text(players[p].name);
		}
		
		console.log(players);
	})
	
})

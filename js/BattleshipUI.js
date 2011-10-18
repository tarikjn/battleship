function Board() {
	
	this.startPlacement = function() {
		
	}
}

function Player(long_name) {
	
	this.long_name = long_name;
	this.name = undefined;
	this.board = new Board();
}

$(function() {
	
	// this code runs after DOM laoded
	
	$("#new-game").click(function() {
		
		var players = [new Player("first"), new Player("second")]
		
		for (p in players) {
			
			players[p].name = prompt("What's the " + players[p].long_name + " player's name?")
			$("#board-" + p + " .player-name").text(players[p].name);
		}
		
		console.log(players);
	})
	
})

var board = new Array(3);

function clearBoard() {
	for(i=0; i<3; i++)
		for(j=0;j<3;j++){
			board[i][j] = 0;
		}
}

function autoPlay() {
	console.log("prueba");
	for(i=0; i<3; i++) board[i] = new Array(3);
	
	var cell = document.getElementById('c02');
	cell.innerHTML = "<img src=''/>";		
	clearBoard();
}
autoPlay();
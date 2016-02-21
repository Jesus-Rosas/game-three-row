var board = new Array(3);
var turn;
var cross_selected_x;
var cross_selected_y;

var ball_selected_x;
var ball_selected_y;

function clearCell(x, y) {
	board[i][j] = 0;
	var cell = document.getElementById('c' + x + y);
	cell.innerHTML = "";
}

function clearBoard() {
	for(i=0; i<3; i++)
		for(j=0;j<3;j++){
			clearCell(i, j);
		}
}

function paintCell(x, y) {
	var cell = document.getElementById('c' + x + y);
	cell.innerHTML = "<img src='" + turn + ".gif'>";

	if(turn == "ball"){
		
		board[x][y] = 1;
		ball_selected_x = x;
		ball_selected_y = y;

	}else {
		board[x][y] = 2;
		cross_selected_x = x;
		cross_selected_y = y;
	}

	if(turn == "ball") turn = "cross";
	else turn == "ball";
}


function autoPlay() {
	console.log("prueba");
	for(i=0; i<3; i++) board[i] = new Array(3);

	turn = "cross";
	
	cross_selected_x = 4;
	cross_selected_y = 4;

	ball_selected_x = 4;
	ball_selected_y = 4;

	clearBoard();

	searchMove();
}
autoPlay();

/*
board 
-----------------
vacia = 0
bolas = 1
cruz = 2 

turn 
-----------------
maquina = ball


*/
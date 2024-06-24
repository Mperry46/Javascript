var board =new Array(9);
for (i=0; i < 9; i++){
	board[i] = new Array(9)
}

/*function readSudoku: allowing you to read the table which
has been provided to you (array_number, 1 dimension) and to transfer it to table board with 2 dimensions
Parameter Array
*/
function readSudoku(array_number){
	
	for (var r = 0; r < 9; ++r){
		
		var number=array_number[r].split(' ');
		for (c =0; c<9; c++){	
			board[r][c]=number[c];
		}	
	}

}

/*
Funtion displaySudoku: display the sudoku in the table 9x9 in the HTML format
Return dispaly HTML table
*/
function displaySudoku(){
    var body = document.getElementsByTagName("body")[0];
	var tblBody = document.createElement("tbody");
	//Create table balise in HTML
	var tbl = document.createElement("table");
	
	for (var r = 0; r < board.length; ++r){
		//Create tr balise in HTML
		var row = document.createElement("tr");
		for (var c = 0; c < board[r].length; ++c){
			//Create td balise in HTML
			var cell = document.createElement("td");
			//Create text node
			var cellText = document.createTextNode(board[r][c]);
			cell.appendChild(cellText);
			row.appendChild(cell);
			
		}
		tblBody.appendChild(row);
		
	}
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
	// sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");	
}


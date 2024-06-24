var result = true;
var arrayErrorLine=new Array();
var arrayErrorIndexLine=new Array();
var arrayErrorColumn=new Array();
var arrayErrorIndexColumn=new Array();

/*
Funtion resultSudoku: check every line in the board
Parameter board[] [] 
*/
function checkLineSudoku(board){
	
	var index=0; 
	for (var r = 0; r < board.length; ++r){
		var listLine=new Array();
		for (var c = 0; c < board[r].length; ++c){
			var strLine=board[r][c];
			var listLine.push(strLine);
		}
			
		if(False==checkSudoku(list)){
			result = false;
			arrayErrorLine[index]= listLine;
			arrayErrorIndexLine[index]=r;			
			index++;
		}
	}
		
}

/*
Funtion resultSudoku: check every line in the board
Parameter board[] [] 
*/
function checkColumnSudoku(board){
	
	var index=0; 
	for (var r = 0; r < board.length; ++r){
		var listColumn=new Array();
		for (var c = 0; c < board[r].length; ++c){
			var strColumn=board[c][r];
			var listColumn.push(strColumn);
		}
			
		if(False==checkSudoku(list)){
			result = false;
			arrayErrorColumn[index]= listColumn;
			arrayErrorIndexColumn[index]=r;			
			index++;
		}
	}
		
}

/*
Funtion resultSudoku: display the sudoku result
Return display HTML table
*/
function resultSudoku(){
	document.write(" the Sudoku is correct"); 
	checkLineSudoku(board);
	checkColumnSudoku(board);
	
	if (result=="true"){
		document.write(" the Sudoku is correct"); 
	}else{	
		var body2 = document.getElementsByTagName("body")[0];
		var tblBody2 = document.createElement("tbody");
		//Create table balise in HTML
		var tbl2 = document.createElement("table");
		
		//Fill with line error
		for (var i = 0; i < arrayErrorIndexLine.length; ++i){
			//Create tr balise in HTML
			var row2 = document.createElement("tr");
			for (var c = 0; c < board[r].length; ++c){
				//Create td balise in HTML
				var cell2 = document.createElement("td");
				//Create text node
				var cellText2 = document.createTextNode("Line " i " incorrect"+ arrayErrorLine );
				
				cell2.appendChild(cellText2);
				row2.appendChild(cell2);
				
			}
			tblBody2.appendChild(row2);
			
		}
		
		//Fill with column error
		for (var i = 0; i < arrayErrorIndexColumn.length; ++i){
			//Create tr balise in HTML
			var row2 = document.createElement("tr");
			for (var c = 0; c < board[r].length; ++c){
				//Create td balise in HTML
				var cell2 = document.createElement("td");
				//Create text node
				var cellText2 = document.createTextNode("Line " i " incorrect"+ arrayErrorColumn );
				
				cell2.appendChild(cellText);
				row2.appendChild(cell);
				
			}
			tblBody2.appendChild(row);
			
		}
		
	tbl2.appendChild(tblBody2);
	body2.appendChild(tbl2);
	// sets the border attribute of tbl to '2'
	tbl2.setAttribute("border", "2");	
		
	}
}
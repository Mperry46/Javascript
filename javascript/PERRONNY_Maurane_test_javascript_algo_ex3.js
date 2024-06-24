let arrayErrorLine=new Array();
let arrayErrorIndexLine=new Array();
let arrayErrorColumn=new Array();
let arrayErrorIndexColumn=new Array();


/*
Funtion checkLineSudoku: check every line in the board
Parameter board[][] 
*/
function checkLineSudoku(board){
	
	var index=0; 
	for (var r = 0; r < board.length; ++r){
		var listLine=new Array();
		for (var c = 0; c < board[r].length; ++c){
			strLine=board[r][c];
			listLine.push(strLine);
		}
		
		if(false==checkSudoku(listLine)){
			arrayErrorLine[index]= listLine;
			arrayErrorIndexLine[index]=r+1;			
			index++;
		}
		
	}
		
}

/*
Funtion checkColumnSudoku: check every column in the board
Parameter board[] [] 
*/
function checkColumnSudoku(board){
	
	var index=0; 
	for (var r = 0; r < board.length; ++r){
		var listColumn=new Array();
		for (var c = 0; c < board[r].length; ++c){
			strColumn=board[c][r];
			listColumn.push(strColumn);
		}
		
		if(false==checkSudoku(listColumn)){
			arrayErrorColumn[index]= listColumn;
			arrayErrorIndexColumn[index]=r+1;			
			index++;
		}
		
	}
		
}

/*Funtion checkBoxSudoku: check every box in the board
Parameter board[] [] 
*/
function checkBoxSudoku(board){
	

		
}



/*
Funtion resultSudoku: display the sudoku result
Return display HTML table
*/
function resultSudoku(){

	checkLineSudoku(board);
	checkColumnSudoku(board);
	

	//Fill with line error
	for (var i = 0; i < arrayErrorIndexLine.length; ++i){
		document.write("Line "+ arrayErrorIndexLine[i]+ " incorrect "+ arrayErrorLine[i]); 	
		document.write("<br>");
	}
		
	//Fill with column error
	for (var i = 0; i < arrayErrorIndexColumn.length; ++i){
		document.write("Column "+ arrayErrorIndexColumn[i]+ " incorrect "+ arrayErrorColumn[i]); 	
		document.write("<br>");		

	}
	
	if ((arrayErrorIndexLine === undefined || arrayErrorIndexLine.length == 0)&&
		(arrayErrorIndexColumn === undefined || arrayErrorIndexColumn.length == 0)){
		document.write("The sudoku is good"); 
	}	

}

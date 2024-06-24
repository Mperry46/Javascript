/*Function checkSudoku:Check that all the positions are numbers (from 1 to 9) and all different from each other
Parameter list of 9 number
Return Boolean
*/
function checkSudoku(list){
	var control = ["1","2","3","4","5","6","7","8","9"];
	
	for (var i = 0; i<list.length; ++i){
		for (var j = 0; j<control.length; ++j){		
			
			if (list.at(i)==control.at(j)){
				//remove of list of control is the value if equal
				control = control.filter(value => value !== list.at(i));
				
			}	
		}
		
	}
	
	//check if the list of control is empty
	if (control === undefined || control.length == 0){
		return true;
		
	} else {
		return false;	
	}	
}
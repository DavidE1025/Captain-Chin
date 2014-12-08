var playerLoc = 0;
 
var north = 1 
var south = 2
var east = 3
var west = 4

//Navigation Matrix 
var navigation = [//  N   S   E   W 
             /*0*/ [ -1, -1,  1, -1], 
             /*1*/ [  2,  4,  3,  0], 
             /*2*/ [ -1,  1, -1, -1], 
             /*3*/ [  9, -1, 10,  1], 
             /*4*/ [  1,  5, -1, -1], 
             /*5*/ [  4,  7,  6,  8], 
             /*6*/ [ -1, -1, -1,  5], 
             /*7*/ [  5, -1, -1, -1], 
             /*8*/ [ -1, -1,  5, -1], 
             /*9*/ [ -1,  3, -1, -1], 
            /*10*/ [ -1, -1, 11,  3], 
            /*11*/ [ 12, -1, -1, 10], 
            /*12*/ [ 13, 11, -1, -1], 
            /*13*/ [ -1, 12, 14, -1],
            /*14*/ [ -1,  2, 13, -1]
                 ];
                  
function changeLoc(dir) { 
  var nextLoc = navigation[playerLoc][dir];  
      dispMsg(navigation.description);
  if (nextLoc >= 0) {
    playerLoc = nextLoc; 
  } else { 
    dispMsg("You cannot go that way");
  }
}
    
//onload function  
function location_Onload() {
	dispMsg(Ship.description);
	scrCounter();
	btnDisabler();
	hiddenMap();
}

//Directional Functions

//North Directionals                
function dirNorth(){	  
      changeLoc(north);
			scrCounter();
			btnDisabler();
} 

//South Directionals  
function dirSouth(){	   
      changeLoc(south);
			scrCounter();
			btnDisabler();  	
} 

//East Directionals
function dirEast(){	   
      changeLoc(east);
			scrCounter();
			btnDisabler();  	
}	

//West Directionals  	
function dirWest(){
      changeLoc(west);
			scrCounter();
			btnDisabler();  	
}	

//Command Box Function    
function btnGo_Click(){
	var targetCommand = document.getElementById("txtCommand");
	var userInput = targetCommand.value;
	userInput = userInput.toUpperCase();
		switch(userInput){
		case "N":
      dirNorth();
		break;
		case "S":
      dirSouth();
		break;
		case "W": 
      dirWest(); 
		break;
		case "E": 
      dirEast();
		break;
		case "H": 
      dispMsg("Here is a list of commands that are valid: N to go north, S to go south, E to go east, W to go west, T to take an item, and I to view your inventory.");
		break;
		case "T": 
      takeItem();
		break;
		case "I": 
      dispInventory();
		break;
		default: 
      dispMsg("Command Not Recognized. Click the help button for a list of commands or type H into the command box."); 
	}
}                                           

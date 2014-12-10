
var North = 0
var South = 1
var East = 2
var West = 3 

//onload function  
function location_Onload() {
  loadLocal();
  loadItem();
	scrCounter();
	btnDisabler();
	hiddenMap();
	dispMsg(room[playerLoc].description);
} 

var navi = [//  N   S   E   W
               /*0*/[-1, -1,  1, -1],
               /*1*/[ 2,  4,  3,  0],
               /*2*/[-1,  1, -1, -1],
               /*3*/[ 9, -1,  1, 10],
               /*4*/[ 1,  5, -1, -1],
               /*5*/[ 4,  7,  6,  8],
               /*6*/[-1, -1,  5, -1],
               /*7*/[ 5, -1, -1, -1],
               /*8*/[-1, -1, -1,  5],
               /*9*/[-1,  3, -1, -1],
							/*10*/[-1, -1,  3, 11],
							/*11*/[12, -1, 10, -1],
							/*12*/[13 ,11, -1, -1],
							/*13*/[-1, 12, 14, -1],
							/*14*/[-1,  2, -1, -1],
							];

//Directional Functions
function newLocation(dir){
      var nextLocation = navi[playerLoc][dir];
      if (nextLocation >= 0){
          playerLoc = nextLocation	
          dispMsg(room[playerLoc].description);
          scrCounter();
          btnDisabler(); 
        } else { 
      dispMsg("In Love With the cocos");
        }
      }  
      
//North Directionals                
function dirNorth(){
    newLocation(North);
} 

//South Directionals  
function dirSouth(){	   
    newLocation(South);
} 

//East Directionals
function dirEast(){	   
    newLocation(East);
}	

//West Directionals  	
function dirWest(){
    newLocation(West);
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
      dispMsg("Command Not Recognized. Click the type H into the command box for help."); 
	}
}                                           
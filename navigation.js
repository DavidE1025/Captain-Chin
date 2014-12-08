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
	switch(playerLoc){
		case 1:
			playerLoc = 2;
			scrCounter();
			btnDisabler();  
		break; 
		case 4:
			playerLoc = 1;
			btnDisabler(); 
		break;
		case 5:  
			playerLoc = 4;
			btnDisabler();
		break;
		case 7:
			playerLoc = 5;
			btnDisabler();
		break;
		case 3:   
			playerLoc = 9;
			scrCounter();
			btnDisabler();
		break;
		case 11:   
			playerLoc = 12;
			scrCounter();
			btnDisabler();
		break; 
		case 12:   
			playerLoc = 13;
			scrCounter();
			btnDisabler();
		break; 
		default:
			btnDisabler();   
			dispMsg(error.description);
	}
dispMsg(room[playerLoc].description); 
} 

//South Directionals  
function dirSouth(){	   
	switch(playerLoc){
		case 1: 
			playerLoc = 4;
			scrCounter();
			btnDisabler();
		break;
		case 2: 
			playerLoc = 1;
			btnDisabler();
		break;
		case 4: 
			playerLoc = 5;
			scrCounter();
			btnDisabler(); 
		break;  
		case 5:  
			playerLoc = 7;
			scrCounter();
			btnDisabler();
		break;
		case 9:  
			playerLoc = 3;
			btnDisabler();
		break;
		case 12:   
			playerLoc = 11;
			btnDisabler();
		break; 
		case 13:   
			playerLoc = 12;
			btnDisabler();
		break;
		case 14:   
			playerLoc = 2;
			btnDisabler();
		break;     
		default:  
			btnDisabler();
			dispMsg(error.description);  
	}
dispMsg(room[playerLoc].description);  	
} 

//East Directionals
function dirEast(){	   
	switch(playerLoc) { 
		case 0: 
			playerLoc = 1;
			scrCounter();
			btnDisabler(); 
		break; 
		case 1:
			playerLoc = 3;
			scrCounter(); 
			btnDisabler();
		break;
		case 3:
			playerLoc = 10;
			scrCounter(); 
			btnDisabler();
		break;
		case 10:
			playerLoc = 11;
			scrCounter();
			btnDisabler();
		break;
		case 14:
			playerLoc = 13;
			btnDisabler();
		break;
		case 5:
			playerLoc = 6;
			scrCounter();
			btnDisabler();
		break;
		case 8:
			playerLoc = 5;
			btnDisabler();
		break;
		default:  
			btnDisabler();
			dispMsg(error.description); 	
	}	
dispMsg(room[playerLoc].description);	
}	

//West Directionals  	
function dirWest(){
	switch(playerLoc){
		case 1:
			playerLoc = 0;
			btnDisabler();
		break;
		case 3:   
			playerLoc = 1;
			btnDisabler();
		break;
		case 10:   
			playerLoc = 3;
			btnDisabler();
		break;
		case 11:   
			playerLoc = 10;
			btnDisabler();
		break;
		case 13:   
			playerLoc = 14;
			scrCounter();
			btnDisabler();
		break;
		case 6:
			playerLoc = 5;
			btnDisabler();
		break; 
		case 5:
			playerLoc = 8;
			scrCounter();
			btnDisabler();
		break; 
		default: 
			btnDisabler();
			dispMsg(error.description); 
	}
dispMsg(room[playerLoc].description);		
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

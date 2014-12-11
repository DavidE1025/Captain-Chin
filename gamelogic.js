// Global Player location and Point scoring variables 
var playerLoc = 0; 
var score = 0;

//Global Arrays 
var item = new Array();  
var room = new Array();
var inventory = new Array(); 

//onload function  
function location_Onload(){
  loadLocal();
  loadItem();
	scrCounter();
	btnDisabler();
	hiddenMap();
	dispMsg(room[playerLoc].description);
}   
  
//Displays Text 
function dispMsg(msg) { 
	  var message = document.getElementById("taDisplay");
    if (room[playerLoc].hasItem === true && item[playerLoc].takeItem === false){ 
      message.value = msg + " " + item[playerLoc].description + "\n\n" + message.value;
    } else {  
      message.value = msg + "\n\n" + message.value;
    }
}       

//Displays Score
function dispScore(){ 
	var targetScore = document.getElementById("taScore"); 
	targetScore.value = score; 
} 

//Score Counter  
function scrCounter(){
	if (room[playerLoc].hasVisited === false){
		room[playerLoc].hasVisited = true;
		score += 5 
		dispScore(); 
  }            
}
   //Button Disabler 
    function btnDisabler(){ 
            disNorth();
            disSouth();
            disEast();
            disWest();
    }
    
    function disNorth(){ 
        if (playerLoc === 0 || playerLoc === 2 ||playerLoc === 6 ||playerLoc === 8 ||playerLoc === 9 ||playerLoc === 13 ||playerLoc === 14){
              document.getElementById('btnNorth').disabled = true; 
        } else { 
            document.getElementById('btnNorth').disabled = false; 
          }
    }       
    function disSouth(){ 
        if (playerLoc === 0 ||playerLoc === 3 ||playerLoc === 6 ||playerLoc === 7 ||playerLoc === 8 ||playerLoc === 10 ||playerLoc === 11){
            document.getElementById('btnSouth').disabled = true; 
        } else { 
            document.getElementById('btnSouth').disabled = false; 
          }
    }        
    function disEast(){ 
        if (playerLoc === 2 ||playerLoc === 4 ||playerLoc === 6 ||playerLoc === 7 ||playerLoc === 9 ||playerLoc === 11 ||playerLoc === 12 ||playerLoc === 13||playerLoc === 14){
            document.getElementById('btnEast').disabled = true;
        } else { 
            document.getElementById('btnEast').disabled = false; 
          }
    }
    function disWest(){ 
        if (playerLoc === 0 ||playerLoc === 2 ||playerLoc === 4 ||playerLoc === 7 ||playerLoc === 8 ||playerLoc === 9 ||playerLoc === 12 ||playerLoc === 14){
            document.getElementById('btnWest').disabled = true; 
        } else { 
            document.getElementById('btnWest').disabled = false;
          }
    }
    
function puzzleElement(word){
      switch(word){
          case 10: 
            if (item[7].takeItem === false || item[8].takeItem === false){
              playerLoc = 3; 
              dispMsg("You walk into the cave but it is too dark to see so you have to walk back otuside.");
            }  
          break;
          case 13:
            if (item[9].takeItem === false){
                playerDeath("Zach smothered you in his pile of filth and you suffocated. ");
            }
          break;
          case 0: 
            if (item[14].takeItem === true){ 
                gameFinale();
            }
          break;      
      }
}                      
        

//Take Function
function takeItem() {
  if (room[playerLoc].hasItem === true && item[playerLoc].takeItem === false){ 
		inventory.push(item[playerLoc].name);
		item[playerLoc].takeItem = true;
		room[playerLoc].hasItem = false;
		dispMsg("You took the " + item[playerLoc].name);
		dispMsg(room[playerLoc].description);
		hiddenMap(); 
  } else { 
			dispMsg("There are no items in the area to take.");
      dispMsg(room[playerLoc].description);
    }
}  

//Map Visibility 
function hiddenMap(){
	if (item[2].takeItem === true){ 
    document.getElementById("gameMap").style.visibility = "visible";
	} else { 
    document.getElementById("gameMap").style.visibility = "hidden";
    }  
}

//Inventory Function 
function dispInventory() { 
	var inventoryMsg = "Inventory:" + inventory;
	dispMsg(inventoryMsg);
} 
//A Jump function for the player   
function playerJump(){ 
    switch (playerLoc){
      case 0: 
        playerDeath("You jump off the ship "); 
      break;
      case 4: 
        playerDeath("You jump off the bridge ");
      break;
      case 9: 
        playerDeath("You jump off the peak ");
      break;
      default: 
        dispMsg("Why would I jump here?")
    }
}

function playerDeath(msg){ 
	var message = document.getElementById("taDisplay");
      playerLoc = 15;
      message.value = msg + "Captain Chin has died. Refresh to restart.";
      document.getElementById('btnNorth').disabled = true;
      document.getElementById('btnSouth').disabled = true;
      document.getElementById('btnWest').disabled = true;
      document.getElementById('btnEast').disabled = true;
      
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
		case "J":
      playerJump();
    break;  
		default: 
      dispMsg("Command Not Recognized. Click the type H into the command box for help."); 
    }
}                                                   

//enter key function 
function txtEnter(e){
  if (e.which === 13){
  document.getElementById("btnGo").onclick(); 
  }
}

function gameFinale(){
        dispMsg("Having successfully obtained the worlds best rum you sail off onto the seas. You and your crew drunkingly party until you reach the next island on your adventure. Captain Chin a world renowned pirate who looks some what like a modern day country singer and loves to drink rum. You win!!!");
      document.getElementById('btnNorth').disabled = true;
      document.getElementById('btnSouth').disabled = true;
      document.getElementById('btnWest').disabled = true;
      document.getElementById('btnEast').disabled = true;
      playerLoc = 15;
}       
         

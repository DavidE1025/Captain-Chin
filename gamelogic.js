	// Player location and Point scoring variables 
	  var playerLoc = 0; 
	  var score = 0;
	
	//Items Array 
    var item = new Array();
        
  //Inventory Array 
    var inventory = new Array(); 
     
	// Location Arrays 
    var room = new Array() 

	//Displays Text 
	  function dispMsg(msg) { 
			  var message = document.getElementById("taDisplay");  
				message.value= msg + "\n\n" + message.value;
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
    

    //Take Function
      function takeItem() {
        if (room[playerLoc].hasItem === true && item[playerLoc].takeItem === false){ 
        inventory.push(item[playerLoc].name);
        dispMsg("You took the " + item[playerLoc].name);
        item[playerLoc].takeItem = true;
        hiddenMap(); 
      } else { 
        dispMsg("There are no items in the area to take.");
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
        

    //enter key function 
    function txtEnter(e){
          if (e.which === 13){
              document.getElementById("btnGo").onclick(); 
          }
    }

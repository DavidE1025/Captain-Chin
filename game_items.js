	//Items Array 
    var item = new Array();
        
  //Inventory Array 
    var inventory = new Array(); 
    
	// Player location and Point scoring variables 
	  var playerLoc = 0; 
	  var score = 0;
	   
	// Location Arrays 
    var room = new Array() 

    
	//Display Text 
	  function dispMsg(msg) { 
			  var message = document.getElementById("taDisplay");  
				message.value= msg + "\n\n" + message.value;
		}
			
		//Display Score
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
        if (playerLoc === 2 ||playerLoc === 4 ||playerLoc === 6 ||playerLoc === 7 ||playerLoc === 9 ||playerLoc === 11 ||playerLoc === 12 ||playerLoc === 13){
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
          if (itemMap.takeItem === true){ 
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

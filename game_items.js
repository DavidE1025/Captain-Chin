	//Items Array 
    var item = new Array(); 
        item[2] = itemMap;
        item[7] = itemLantern; 
        item[8] = itemFlint;
        item[9] = itemAncientSword; 
        item[14] = itemRum;
        
  //Inventory Array 
    var inventory = new Array(); 
    
	// Player location and Point scoring variables 
	  var playerLoc = 0; 
	  var score = 0;
	   
	// Location Arrays 
    var room = new Array()
                  room[0] = Ship,
                  room[1] = Beach,
                  room[2] = UpperForest,
                  room[3] = MountainBase,
                  room[4] = Bridge, 
                  room[5] = Mansion, 
                  room[6] = Cellar,
                  room[7] = Bedroom,
                  room[8] = Kitchen,
                  room[9] = MountainSummit,
                  room[10] = Cave,
                  room[11] = Forest,
                  room[12] = TempleEntrance,
                  room[13] = TempleChamber,
                  room[14] = TreasureRoom; 
      
	//Visited Location for scoring use 
	  var visitedLoc_0 = false;
	  var visitedLoc_1 = false;
	  var visitedLoc_2 = false; 
	  var visitedLoc_3 = false;
	  var visitedLoc_4 = false; 
	  var visitedLoc_5 = false;
	  var visitedLoc_6 = false;	  
	  var visitedLoc_7 = false;
	  var visitedLoc_8 = false;
	  var visitedLoc_9 = false;
	  var visitedLoc_10 = false;
	  var visitedLoc_11 = false;
	  var visitedLoc_12 = false;
	  var visitedLoc_13 = false;
	  var visitedLoc_14 = false; 
    
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
          if (visitedLoc_0 === false && playerLoc === 0){ 
              visitedLoc_0 = true; 
              score += 5 
              dispScore(); 
          } 
          if (visitedLoc_1 === false && playerLoc === 1){
              visitedLoc_1 = true; 
              score += 5; 
              dispScore(); 
          }
          if (visitedLoc_2 === false && playerLoc === 2){
              visitedLoc_2 = true; 
              score += 5;  
              dispScore();
          }
          if (visitedLoc_3 === false && playerLoc === 3){ 
              visitedLoc_3 = true; 
              score += 5;
              dispScore();
          }
          if (visitedLoc_4 === false && playerLoc === 4){ 
              visitedLoc_4 = true; 
              score += 5 
              dispScore(); 
          }
          if (visitedLoc_5 === false && playerLoc === 5){ 
              visitedLoc_5 = true; 
              score += 5 
              dispScore(); 
          }
          if (visitedLoc_6 === false && playerLoc === 6){ 
              visitedLoc_6 = true; 
              score += 5 
              dispScore(); 
          }  
           if (visitedLoc_7 === false && playerLoc === 7){ 
              visitedLoc_7 = true; 
              score += 5 
              dispScore(); 
          }
           if (visitedLoc_8 === false && playerLoc === 8){ 
              visitedLoc_8 = true; 
              score += 5 
              dispScore(); 
          }
           if (visitedLoc_9 === false && playerLoc === 9){ 
              visitedLoc_9 = true; 
              score += 5 
              dispScore(); 
          }
          if (visitedLoc_10 === false && playerLoc === 10){ 
              visitedLoc_10 = true; 
              score += 5 
              dispScore(); 
          }
          if (visitedLoc_11 === false && playerLoc === 11){ 
              visitedLoc_11 = true; 
              score += 5 
              dispScore(); 
          }
          if (visitedLoc_12 === false && playerLoc === 12){ 
              visitedLoc_12 = true; 
              score += 5 
              dispScore(); 
          }  
          if (visitedLoc_12 === false && playerLoc === 12){ 
              visitedLoc_12 = true; 
              score += 5 
              dispScore(); 
          } 
          if (visitedLoc_13 === false && playerLoc === 13){ 
              visitedLoc_13 = true; 
              score += 5 
              dispScore(); 
          } 
          if (visitedLoc_14 === false && playerLoc === 14){ 
              visitedLoc_14 = true; 
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
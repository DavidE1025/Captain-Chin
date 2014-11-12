//Map Location functions 
function locShip(){           
dispMsg("You walk onto your ship. You cannot leave without the treasure!");
} 
function locBeach(){
dispMsg("You walk to the beach. There is a mountain to the east, a forest to the north, and a bridge leading to a mansion in the south. ");
}    
function locBridge(){           
dispMsg("You are standing on the bridge. The river underneath the bridge is running fast and to the east. Further to the south is a mansion.");            
}    
function locForest(){           
dispMsg("You walk into the forest. It is dark in every direction and you can hear noises of creatures in the distance.");
}    
function locBase(){           
dispMsg("You arrive at the base of the mountain as it looms over head you can see a path to the north that leads up the mountain and to the east is a cave. The beach is to the west.");
}    
function locSummit(){ 
if (sword === false){   
  dispMsg("You walk up the mountain and arrive at the summit there is an ancient sword on an alter here. You can see the entire island. Past the bridge to the south of the beach you can see a mansion, on the east side of the mountain there is what looks to be a temple surrounded by a forest, and back the west you can see your ship.") 
} else { 
    if (sword === true){ 
dispMsg("You walk up the mountain and arrive at the summit this is where you picked up the sword from. You can see the entire island. Past the bridge to the south of the beach you can see a mansion, on the other side of the mountain there is what looks to be a temple surrounded by a forest, and back the west you can see your ship."); 
    }
  }
}      
function locCave(){           
dispMsg("You head into the cave but it is to dark to continue, you need some source of light.");					  
}    
function locFront(){           
dispMsg("You are in front of the mansion, it is clearly run down with no doors in the doorway and broken windows.");
}    
function locMansion(){           
dispMsg("You walk into the desolated mansion, to the south up some stairs is the bedroom, to the east down the stairs is the cellar, to the north is outside the mansion, and to the west is the kitchen."); 
}    
function locCellar(){           
dispMsg("You walk down the stairs into the cellar. Its hard to really see anything in this darkness."); 
}    
function locBedroom(){
    if (lanturn === false){      
      dispMsg("You head up the stairs into the bedroom. There is a lantern hanging on the bed post and the burnt remains of a mattress.");
    } else { 
      if(lanturn === true) 
dispMsg("You head up the stairs into the bedroom where you picked up the lanturn you see the burnt remains of a mattress.");
      }
}    
function locKitchen(){
    if(flint === false){   
      dispMsg("You walk into the kitchen there is broken glass covering the whole      floor and some flint on the counter.");
    } else { 
      if(flint === true) 
      dispMsg("You walk into the kitchen there is only broken glass on the floor.")
      }
}
function locError(){
dispMsg("Stop, you cannot go that way.");
}
function locHelp(){ 
dispMsg("To move use the directional buttons below or type N, S, E, W, or even n, s, e, w. To take items use type T, and to view your inventory type I or use the inventory button.")
} 

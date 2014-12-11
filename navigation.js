// Global Variables for Navi matrix
var North = 0
var South = 1
var East = 2
var West = 3 
 
// Matrix used for navigation of the game
var navi = [//  N   S   E   W
         /*0*/[-1, -1,  1, -1],
         /*1*/[ 2,  4,  3,  0],
         /*2*/[-1,  1, -1, -1],
         /*3*/[ 9, -1, 10,  1],
         /*4*/[ 1,  5, -1, -1],
         /*5*/[ 4,  7,  6,  8],
         /*6*/[-1, -1,  -1, 5],
         /*7*/[ 5, -1, -1, -1],
         /*8*/[-1, -1,  5, -1],
         /*9*/[-1,  3, -1, -1],
        /*10*/[-1, -1,  11, 3],
        /*11*/[12, -1, -1, 10],
        /*12*/[13 ,11, -1, -1],
        /*13*/[-1, 12, -1, 14],
        /*14*/[-1,  2, -1, -1],
        /*15*/[-1, -1, -1, -1],
        ];
        
//Directional Functions
function newLocation(dir){
      var nextLocation = navi[playerLoc][dir];
      if (nextLocation >= 0){
          playerLoc = nextLocation
          puzzleElement(playerLoc);	
          dispMsg(room[playerLoc].description);
          scrCounter();
          btnDisabler(); 
        } else { 
      dispMsg("You cannot go that way");	
      dispMsg(room[playerLoc].description);
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
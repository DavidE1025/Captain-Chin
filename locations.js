
//locations.js

//Location Blueprint 
function Location(id, name, description, hasItem) {
  //Attributes 
  this.id = id;
  this.name = name;
  this.description  = description;
  this.hasItem = hasItem; 
} 

//Location Prototypes 
 
var location_0 = new Location();
location_0.id = 0;
location_0.name = "Ship";
location_0.description = "You are on your pirate ship. There is a beach to the east and ocean in every other direction."; 
location_0.hasItem = false ;

var location_1 = new Location();
location_1.id = 1;
location_1.name = "Beach";
location_1.description = "You are on the beach. To the north there is a forest, to the south is a bridge leading to a mansion, to the east there is a mountian, and to the west is your ship." 
location_1.hasItem = false; 

var location_2 = new Location();
location_2.id = 2;
location_2.name = "Forest";
location_2.description = "You are in a forest you can hear low growls in the distance. You cannot move any further into the forest in fear of the sounds in the forest. However you do see a map on the ground. To south is the beach."; 
location_2.hasItem = true; 

var location_3 = new Location();
location_3.id = 3;
location_3.name = "Mountain Base";
location_3.description = "You are at the base of a mountain there is a path to the north up the mountain. To the east there is cave and to the west is the beach."; 
location_3.hasItem = false ;

var location_4 = new Location();
location_4.id = 4;
location_4.name = "Bridge";
location_4.description = "You are on a bridge there is a river running underneath the bridge. To the south is a run down mansion and to the north is the beach."; 
location_4.hasItem = false ;

var location_5 = new Location();
location_5.id = 5;
location_5.name = "Mansion";
location_5.description = "You are in the run down mansion. To the east there are stairs leading down to a cellar, to the south there is a bedroom, and to the west is a kitchen."; 
location_5.hasItem = false; 

var location_6 = new Location();
location_6.id = 6;
location_6.name = "Cellar";
location_6.description = "You are in the cellar it is dark and hard to see anything in the darkness. You can only go west back to the center of the mansion."; 
location_6.hasItem = false; 

var location_7 = new Location();
location_7.id = 7;
location_7.name = "Bedroom";
location_7.description = "You are in the bedroom there are the burnt remains of a human carcass and a lantern on the bedpost. You can only move north back to the center of the mansion."; 
location_7.hasItem = true; 

var location_8 = new Location();
location_8.id = 8;
location_8.name = "Kitchen";
location_8.description = "You walk into the kitchen there is broken glass all over the floor and there is flint on the counter. The center of the mansion is to the east."; 
location_8.hasItem = true; 

var location_9 = new Location();
location_9.id = 9;
location_9.name = "Mountain Summit";
location_9.description = "You walk to the top of the mountain you can see the entire island and there is a sword in an alter at the top of the mountain. You can only go south back down the mountain."; 
location_9.hasItem = true; 

var location_10 = new Location();
location_10.id = 10;
location_10.name = "Cave";
location_10.description = "You walk into the cave but it is too dark to proceed any further. The only way out of the cave is to the west."; 
location_10.hasItem = false; 

var location_11 = new Location();
location_11.id = 11;
location_11.name = "Forest 2";
location_11.description = "You emerge out of the cave and are confrinted with a dense forest all around you. To the north you can see a temple and back to the west is the cave."; 
location_11.hasItem = false; 

var location_12 = new Location();
location_12.id = 12;
location_12.name = "Temple Entrance";
location_12.description = " You approach the entrance to the temple and hear low growls from inside the temple. To the south is the forest where you just got out of the cave."; 
location_12.hasItem = false ;

var location_13 = new Location();
location_13.id = 13;
location_13.name = "Temple Chamber";
location_13.description = "You brave the noises and enter the temple and are immediatly confronted by a chimera."; 
location_13.hasItem = false; 

var location_14 = new Location();
location_14.id = 14;
location_14.name = "Treasure Room";
location_14.description = "You walk into the treausre room and see a room full of rum. There is an exit to the south of the room."; 
location_14.hasItem = true; 

//Item Blueprint
function Item( id, name, takeItem){
this.id = id; 
this.name = name;
this.takeItem = takeItem; 
}

//Item Prototypes 

var itemLantern = new Item();
itemLantern.id = 7; 
itemLantern.name = "Lantern";
itemLantern.takeItem = false;

var itemRum = new Item();
itemRum.id = 6; 
itemRum.name = "Rum";
itemRum.takeItem = false;

var itemAncientSword = new Item();
itemAncientSword.id = 9; 
itemAncientSword.name = "Ancient Sword";
itemAncientSword.takeItem = false;

var itemFlint = new Item();
itemFlint.id = 8; 
itemFlint.name = "Flint";
itemFlint.takeItem = false;

var itemMap = new Item();
itemMap.id = 2; 
itemMap.name = "Map";
itemMap.takeItem = false;
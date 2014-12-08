
//Locations 

//Location Blueprint 
function Location(id, name, description, hasItem) {
  //Attributes 
  this.id = id;
  this.name = name;
  this.description  = description;
  this.hasItem = hasItem; 
} 

//Location Prototypes 
 
var Ship = new Location();
Ship.id = 0;
Ship.name = "Ship";
Ship.description = "You are on your pirate ship. There is a beach to the east and ocean in every other direction."; 
Ship.hasItem = false ;

var Beach = new Location();
Beach.id = 1;
Beach.name = "Beach";
Beach.description = "You are on the beach. To the north there is a forest, to the south is a bridge leading to a mansion, to the east there is a mountian, and to the west is your ship." 
Beach.hasItem = false; 

var UpperForest = new Location();
UpperForest.id = 2;
UpperForest.name = "Northern Forest";
UpperForest.description = "You are in a forest you can hear low growls in the distance. You cannot move any further into the forest in fear of the sounds in the forest. However you do see a map on the ground. To south is the beach."; 
UpperForest.hasItem = true; 

var MountainBase = new Location();
MountainBase.id = 3;
MountainBase.name = "Mountain Base";
MountainBase.description = "You are at the base of a mountain there is a path to the north up the mountain. To the east there is cave and to the west is the beach."; 
MountainBase.hasItem = false ;

var Bridge = new Location();
Bridge.id = 4;
Bridge.name = "Bridge";
Bridge.description = "You are on a bridge there is a river running underneath the bridge. To the south is a run down mansion and to the north is the beach."; 
Bridge.hasItem = false ;

var Mansion = new Location();
Mansion.id = 5;
Mansion.name = "Mansion";
Mansion.description = "You are in the run down mansion. To the east there are stairs leading down to a cellar, to the south there is a bedroom, and to the west is a kitchen."; 
Mansion.hasItem = false; 

var Cellar = new Location();
Cellar.id = 6;
Cellar.name = "Cellar";
Cellar.description = "You are in the cellar it is dark and hard to see anything in the darkness. You can only go west back to the center of the mansion."; 
Cellar.hasItem = false; 

var Bedroom = new Location();
Bedroom.id = 7;
Bedroom.name = "Bedroom";
Bedroom.description = "You are in the bedroom there are the burnt remains of a human carcass and a lantern on the bedpost. You can only move north back to the center of the mansion."; 
Bedroom.hasItem = true; 

var Kitchen = new Location();
Kitchen.id = 8;
Kitchen.name = "Kitchen";
Kitchen.description = "You walk into the kitchen there is broken glass all over the floor and there is flint on the counter. The center of the mansion is to the east."; 
Kitchen.hasItem = true; 

var MountainSummit = new Location();
MountainSummit.id = 9;
MountainSummit.name = "Mountain Summit";
MountainSummit.description = "You walk to the top of the mountain you can see the entire island. You can only go south back down the mountain."; 
MountainSummit.hasItem = true; 

var Cave = new Location();
Cave.id = 10;
Cave.name = "Cave";
Cave.description = "You walk into the cave but it is too dark to proceed any further. The only way out of the cave is to the west."; 
Cave.hasItem = false; 

var Forest = new Location();
Forest.id = 11;
Forest.name = "Forest";
Forest.description = "You emerge out of the cave and are confrinted with a dense forest all around you. To the north you can see a temple and back to the west is the cave."; 
Forest.hasItem = false; 

var TempleEntrance = new Location();
TempleEntrance.id = 12;
TempleEntrance.name = "Temple Entrance";
TempleEntrance.description = "You approach the entrance to the temple and hear low growls from inside the temple. To the south is the forest where you just got out of the cave."; 
TempleEntrance.hasItem = false ;

var TempleChamber = new Location();
TempleChamber.id = 13;
TempleChamber.name = "Temple Chamber";
TempleChamber.description = "You brave the noises and enter the temple and are immediatly confronted by a chimera."; 
TempleChamber.hasItem = false; 

var TreasureRoom = new Location();
TreasureRoom.id = 14;
TreasureRoom.name = "Treasure Room";
TreasureRoom.description = "You walk into the treausre room. There is an exit to the south of the room."; 
TreasureRoom.hasItem = true; 

var error = new Location();
error.id = 15;
error.name = "Error Room ";
error.description = "You cannot go that way."; 
TreasureRoom.hasItem = false; 

//Item Blueprint
function Item( id, name, description, takeItem){
this.id = id; 
this.name = name;
this.descrition;
this.takeItem = takeItem; 
}

//Item Prototypes 

var itemLantern = new Item();
itemLantern.id = 7; 
itemLantern.name = "Lantern";
itemLantern.description = "There is a lantern on the bed post."
itemLantern.takeItem = false;

var itemRum = new Item();
itemRum.id = 14; 
itemRum.name = "Rum";
itemRum.description = "The world's best rum."
itemRum.takeItem = false;

var itemAncientSword = new Item();
itemAncientSword.id = 9; 
itemAncientSword.name = "Ancient Sword"
itemAncientSword.description = "There is a sword in an alter."
itemAncientSword.takeItem = false;

var itemFlint = new Item();
itemFlint.id = 8; 
itemFlint.name = "Flint";
itemFlint.description = "There is flint on the countertop." 
itemFlint.takeItem = false;

var itemMap = new Item();
itemMap.id = 2; 
itemMap.name = "Map";
itemMap.description = "There is a map on the ground."
itemMap.takeItem = false;


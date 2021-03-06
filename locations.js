
//Locations 

//Location Blueprint 
function Location(id, name, description, hasItem, hasVisited) {
this.id = id;
this.name = name;
this.description  = description;
this.hasItem = hasItem;
this.hasVisited = hasVisited;  
} 

//Location Prototypes 
function loadLocal() { 
		var Ship = new Location();
		Ship.id = 0;
		Ship.name = "Ship";
		Ship.description = "You are on your pirate ship. There is a beach to the east and ocean in every other direction."; 
		Ship.hasItem = false ;
		Ship.hasVisited = false; 

		var Beach = new Location();
		Beach.id = 1;
		Beach.name = "Beach";
		Beach.description = "You are on the beach. To the north there is a forest, to the south is a bridge leading to a mansion, to the east there is a mountian, and to the west is your ship." 
		Beach.hasItem = false;
		Beach.hasVisited = false;  

		var UpperForest = new Location();
		UpperForest.id = 2;
		UpperForest.name = "Northern Forest";
		UpperForest.description = "You are in a forest you can hear low growls in the distance. You cannot move any further into the forest in fear of the sounds in the forest. To the south is the beach."; 
		UpperForest.hasItem = true;
		UpperForest.hasVisited = false; 

		var MountainBase = new Location();
		MountainBase.id = 3;
		MountainBase.name = "Mountain Base";
		MountainBase.description = "You are at the base of a mountain there is a path to the north up the mountain. To the east there is cave and to the west is the beach."; 
		MountainBase.hasItem = false ;
		MountainBase.hasVisited = false;

		var Bridge = new Location();
		Bridge.id = 4;
		Bridge.name = "Bridge";
		Bridge.description = "You are on a bridge there is a river running underneath the bridge. To the south is a run down mansion and to the north is the beach."; 
		Bridge.hasItem = false ;
		Bridge.hasVisited = false; 

		var Mansion = new Location();
		Mansion.id = 5;
		Mansion.name = "Mansion";
		Mansion.description = "You are in the run down mansion. To the east there are stairs leading down to a cellar, to the south there is a bedroom, and to the west is a kitchen."; 
		Mansion.hasItem = false;
		Mansion.hasVisited = false; 

		var Cellar = new Location();
		Cellar.id = 6;
		Cellar.name = "Cellar";
		Cellar.description = "You are in the cellar it is empty and dusty. There are remants of water in the room."; 
		Cellar.hasItem = false;
		Cellar.hasVisited = false; 

		var Bedroom = new Location();
		Bedroom.id = 7;
		Bedroom.name = "Bedroom";
		Bedroom.description = "You are in the bedroom there are the burnt remains of a human carcass. You can only move north back to the center of the mansion."; 
		Bedroom.hasItem = true;
		Bedroom.hasVisited = false; 

		var Kitchen = new Location();
		Kitchen.id = 8;
		Kitchen.name = "Kitchen";
		Kitchen.description = "You walk into the kitchen there is broken glass all over the floor. The center of the mansion is to the east."; 
		Kitchen.hasItem = true;
		Kitchen.hasVisited = false; 

		var MountainSummit = new Location();
		MountainSummit.id = 9;
		MountainSummit.name = "Mountain Summit";
		MountainSummit.description = "You walk to the top of the mountain you can see the entire island. You can only go south, back down the mountain."; 
		MountainSummit.hasItem = true;
		MountainSummit.hasVisited = false; 

		var Cave = new Location();
		Cave.id = 10;
		Cave.name = "Cave";
		Cave.description = "You walk into the cave with the lamp in hand and can see an oppening to the east of the cave."; 
		Cave.hasItem = false;
		Cave.hasVisited = false;
		
		var Forest = new Location();
		Forest.id = 11;
		Forest.name = "Forest";
		Forest.description = "You emerge out of the cave and are confronted with a dense forest all around you. To the north you can see a temple and back to the west is the cave."; 
		Forest.hasItem = false;
		Forest.hasVisited = false; 

		var TempleEntrance = new Location();
		TempleEntrance.id = 12;
		TempleEntrance.name = "Temple Entrance";
		TempleEntrance.description = "You approach the entrance to the temple and hear low growls from inside the temple. To the south is the forest where you just got out of the cave."; 
		TempleEntrance.hasItem = false ;
		TempleEntrance.hasVisited = false;

		var TempleChamber = new Location();
		TempleChamber.id = 13;
		TempleChamber.name = "Temple Chamber";
		TempleChamber.description = "You brave the noises and enter the temple and are immediately confronted by a chimera with a collar around it's neck. The collar reads Zach and the chamber is messy with almost no room to move. With the ancient sword in hand you kill the beast easily."; 
		TempleChamber.hasItem = false;
		TempleChamber.hasVisited = false;

		var TreasureRoom = new Location();
		TreasureRoom.id = 14;
		TreasureRoom.name = "Treasure Room";
		TreasureRoom.description = "You walk into the treausre roomand the door closes behind you. You can no longer walk out to the east. There appears to be a crack in the wall to the south."; 
		TreasureRoom.hasItem = true;
		TreasureRoom.hasVisited = false; 

		var Death = new Location();
		Death.id = 15;
		Death.name = "Death";
		Death.description = "Game Over"; 
		Death.hasItem = false;
		Death.hasVisited = true;
										 
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
		room[14] = TreasureRoom,
		room[15] = Death;

}
//Item Blueprint


//Item Prototypes 

//Lantern Prototype
function loadItem() {
function Item( id, name, description, takeItem){
this.id = id; 
this.name = name;
this.descrition;
this.takeItem = takeItem; 
}
		//Map Prototype
		var itemMap = new Item();
		itemMap.id = 2; 
		itemMap.name = "Map";
		itemMap.description = "There is a map on the ground.";
		itemMap.takeItem = false;
		
		var itemLantern = new Item();
		itemLantern.id = 7; 
		itemLantern.name = "Lantern";
		itemLantern.description = "There is a lantern on the bed post.";
		itemLantern.takeItem = false;
		
		//Flint Prototype
		var itemFlint = new Item();
		itemFlint.id = 8; 
		itemFlint.name = "Flint";
		itemFlint.description = "There is flint on the countertop."; 
		itemFlint.takeItem = false;

		//Ancient Sword Prototype
		var itemAncientSword = new Item();
		itemAncientSword.id = 9; 
		itemAncientSword.name = "Ancient Sword";
		itemAncientSword.description = "There is a sword in an alter.";
		itemAncientSword.takeItem = false;
		
		//Rum Prototype
		var itemRum = new Item();
    itemRum.id = 14;
    itemRum.name = "The Worlds Best Rum"
    itemRum.description = "The treasure is the world's best rum.";
    itemRum.takeItem = false;

		item[2] = itemMap,
		item[7] = itemLantern, 
		item[8] = itemFlint,
		item[9] = itemAncientSword, 
    item[14] = itemRum
}
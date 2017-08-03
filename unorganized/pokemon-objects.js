// Allows user input
var prompt = require('prompt-sync')();

// Creates a pokemon function
function Pokemon(name, type, hp, atk, def, legendary){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.legendary = legendary;
}

// Nested array that creates a class using objects
var roster = [new Pokemon("Articuno", "Ice & Flying", 90, 85, 100, true),
new Pokemon("Zapdos", "Electric & Flying", 90, 90, 85, true), 
new Pokemon("Moltres", "Fire & Flying", 90, 100, 90, true),
]


// Prints roster to the console.
function printRoster() {
    for (var i = 0; i<roster.length; i++){
        return roster.length
        //console.log(roster[i]);
    }
}
console.log(printRoster());

// Subtracts 10 HP from all pokemon
function pokemonAttacked() {
    for (var i = 0; i<roster.length; i++){
        roster[i].hp -= 10;
    }
    return roster;
    //console.log(pokemonAttacked);
}
console.log(pokemonAttacked);
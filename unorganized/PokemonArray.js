var myPokemonRoster = ["eevee", "flareon", "vaporeon", "raichu", "snorlax"];
var firstToFight = (myPokemonRoster[0]);
var secondToFight = (myPokemonRoster[1]);
var popped = myPokemonRoster.pop();
console.log("The roster as it stands is", myPokemonRoster);
console.log("Unfortunately,", popped, "has been removed due to excess weight.");
console.log("As of now, there are", myPokemonRoster.length, "Pokemon.");
myPokemonRoster.pop();
myPokemonRoster.push("abra","kadabra");
console.log("Raichu was causing some problems too, so now we're left with", myPokemonRoster);
myPokemonRoster.pop();
console.log("...which leaves the total now at", myPokemonRoster.length)

for (var i = 0; i < 4; i++){
    console.log(myPokemonRoster[i]);
}

myPokemonRoster.reverse(); //Method #1
for (var i = 0; i < 4; i++){
    console.log(myPokemonRoster[i]);
}

for (var i = 4; i > 0; i--){ //Method #2
    console.log(myPokemonRoster[i]);
}










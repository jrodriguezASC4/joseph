var charizard = {
    "attack" : "Blaze",
    "HP" : 266 , 
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};

console.log("This Charizard has an attack called " + charizard.attack + ", and " + charizard.HP + " health.");

var randomDmg = Math.floor(Math.random() * 40) + 3;
var newHP = charizard.HP - randomDmg;

console.log("It's raining, so the Charizard's health has decreased from " + charizard.HP + " to " + newHP);




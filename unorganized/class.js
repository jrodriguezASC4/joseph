var charizard = {
    "HP": 266,
    "Level" : 32
}

var blastoise = {
    "HP" : 150,
    "Level" : 55
}

function Superhero(realName){
    this.realName = realName;
}

var superman = new Superhero("Clark Kent");

console.log(superman.realName)

function Pokemon(hp, level){
    this.hp = hp;
    this.level = level;
}

var squirtle = new Pokemon(30, 10);

console.log(squirtle.hp);
console.log(squirtle.level);
console.log(squirtle.hp + squirtle.level + "" + squirtle.hp + "" + squirtle.level);


// Creates an object Car with the properties color and weight.
function Car(color, weight) {
    this.color = color;
    this.weight = weight;
}

var jeep = new Car("black", 4);

// Outputs the information in a sentence.
console.log("This Jeep is " + jeep.color + " and weighs " + jeep.weight + " pounds.");





// Creates an object Player with the properties team,
// position, and number.
function Player (team, position, number) {
    this.team = team;
    this.sayTeam = function () {
        console.log("My team is " + this.team )
    }
    this.position = position;
    this.sayPosition = function () {
        console.log("My number is " + this.position)
    }
    this.number = number;
    this.sayNumber = function () {
        console.log("My number is " + this.number )
    }
}

// Creates a new variable using Object properties
var jamesHarden = new Player("Rockets", "Point Guard", 13);

//Outputs the player properties in a sentence.
console.log("James Harden plays for the " + jamesHarden.team + 
            ", in the position " + jamesHarden.position + 
            ", and is number " + jamesHarden.number);

print jamesHarden.sayTeam;
print jamesHarden.sayPosition;
print jamesHarden.sayNumber;





// Creates an object Person with the properties ethnicity,
// race, and nationality
function Person(ethnicity, race, nationality) {
    this.ethnicity = ethnicity;
    this.nationality = nationality;
    this.race = race;
}

// Creates a new variable Jordan using Object properties
var jordan = new Person("Asian", "African-American", "American");

// Turns the info from variable jordan to a sentence.
console.log("Jordan has an " + jordan.ethnicity + " ethnicity, an " + jordan.nationality + " nationality, and an " + jordan.race + " race.");

function Nintendo(brand, color, size) {
    this.brand = brand;
    this.color = color;
    this.size = size;
}

var my3DS = new Nintendo("Nintendo 3DS", "Galaxy Blue", "XL")



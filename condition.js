// if ( CONDITION ){
         // the code that gets executed when condition is true
// }else{
         // the code that gets executed when condition is false
//}

var level = 5;

if (level % 2 == 0){
    console.log("You're on an even level!");
}else{
    console.log("You're on an odd level!");
}

var num = 10;

if ( num % 2 != 0 ){
    console.log("number is odd");
} else {
    console.log("number is even");
}

var name = "Elijah";

if (name === "Elijah") {
    console.log("This is Elijah");
} else if (name === "Taseen") {
    console.log("I am late to school");
    }else if (name === "Will") {
        console.log("Who is that guy?");
    } else {
        console.log("You didn't make it...sorry.");
    }
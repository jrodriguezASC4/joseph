// Generates one random letter
function randLetter() {
  var lowAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var result = Math.floor(Math.random() * lowAlphabet.length);
  return lowAlphabet[result];
}
console.log(randLetter());


// Generates one random "word" (string of random letters with max length 11)
function randWord() {
    var x = Math.floor(Math.random() * 11) + 1;
    var result = "";
    for (var i=0; i<x; i++) {
        result += randLetter();
    }
    return result;
}
console.log(randWord());



function randSentence() {
    var uppAlphabet = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var result = ""
    var randLetter = Math.floor(Math.random() * uppAlphabet.length);
    var y = Math.floor(Math.random() * 11) + 1
    for (var i=0; i<y; i++) {
        result += result + randLetter + randWord();
    }
    return result;
}
console.log(randSentence());



var firstPokemon = ["Charmeleon", ]
var choices = ["Rock", "Paper", "Scissors"];
var randomChoice = Math.floor(Math.random * 3);
var cpuChoice = choices[randomChoice];

$( document ).ready(function() {
    $('#name').change(function(){
        $('#message').html('Welcome, ' + $('#name').val() + ".");
        // $('#button').html('test')
    });

$( "#rock" ).click(function() {
    var rock = true;
  console.log("rock");
});

$( "#paper" ).click(function() {
    var paper = true;
  console.log("paper" );
});

$( "#scissors" ).click(function() {
    var scissors = true;
  console.log("scissors");
});



});

// document.getElementById("rock").click = function(){
//     $('#message').html("You chose rock.");
// };

// document.getElementById("paper").click = function(){
//     $('#message').append("<p>You chose paper.</p>");
// };

// document.getElementById("scissors").click = function(){
//     $('#message').html("You chose scissors.");
// };


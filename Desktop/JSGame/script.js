
confirm("Are you ready to play?");
var age = prompt("What's your age?");

if(age <13 ) {
   window.alert("You are allowed to play but I take no responsibility.");
   } else {
   confirm("Play on!");
   }

window.alert("You are at a Beyonce' concert, when you hear these lyrics 'All the single ladies!'");
window.alert("Suddenly, Beyonce' comes over to you and invites you onto the stage with her.");


var userAnswer = prompt("Do you want to go on stage with Beyonce'?");

if(userAnswer === "yes") {
   window.alert("You and Beyonce' start performing the dance routine for 'Single Ladies' and the crowd goes wild!");
   } else {
   window.alert("Beyonce' says, 'I guess she is not a single lady.'");
   }

var feedback = prompt("Did you enjoy my game? Please rate it on a scale of 1 - 10");

if(feedback >8) {
   window.alert("Thank you for playing! I'll see you at the next Beyonce concert!");
} else {
   window.alert("I'm sorry to hear that. I'll keep practicing.");
   }
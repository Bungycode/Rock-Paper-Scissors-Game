// Declare global variables
// Declare the variables that contain the results of each game played.
var wins = '0';
var loss = '0';
var ties = '0';

// Create a function to create a random number using Math.floor and Math.random for the computer.
// I put them in the function second row,

//Declare a function to be invoked to start the game.
function letsPlay() {
    userChoice = confirm('Do you want to play Rock, Paper, Scissors?');
        if (!userChoice) {
            alert("No? That's too bad :(");
            return; // Use return so the function stops and does not finish.
        }
    userChoice = prompt("Choose Rock, Paper or Scissors");
    if (!userChoice) {
        alert("Aww! I thought you wanted to play! :(");
        return; // Use return so the function stops and does not finish.
    }
    userChoice = userChoice.toLowerCase(); // Changed the answer that the user gives to lower cased to satisfy conditional requirements.
    
    // This is where I created the Computer's choice.
    var gameValues = ["Rock", "Paper", "Scissors"];
    var computerChoice = Math.floor(Math.random() * gameValues.length);
    computerChoice = gameValues[computerChoice];
    computerChoice = computerChoice.toLowerCase();
    console.log("The Computer chose", computerChoice); // Console logged the computer's choice to show generation of random selection.
    
    // Created an if statement that starts with the user choosing one of these selections for their answer to initiate the if statement. Subsequent conditions are nested inside this one, which means they will only potentially take place if this first if statement condition is satisfied. Any other choice will end the game.
    if (
        (userChoice === "rock") || (userChoice === 'paper') || (userChoice === 'scissors') ||
        (userChoice === "r") || (userChoice === "p") || (userChoice === 's') 
        ) { 
        alert("let's see who wins!")
        // Conditions that result in the user losing if these are met.
        if (
            (userChoice === 'rock' && computerChoice === "paper") || (userChoice === 'paper' && computerChoice === 'scissors') 
            || (userChoice === "scissors" && computerChoice === 'rock') ||
            (userChoice === "r" && computerChoice === "paper") || (userChoice === "p" && computerChoice === 'scissors') 
            || (userChoice === 's' && computerChoice === 'rock')
        ) {
            loss++;
            alert("You Lose! ;_;");
            // else if block to signify a tie if any of these conditions are met.
        } else if (
            userChoice === computerChoice || (userChoice === "r" && computerChoice === "rock") ||
            (userChoice === "s" && computerChoice === 'scissors') ||
            (userChoice === 'p' && computerChoice === "paper")
            ) {
            ties++;
            alert("It's a tie! @.@");
            // If any other selection is made it results in a win for the user.
        }else {
            wins++
            alert("You win! :D");
        }
    }
    // Triggers an alert in the browser of the stats of the game
    window.alert('Stats:' + '\n Wins: ' + wins + '\n losses: ' + loss + '\n ties ' + ties)
    
      // If the player makes it all the way through the code to this point, it will ask the player if they wish to play again.
    var playAgain = window.confirm("Press OK to continue."); 
    // If I choose cancel then it will return, else it will run the function again.
    if (!playAgain) {
        return;
    } else {
        letsPlay();
    }
}
// This will display the win loss stats before the game starts if I leave it there. It does that because it is outside of the function.
//window.alert('stats' + '\nWins: ' + wins + '\n losses: ' + loss + '\n ties ' + ties)

// Used a button element with an onclick event handler with the function as it's value and put it in the html body. This is to call the function manually.

// Place this function call outside the function to make the game play without pressing a button
letsPlay();
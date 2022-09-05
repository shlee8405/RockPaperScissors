

let userWonRound = 0;
let computerWonRound = 0;

// Get computer's choice
function getComputerChoice() {
    var computerChoices = ['rock', 'paper', 'scissors'];
    var randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomChoice;
}

//Get user's choice. If clicked wrong, return null.
function userChoice(e) {
    const choice = e.path[0].classList.value;
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors'){
        return choice;
    }
    return;
}

//Starts game. Ommits no choice.
function gameStart(e) {
    var user = userChoice(e);
    var computer = getComputerChoice();
    var header = document.getElementsByClassName("gameResult")[0];
    if (!user){
        console.log("no choice");
        header.textContent = "Don't avoid your Destiny!";
    }
    else {
        gameLogic(user, computer);
    }    
}

//Base game logit.
function gameLogic(user, computer) {
    var header = document.getElementsByClassName("gameResult")[0];
    if (computer == 'rock') {
        if (user == 'rock') {
            console.log("It's a tie");
            header.textContent = "It's a Tie!";
        }
        if (user =='paper'){
            console.log('You win! Paper beats rock!');
            userWin();
        }
        if (user =='scissors'){
            console.log('You lose. Rock beats scissors');
            computerWin();
        }
    }
    if (computer == 'paper') {
        if (user == 'rock') {
            console.log("You lose. Paper beats rock.");
            computerWin();
        }
        if (user =='paper'){
            console.log("It's a tie!");
            header.textContent = "It's a Tie!";
        }
        if (user =='scissors'){
            console.log('You win! Scissors beat paper!');
            userWin();
        }
    }
    if (computer == 'scissors') {
        if (user == 'rock'){
            console.log("You win! Rock beats scissors");
            userWin();
        }
        if (user =='paper'){
            console.log('You lose. Scissors beat paper.');
            computerWin();
        }
        if (user =='scissors'){
            console.log("It's a tie.");
            header.textContent = "It's a Tie!";
        }
    }
}


//User wins round. Adds to counter.
function userWin() {
    var userScore = document.getElementsByClassName("userScore")[0];
    var header = document.getElementsByClassName("gameResult")[0];
    userWonRound += 1;
    userScore.textContent = "User Score : " + userWonRound;


    header.textContent = "You Won!";

    if (userWonRound == 5) {
        alert("You WON!")
    }

}
//Computer wins round. Adds to counter.
function computerWin() {
    var computerScore = document.getElementsByClassName("computerScore")[0];
    var header = document.getElementsByClassName("gameResult")[0];
    computerWonRound += 1;
    computerScore.textContent ="Computer Score :" + computerWonRound;

    header.textContent = "Computer Won!";


    if (computerWonRound == 5) {
        alert("You LOST!")
    }
}

var id = null;
function myMove() {
  var elem = document.getElementById("screenLock");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + '%';
      elem.style.left = pos + '%';
    }
  }
}


myMove();
window.addEventListener('click', gameStart);


/*
const btns = document.querySelectorAll('button');

function userChoice(e) {
    console.log(this.classList.value);
}

btns.forEach(button => button.addEventListener('click', userChoice));  */

/*
function gameFunction() {
    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice();

    console.log(computerChoice + " cs");
    console.log(userChoice + " uc");
    if (computerChoice == 'Rock') {
        if (userChoice == 'Rock') {
            return ("It's a tie");
        }
        if (userChoice =='Paper'){
            return ('You win! Paper beats rock!');
        }
        if (userChoice =='Scissors'){
            return ('You lose. Rock beats scissors');
        }
    }

    if (computerChoice == 'Paper') {
        if (userChoice == 'Rock') {
            return ("You lose. Paper beats rock.");
        }
        if (userChoice =='Paper'){
            return ("It's a tie!");
        }
        if (userChoice =='Scissors'){
            return ('You win! Scissors beat paper!');
        }
    }

    if (computerChoice == 'Scissors') {
        if (userChoice == 'Rock'){
            return ("You win! Rock beats scissors");
        }
        if (userChoice =='Paper'){
            return ('You lose. Scissors beat paper.');
        }
        if (userChoice =='Scissors'){
            return ("It's a tie.");
        }
    }

}

*/
//console.log(gameFunction());

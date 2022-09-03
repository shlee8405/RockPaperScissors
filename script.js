console.log("hello world");

function getComputerChoice() {
    var myChoice = ['Rock', 'Paper', 'Scissors'];
    var randomChoice = myChoice[Math.floor(Math.random() * myChoice.length)];
    return randomChoice;
}

function getUserChoice() {
    var userChoice = prompt();
    return userChoice;
}

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

console.log(gameFunction());

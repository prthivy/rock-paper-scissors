let humanScore = 0;
let computerScore = 0;
let round_no = 1;

function getComputerChoice() { 
    let computerChoice = (Math.random() * 3); //rng [0,3)
    computerChoice = Math.floor(computerChoice); //deci -> int return
    if (computerChoice == 0) {
        computerChoice = "rock";
    }
    
    else if (computerChoice == 1) {
        computerChoice = "paper";
    }

    else if (computerChoice == 2) {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("choose between rock, paper and scissors!"); //gets human choice
    humanChoice = humanChoice.toLowerCase(); //account for inconsistent casing
    return humanChoice; 
}

//scoring logic
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`computer chose: ${computerChoice}`);
        console.log("round won!");
        humanScore += 1;
        console.log(`you: ${humanScore}, computer: ${computerScore}.`);

    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`computer chose: ${computerChoice}`);
        console.log("round lost..");
        computerScore += 1;
        console.log(`you: ${humanScore}, computer: ${computerScore}.`);
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`computer chose: ${computerChoice}`);
        console.log("round won!");
        humanScore += 1;
        console.log(`you: ${humanScore}, computer: ${computerScore}.`);
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`computer chose: ${computerChoice}`);
        console.log("round lost..");
        computerScore += 1;
        console.log(`you: ${humanScore}, computer: ${computerScore}.`);
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`computer chose: ${computerChoice}`);
        console.log("round won!");
        humanScore += 1;
        console.log(`you: ${humanScore}, computer: ${computerScore}.`);
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`computer chose: ${computerChoice}`);
        console.log("round lost..");
        computerScore += 1;
        console.log(`you: ${humanScore}, computer: ${computerScore}.`);
    }

    else if (computerChoice == humanChoice) {
        console.log(`computer chose: ${computerChoice}`);
        console.log("round tied."); 
        console.log(`you: ${humanScore}, computer: ${computerScore}.`);
    }
}

while (humanScore < 3 && computerScore < 3) {  //calls the playRound function until either score reaches 3
    console.log(`round ${round_no}: `)
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let playGame = playRound(humanChoice, computerChoice);
    round_no += 1; 
}

//displays winner message
if (humanScore == 3) {
    console.log("you win the game!")
}
else if (computerScore == 3) {
    console.log("computer wins the game!")
}
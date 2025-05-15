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

//personal walkthrough

//1. logic to get computer choice:
    // 1.1 a function which when called, creates a random choice between rock paper scissor
    // 1.2 a variable to hold the rng logic
    // 1.3 assign rng to the variable  between 0 and 1
    // 1.4 multiply this with 3 to get random number between 0 and 3
    // 1.5 floor this to get 0, 1 or 2
    // 1.6 assign the 3 numbers to 3 choices
    // 1.7 specify return value as the variable
    // 1.x when this function is called, it'll return rock paper or scissor

//2. logic to get human choice:
    // 2.1 a function which when called, asks user for rock, paper or scissors
    // 2.2 a variable to hold this string
    // 2.3 modify string to only be lowercase, to resolve inconsistent casing
    // 2.4 specify return value as the variable
    // 2.x when this function is called, it'll return user choice in lowercase

//3. logic for scoring the game:
    // 3.1 a function which when called, will do string comparisons to see who won
    // 3.2 this function will have two parameters, each being a function reference (callback function) to the computer and human choice functions
    // 3.3 when this function is called, it'll call both human and computer choice functions and get their return values as human and computer choices
    // 3.4 this function will then compare both return values and decide who wins
    // 3.5 this function will then increase the winner's score by 1, and will therefore need two global variables for human and computer scores resp. for ties it'll do nothing.
    // 3.x this function has no return value
    
//4. logic for playing multiple rounds:
    // 4.1 the game needs to be played until either score reaches 3 points. 
    // 4.2 so we need a while loop which will keep calling scoring function with callback functions to human and computer choice as parameters.
    // 4.x this function runs until either score reaches 3

//5. simple conditional that checks which out of either scores is 3 and declares it the winner
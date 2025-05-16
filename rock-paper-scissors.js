function getComputerChoice() { 
    let computerChoice = (Math.random() * 3); //rng [0,3)
    computerChoice = Math.floor(computerChoice); //deci -> int return
    if (computerChoice == 0) {
        return "rock";
    }
    
    else if (computerChoice == 1) {
        return "paper";
    }

    else if (computerChoice == 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("choose between rock, paper and scissors!"); //gets human choice
    if (humanChoice === null) { //define cancel button behaviour
        return;
    }
    humanChoice = humanChoice.toLowerCase(); //account for inconsistent casing

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") { //handle invalid choice resolution
        humanChoice = prompt("invalid choice. please select either rock, paper or scissors:");
            if (humanChoice === null) { 
                return;
    }
        humanChoice = humanChoice.toLowerCase();
    } 
    return humanChoice; 
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let round_no = 1;

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

    while (round_no < 6) {  //calls the playRound function until either score reaches 3
        console.log(`round ${round_no}: `)
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        round_no += 1; 
    }

    //display winner message
    if (humanScore > computerScore) {
        console.log("you win the game!")
    }
    else if (computerScore > humanScore) {
        console.log("computer wins the game..")
    }
    else if (computerScore == humanScore) {
        console.log("game tied.")
    }

}

playGame();


//revision 

// A. build logic to generate computer response
    // A0. function when called, sends a random string arg
    // A1. use function that generates random numbers, to get 3 random ints
    // A2. assign each num a string out of rock, paper and scissors
    // A3. store this string in a variable and set the variable as the return value 

// B. build logic to collect user response
    // B0. function when called, sends user entered valid string in lowercase
    // B1. use input field that collects user input
    // B2. resolve cases where input is invalid
    // B3. resolve inconsistent casing and store this string in a variable, setting it as the return value

// C. build logic to decide winner
    // C0. function that takes computer and human stored strings and follows scoring logic for 5 rounds
    // C1. a conditional that checks the two values to determine winner, a score variable for the same
    // C2. a wrapping while loop that runs for 5 rounds, a round number variable to count the same
    // C3. both the scoring and round number variables inititated outside the wrapper but inside the scoring function



// personal walkthrough

// 1. logic to get computer choice:
//     1.1 a function which when called, creates a random choice between rock paper scissor
//     1.2 declare a variable to hold the rng logic
//     1.2.1 create the rng logic which creates random num between 0 and 1
//     1.2.1.1 multiply this value by 3
//     1.2.2 floor this value to get 0, 1 or 2
//     1.3 assign the 3 numbers to 3 choices
//     1.4 specify the return value to be the variable
//     1.x when this function is called, it'll return rock paper or scissors

// 2. logic to get human choice:
//     2.1 a function which when called, asks user for rock, paper or scissors
//     2.1.1 we need to define behaviour if cancel is clicked
//     2.2 we need to handle invalid inputs. so we write logic that checks if the input is not rock or not paper or not scissors
//     2.2.1 we need to keep running this check until the input is valid, so we wrap it around a while loop, and also contain the cancel-click behaviour code
//     2.3 a variable to hold the valid string
//     2.4 modify string to only be lowercase, to resolve inconsistent casing
//     2.5 specify return value as the variable
//     2.x when this function is called, it'll return user choice in lowercase

// 3. logic for scoring the game:
//     3.1 a function which when called, will do string comparisons to determine the winner
//     3.2 this function will have two parameters, each being a function reference (callback function) to the computer and human choice functions
//     3.2c this function will have two parameter, each being either rock, paper or scissors
//     3.3 when this function is called, it'll pass either rock, paper or scissors for each parameter
//     3.4 this function will then compare both return values and decide who wins
//     3.5 this function will then increase the winner's score by 1, and will therefore need two global variables for human and computer scores resp. for ties it'll do nothing.
//     3.x this function has no return value
    
// 4. logic for playing multiple rounds:
//     4.1 the game needs to be played for 5 roundss. 
//     4.2 so we need a while loop which keep calling the playround function until round number is 5.
//     4.3 we can wrap the entire scoring logic along with the round number and computer score, human score variables into a function 
//     4.3.1 declare this function with no params and indent the entire logic for scoring and declaring result
//     4.x when this function is called, it'll run for 5 rounds and declare the result
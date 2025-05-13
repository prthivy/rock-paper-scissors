let humanScore = 0;
let computerScore = 0;

function getComputerChoice(computer) { 
    computer = (Math.random() * 3); //rng [0,3)
    return Math.floor(computer); //deci -> int return
}

let computerChoice = getComputerChoice(); //store rng choice (num)

function getHumanChoice(human) {
    human = prompt("choose between rock, paper and scissors!"); //human choice
    human = human.toLowerCase(); //account for inconsistent casing
    //convert human choice to numb for comp with computer choice
    if(human == "rock") {
        human = 0;
    }
    else if (human == "paper") {
        human = 1;
    }

    else if (human == "scissors") {
        human = 2; 
    }
    return human; 
}

let humanChoice = getHumanChoice(); //store human choice (num)

function playRound(humanChoice, computerChoice) { //scoring logic
    if (humanChoice > computerChoice) {
        console.log("yew win!");
        humanScore =+ 1;
    }
    else if (computerChoice > humanChoice) {
        console.log("yew lews..");
        computerScore =+ 1;
    }
    else if (computerChoice == humanChoice) {
        console.log("thai!"); 
    }
}

playRound(humanChoice, computerChoice);
console.log(`human score is ${humanScore} points`);
console.log(`computer score is ${computerScore} points`);
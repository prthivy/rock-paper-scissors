function getComputerChoice(computer) { 
    computer = (Math.random() * 3); //rng [0,3)
    return Math.floor(computer); //deci -> int return
}

let actualComputerChoice = getComputerChoice(); //rng returns

function getHumanChoice(human) {
    human = prompt("choose between rock, paper and scissors!"); //user choice
    //convert usr choice to number for comparison with com choice
    if(human == "rock") {
        human = 0;
    }
    else if (hum == "paper") {
        human = 1;
    }

    else if (human == "scissors") {
        human = 2; 
    }
    return human; 
}

let actualHumanChoice = getHumanChoice();

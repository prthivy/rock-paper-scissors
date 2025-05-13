function getComputerChoice(computer) { 
    computer = (Math.random() * 3); //rng [0,3)
    return Math.floor(computer); //deci -> int return
}

let actualComputerChoice = getComputerChoice(); //store rng choice (num)

function getHumanChoice(human) {
    human = prompt("choose between rock, paper and scissors!"); //human choice
    //convert human choice to numb for comp with computer choice
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

let actualHumanChoice = getHumanChoice(); //store human choice (num)

actualComputerChoice == actualHumanChoice; //compare
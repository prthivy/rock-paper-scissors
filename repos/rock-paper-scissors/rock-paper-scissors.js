function getComChoice(com) { 
    com = (Math.random() * 3); //rng [0,3)
    return Math.floor(com); //deci -> int return
}

getComChoice(); //rng returns


let usr;
usr = prompt("choose between rock, paper and scissors!") //user choice
console.log(usr);

if(usr == "rock") {
    usr = 0;
}
else if (usr == "paper") {
    usr = 1;

}

else if (usr == "scissors") {
    usr = 2; 
}
console.log(usr);

let usr;

function getComChoice(com) { 
    com = (Math.random() * 3); //rng [0,3)
    return Math.floor(com); //deci -> int return
}

getComChoice(); //rng returns


usr = prompt("choose between rock, paper and scissors!") //user choice
console.log(usr);

if(usr == rock) {
    usr = 0;
}
elif (usr == paper) {
    usr = 1;

}

elif (usr == scissors) {
    usr = 2; 
}

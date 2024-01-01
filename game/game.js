lists = document.querySelector("ul")
input = document.querySelector("input")
btn = document.querySelector("button")

btn.addEventListener("click", () =>  {
    const text = input.value;
    input.value = '';
    const lis = document.createElement("li");
    const spn = document.createElement("span");
    const btnf = document.createElement("button");
    lis.appendChild(spn);
    spn.textContent = text;
    lis.appendChild(btnf);
    btnf.textContent = "Delete"
    lists.appendChild(lis)


    btnf.addEventListener("click", () => {
        lists.removeChild(lis) 
    })
    input.focus();
    
})






/**function getComputerChoice(){
    let num = Math.floor(Math.random()*3)
    if (num===0){
        return "rock";
    } else if (num===1) {
        return "paper";
    } else {
       return "scissors"; 
    }
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection){
        return "Draw!!! Try Again";
    } else if (computerSelection==="rock" && playerSelection=== "scissors"){
        computerScore++;
        return "You Picked Scissors and Computer picked Rock. You Lost Try Again";
    } else if (computerSelection==="scissors"&& playerSelection === "paper" ){
        computerScore++;
        return "You picked paper and Computer picked Scissors. You Lost!!!";
        
    } else if (computerSelection==="paper" && playerSelection === "rock"){
        computerScore++;
        return "You picked rock and Computer picked paper. You Lost";
        
    } else if (playerSelection==="rock" && computerSelection ==="scissors"){
        playerScore++;
        return "You picked Rock and computer picked scissors. You Won!!!";
    
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return "You picked Scissors and computer picked paper. You Won!!!"
    } else {
        playerScore++;
        return "You picked paper and computer picked rock. You Won!!!"
    }
}

function game() {
    for (let round=0;round<=5;round++){
        playRound()
    }
    if (computerScore===playerScore){
        console.log("Draw Game. Try again");
    } else if (computerScore>playerScore){
        console.log("You lose!!!");
    } else {
        console.log("You won!!!");
    }
}
let pick = window.prompt("Make your choice! rock, paper or scissors");
let playerSelection = pick.toLowerCase();
let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;
console.log(playRound(playerSelection,computerSelection));
console.log(playerScore);
console.log(computerScore);
console.log(game());**/

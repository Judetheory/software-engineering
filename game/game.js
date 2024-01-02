let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let human = document.getElementById("human")
let computer = document.getElementById("computer")
let comment = document.querySelector(".comment")

function computerGuess() {
   let guess = Math.floor(Math.random() * 3)
   if (guess === 0) {
      return "rock"
   } else if (guess === 1){
      return "paper"
   } else {
      return "scissors"
   }
}

let humanScore = 0
let computerScore = 0



rock.addEventListener("click", () => {
   if (computerGuess() === "rock"){
      comment.textContent = "Same rock, try again"
   } else if (computerGuess() === "paper"){
      comment.textContent = "You Lose!"
      computerScore++;
   } else if (computerGuess() === "scissors"){
      comment.textContent = "You Win"
      humanScore++
   } else {
      return comment.textContent = "Play Again"
   }
   
   computer.textContent = computerScore
   human.textContent= humanScore

   if (humanScore < 5 && computerScore === 5) {
      comment.textContent = "GAMEOVER YOU LOSS "
   } else if (humanScore ===5 && computerScore < 5){
      comment.textContent = "YOU WON CONGRATULATION!!!"
   } else {
      return 
   }
   computerScore = 0;
   humanScore = 0;

})

paper.addEventListener("click", () => {
   if (computerGuess() === "paper"){
      comment.textContent = "Same Paper, try again"
   } else if (computerGuess() === "rock"){
      comment.textContent = "You Win"
      humanScore++;
   } else if (computerGuess() === "scissors"){
      comment.textContent = "You Lose"
      computerScore++;
   } else {
      return comment.textContent = "Endevour to Change your play"
   }

   computer.textContent = computerScore
   human.textContent= humanScore

   if (humanScore < 5 && computerScore === 5) {
      comment.textContent = "GAMEOVER YOU LOSS "
   } else if (humanScore ===5 && computerScore < 5){
      comment.textContent = "YOU WON CONGRATULATION!!!"
   } else {
      return 
   }
   computerScore = 0;
   humanScore = 0;
})

scissors.addEventListener("click", () => {
   if (computerGuess() === "scissors"){
      comment.textContent = "Same scissors, try again"
   } else if (computerGuess() === "rock"){
      comment.textContent = "You Lose"
      computerScore++;
   } else if (computerGuess() === "paper"){
      comment.textContent = "You Win"
      humanScore++;
   } else {
      return comment.textContent = "Endevour to Change your play"
   }

   computer.textContent = computerScore
   human.textContent= humanScore

   if (humanScore < 5 && computerScore === 5) {
      comment.textContent = "GAMEOVER YOU LOSS "
   } else if (humanScore ===5 && computerScore < 5){
      comment.textContent = "YOU WON CONGRATULATION!!!"
   } else {
      return 
   }
   computerScore = 0;
   humanScore = 0;
})

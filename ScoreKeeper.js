// alert("Connected");

var scoreP1 = document.querySelector(".scoreP1");
var scoreP2 = document.querySelector(".scoreP2");
var rules = document.querySelector(".ruleInput");
var customInput = document.querySelector("input");
var p1Button = document.querySelector(".scorePlayer1");
var p2Button = document.querySelector(".scorePlayer2");
var resetButton = document.querySelector(".resetButton");
var gameOver = false;
var input = 5;

// rules.addEventListener()
customInput.addEventListener("change", function() {
  rules.textContent = this.value;
  input = Number(this.value);
  reset();
})

var p1Score = 0;
p1Button.addEventListener("click", function() {
  if (!gameOver) {
    // add 1 to scoreP1 for each click
    p1Score++;
    if (p1Score === input) {
      // change score green if it reaches the number in rules
      // change score to red of other player wins
      scoreP1.classList.add("winner");
      scoreP2.classList.add("loser");
      console.log("Player 1 Won");
      // change value of gameOver to remove click functionality
      gameOver = true;
    }
    scoreP1.textContent = p1Score;
  }
})

var p2Score = 0;
p2Button.addEventListener("click", function() {
  if (!gameOver) {
    // add 1 to scoreP2 for each click
    p2Score++;
    if (p2Score === input) {
      // change score green if it reaches the number in rules
      // change score to red of other player wins
      scoreP2.classList.add("winner");
      scoreP1.classList.add("loser");
      console.log("Player 2 Won");
      gameOver = true;
    }    
    // remove the functionality if a player wins
    scoreP2.textContent = p2Score;    
  }
})

resetButton.addEventListener("click", function() {
  reset();
})

function reset() {
  // reset score, style and scoreboard if button is pressed
  p1Score = 0;
  scoreP1.textContent = "0";
  p2Score = 0;
  scoreP2.textContent = "0";
  scoreP1.classList.remove("winner");
  scoreP2.classList.remove("winner");
  scoreP1.classList.remove("loser");
  scoreP2.classList.remove("loser");
  gameOver = false;
}
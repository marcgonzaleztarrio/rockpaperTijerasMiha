const options = ["piedra", "papel", "tijera"];
let playerScore = 0;
let computerScore = 0;
let winStreak = 0;
let record = 0;
let personName = "";

const buttonSendName = document.getElementById("submit");
const inputName = document.querySelector("#username");
const playerOptions = document.querySelectorAll("img");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
const resultText = document.querySelector("#result > p:first-child");
const winStreakText = document.getElementById("record");
const scores = document.getElementById("scores");

buttonSendName.addEventListener("click", function (event) {
  event.preventDefault();
  personName = inputName.value;
  console.log("save name on click " + personName);
});

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Empate";
  } else if (
    (playerChoice === "piedra" && computerChoice === "tijera") ||
    (playerChoice === "papel" && computerChoice === "piedra") ||
    (playerChoice === "tijera" && computerChoice === "papel")
  ) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}

let usuarios = [
  (userName1 = { name: "MARC", score: 4 }),
  (userName2 = { name: "MARIA", score: 5 }),
];

console.log("lokokokokokoko " + usuarios.userName1);

console.log("A json object is defined as: ");
console.log(usuarios);

console.log("Adding an element using the bracket notation");

console.log("A json object after adding a property is: ");
console.log(usuarios);

function updateScore(result) {
  if (result === "Ganaste") {
    playerScore++;
    winStreak++;
    if (winStreak > record) {
      record = winStreak;
      winStreakText.textContent = record;
      usuarios.push((userName1 = { name: personName, score: record }));
      console.log(usuarios);
    }
  } else if (result === "Perdiste") {
    computerScore++;
    winStreak = 0;
  }
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  resultText.textContent = `Último resultado: ${result}`;
}
function getUsername() {
  const nameInput = document.getElementById("name");
  return nameInput.value.trim() || "Usuario Anónimo";
}

function handlePlayerChoice() {
  const playerChoice = this.id;
  const computerChoice = computerPlay();
  const result = playRound(playerChoice, computerChoice);
  updateScore(result);
}

playerOptions.forEach((option) => {
  option.addEventListener("click", handlePlayerChoice);
});

// LEE LOS NOMBRES EN EL JSON

// const myRequest = new Request("data.json");

// let names = [];
// let records = [];

// const fragment = document.createDocumentFragment();

// fetch(myRequest)
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((item) => {
//       const div = document.createElement("div");
//       div.id = "records";

//       const nameLabel = document.createElement("span");
//       nameLabel.id = "nombre";
//       nameLabel.textContent = `${item.name}`;
//       div.appendChild(nameLabel);

//       const barra = document.createElement("span");
//       barra.id = "barra";
//       barra.textContent = "|";
//       div.appendChild(barra);

//       const recordLabel = document.createElement("span");
//       recordLabel.classList.add("record-label");
//       recordLabel.textContent = "Record: ";
//       div.appendChild(recordLabel);

//       const recordValue = document.createElement("span");
//       recordValue.textContent = item.record;
//       div.appendChild(recordValue);

//       fragment.appendChild(div);
//     });
//     document.body.appendChild(fragment);
//   })
//   .catch(console.error);

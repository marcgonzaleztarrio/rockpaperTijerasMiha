const options = ["piedra", "papel", "tijera"];
let playerScore = 0;
let computerScore = 0;
let winStreak = 0;
let record = 0;

const inputName2 = document.querySelector("#username2");
const buttonSendName = document.getElementById("submit");
const inputName = document.querySelector("#username");
const playerOptions = document.querySelectorAll("img");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
const resultText = document.querySelector("#result > p:first-child");
const winStreakText = document.getElementById("record");
const scores = document.getElementById("scores");
const actualScore = document.getElementById("actual");
const nombreActual = document.getElementById("nombreActual");

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
  { name: "MARC", score: 4 },
  { name: "MARIA", score: 5 },
];
let personName = "Usuario Anónimo";
let previousName = "";

function updateScore(result) {
  if (result === "Ganaste") {
    console.log(usuarios);
    playerScore++;
    winStreak++;
    console.log(winStreak);
    if (winStreak > record) {
      record = winStreak;
      winStreakText.textContent = ` ${personName} ⭐ ${record} ⭐`;
    }
  } else if (result === "Perdiste") {
    console.log(usuarios);

    let existingUser = usuarios.find((usuario) => usuario.name === personName);
    if (!existingUser) {
      usuarios.push({ name: personName, score: record });
    } else if (existingUser.score < record) {
      existingUser.score = record;
    }
    computerScore++;
    winStreak = 0;
    console.log(usuarios);
  }
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  resultText.textContent = `Último resultado: ${result}`;
  actualScore.textContent = `→ ${winStreak} ←`;

  updateUsuarios();
}

function updateUsuarios() {
  const recordsContainer = document.getElementById("records-container");
  recordsContainer.innerHTML = "";

  usuarios.forEach((item) => {
    const div = document.createElement("div");
    div.id = "records";

    const nameLabel = document.createElement("span");
    nameLabel.id = "nombre";
    nameLabel.textContent = `${item.name}`;
    div.appendChild(nameLabel);

    const barra = document.createElement("span");
    barra.id = "barra";
    barra.textContent = "|";
    div.appendChild(barra);

    const recordLabel = document.createElement("span");
    recordLabel.classList.add("record-label");
    recordLabel.textContent = "Record: ";
    div.appendChild(recordLabel);

    const recordValue = document.createElement("span");
    recordValue.textContent = `⭐ ${item.score} ⭐`;
    div.appendChild(recordValue);

    recordsContainer.appendChild(div);
  });
}

function updateName() {
  previousName = personName;
  personName =
    inputName2.value.trim().toUpperCase() ||
    inputName.value.trim().toUpperCase();
  nombreActual.textContent = personName;
  console.log("save name on click " + personName);
  if (personName !== previousName) {
    winStreak = 0;
  }
}

const buttonNewName = document.querySelector("#newSubmit");

buttonNewName.addEventListener("click", function (event) {
  event.preventDefault();
  updateName();
});

inputName2.addEventListener("change", function () {
  updateName();
});

const containerNames = document.querySelector(".containerNames");
const esconderTodo = document.querySelector(".escondertodo");

buttonSendName.addEventListener("click", function (event) {
  event.preventDefault();
  updateName();
  containerNames.classList.toggle("hidden");
  esconderTodo.classList.toggle("escondertodo");
});

inputName.addEventListener("change", function () {
  updateName();
});

function handlePlayerChoice() {
  const playerChoice = this.id;
  const computerChoice = computerPlay();
  const result = playRound(playerChoice, computerChoice);
  updateScore(result);
}

playerOptions.forEach((option) => {
  option.addEventListener("click", handlePlayerChoice);
});

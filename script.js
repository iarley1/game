// const audio = document.getElementById("meuAudio");
// const muteButton = document.getElementById("playButton");
// const gameDiv = document.getElementById("game-div");

// muteButton.addEventListener("click", () => {
//   if (audio.muted) {
//     audio.muted = false;
//     muteButton.textContent = "Desligar som";
//   } else {
//     audio.muted = true;
//     muteButton.textContent = "Ativar som";
//   }
// });

// function game(button) {
//   console.log(button.value);
//   const randomValue = Math.floor(Math.random() * 3) + 1;

//   const computerValue =
//     randomValue == 1 ? "rock" : randomValue == 2 ? "paper" : "scissors";

//   gameDiv.innerHTML = `
//      <p>${computerValue}</p>
//   `;
// }

const resultadoTexto = document.getElementById("resultadoTexto");
const opcoes = document.querySelectorAll(".choice");

// Função para determinar o vencedor
function jogar(playerChoice) {
  const choices = ["pedra", "papel", "tesoura"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultado;

  if (playerChoice === computerChoice) {
    resultado = "Empate!";
    document.querySelector(".result").classList = "result tie";
  } else if (
    (playerChoice === "pedra" && computerChoice === "tesoura") ||
    (playerChoice === "papel" && computerChoice === "pedra") ||
    (playerChoice === "tesoura" && computerChoice === "papel")
  ) {
    resultado = "Você venceu!";
    document.querySelector(".result").classList = "result win";
  } else {
    resultado = "Você perdeu!";
    document.querySelector(".result").classList = "result lose";
  }

  resultadoTexto.textContent = `Você escolheu ${playerChoice}, o computador escolheu ${computerChoice}. ${resultado}`;
}

// Adicionar evento de clique nas opções
opcoes.forEach((opcao) => {
  opcao.addEventListener("click", function () {
    jogar(this.id);
  });
});

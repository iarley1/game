const audio = document.getElementById("meuAudio");
const muteButton = document.getElementById("playButton");
const gameDiv = document.getElementById("game-div");

muteButton.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    muteButton.textContent = "Desligar som";
  } else {
    audio.muted = true;
    muteButton.textContent = "Ativar som";
  }
});

function resetGame() {
  gameDiv.innerHTML = `
      <h2>Escolha uma opção</h2>
      <button onclick="game(this)" value="1" id="rock">Pedra</button>
      <button onclick="game(this)" value="2" id="paper">Papel</button>
      <button onclick="game(this)" value="3" id="scissors">Tesoura</button>
  `;
}

function game(button) {
  const randomValue = Math.floor(Math.random() * 3) + 1;

  const computerValue =
    randomValue == 1 ? "pedra" : randomValue == 2 ? "papel" : "tesoura";

  if (randomValue == button.value) {
    gameDiv.innerHTML = `
       <p>A maquina escolheu ${computerValue} Empate!</p>
       <button onclick="resetGame()">Jogar novamente</button>
    `;
  } else if (
    (randomValue == 1 && button.value == 2) ||
    (randomValue == 2 && button.value == 3) ||
    (randomValue == 3 && button.value == 1)
  ) {
    gameDiv.innerHTML = `
      <p>A maquina escolheu ${computerValue} Parabens você ganhou!</p>
      <button onclick="resetGame()">Jogar novamente</button>
    `;
  } else {
    gameDiv.innerHTML = `
    <p>A maquina escolheu ${computerValue} Você perdeu :(</p>
    <button onclick="resetGame()">Jogar novamente</button>
  `;
  }
}

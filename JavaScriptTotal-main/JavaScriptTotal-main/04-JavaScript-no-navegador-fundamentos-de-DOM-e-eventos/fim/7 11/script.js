"use strict"; // Define o modo estrito para evitar erros comuns.

// Captura os Elementos HTML com IDs atribuir a variáveis
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const player1Partial = document.getElementById("player1-partial");
const player2Partial = document.getElementById("player2-partial");
const rollButton = document.getElementById("roll-button");
const turnText = document.getElementById("turn-text");
const resetButton = document.getElementById("reset-button");

// Inicializar as variáveis de pontuação
let player1Total = 0; // inicia a pontuação total do Jogador 1
let player2Total = 0; // inicia a pontuação total do Jogador 2
let currentPlayer = 1; // Jogador atual

// Dry
function endGame() {
  turnText.style.color = "red";
  // Esconder o botão jogar dados
  rollButton.style.display = "none";
  rollButton.disabled = true;
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
  player1Total = 0;
  player2Total = 0;
  currentPlayer = 1;

  player1Score.innerText = 0;
  player1Partial.innerText = 0;
  player2Score.innerText = 0;
  player2Partial.innerText = 0;

  rollButton.style.display = "initial";
  rollButton.disabled = false;

  turnText.textContent = "TURNO DO JOGADOR 1";
  dice1.src = "dice-1.png";
  dice2.src = "dice-1.png";
  turnText.style.color = "black";
}

// Escutar o botão jogar
rollButton.addEventListener("click", () => {
  console.log("Rolando os dados...");
  // Gerar números aleatórios de 1 a 6
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;

  // Calcular a soma dos dois dados
  let sum = roll1 + roll2;

  dice1.src = "dice-" + roll1 + ".png";
  dice2.src = "dice-" + roll2 + ".png";

  // Verificar se é o turno do jogador 1
  if (currentPlayer === 1) {
    // Atualizar os pontos na tela
    turnText.textContent = "Turno do Jogador 1";
    player1Total += sum; // Atualiza a pontuação do jogador 1
    player1Score.textContent = player1Total; // exibe o total de pontos
    player1Partial.textContent = sum;

    // Verificar se o jogador 1 perdeu
    if (sum === 7 || sum === 11) {
      turnText.innerText = "O Jogador 1 perdeu";
      endGame();
    } else {
      if (player1Total >= 20) {
        turnText.innerText = "O Jogador 1 venceu";
        endGame();
        return;
      }

      if (roll1 === roll2) {
        turnText.innerText = "O Jogador 1 venceu - Regra dupla vantagem";
        endGame();
        return;
      }
      // Passar o turno para o Jogador 2
      currentPlayer = 2;
    }
  } else {
    // Atualizar os pontos na tela
    turnText.textContent = "Turno do Jogador 2";
    player2Total += sum; // Atualiza a pontuação do jogador 2
    player2Score.textContent = player2Total; // exibe o total de pontos
    player2Partial.textContent = sum;

    // Verificar se o jogador 2 perdeu
    if (sum === 7 || sum === 11) {
      turnText.innerText = "O Jogador 2 perdeu";
      endGame();
    } else {
      if (player2Total >= 20) {
        turnText.innerText = "O Jogador 2 venceu";
        endGame();
        return;
      }
      if (roll1 === roll2) {
        turnText.innerText = "O Jogador 2 venceu - Regra dupla vantagem";
        endGame();
        return;
      }
      // Passar o turno para o Jogador 1
      currentPlayer = 1;
    }
  }
});

resetGame();

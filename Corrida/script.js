// Define as variaveis de progresso
let player1Progress = 0;
let player2Progress = 0;
let player3Progress = 0
let player4Progress = 0;

// Define a função de avanço dos jogadores random
function advancePlayers() {
  // gera um numero entre 1 e 3 para cada jogador
  const player1Advance = Math.floor(Math.random() * 3) + 1;
  const player2Advance = Math.floor(Math.random() * 3) + 1;
  const player3Advance = Math.floor(Math.random() * 3) + 1;
  const player4Advance = Math.floor(Math.random() * 3) + 1;

  // mostra o progresso dos jogadores adicionando numeros random
  player1Progress += player1Advance;
  player2Progress += player2Advance;
  player3Progress += player3Advance;
  player4Progress += player4Advance;

  // mostra o progresso dos jogadores na tabela/Ecran
  updateTable();
}

// Define uma função para mostrar o progresso dos jogadores na tabela
function updateTable() {
  // mostra a tabela do progresso dos jogadores
  const player1Position = document.querySelector("#player1-race td.active");
  const player2Position = document.querySelector("#player2-race td.active");
  const player3Position = document.querySelector("#player3-race td.active");
  const player4Position = document.querySelector("#player4-race td.active");


  // Determina a nova posição de cada jogador
  const player1NewPosition = Math.min(player1Progress, 13);
  const player2NewPosition = Math.min(player2Progress, 13);
  const player3NewPosition = Math.min(player3Progress, 13);
  const player4NewPosition = Math.min(player4Progress, 13);


  // Update a tabela de elementos que reflete a nova posição
  player1Position.classList.remove("active");
  player2Position.classList.remove("active");
  player3Position.classList.remove("active");
  player4Position.classList.remove("active");
  document.querySelector(`#player1-race td:nth-child(${player1NewPosition+2})`).classList.add("active");
  document.querySelector(`#player2-race td:nth-child(${player2NewPosition+2})`).classList.add("active");
  document.querySelector(`#player3-race td:nth-child(${player3NewPosition+2})`).classList.add("active");
  document.querySelector(`#player4-race td:nth-child(${player4NewPosition+2})`).classList.add("active");


  // verifica se um jogador chegou á finish line
  if (player1NewPosition === 13 || player2NewPosition === 13 || player3NewPosition === 13 || player4NewPosition === 13) {
    // Stop the race
    clearInterval(raceInterval);

    // Determina o Vencedor
    let winner;
    if (player1NewPosition === 13 && player2NewPosition !== 13 && player3NewPosition !== 13 && player4NewPosition) {
      winner = "Player 1";
    } else if (player2NewPosition === 13 && player1NewPosition !== 13 && player3NewPosition !== 13 && player4NewPosition) {
      winner = "Player 2";
    } else if (player3NewPosition === 13 && player1NewPosition !== 13 && player2NewPosition !== 13 && player1NewPosition) {
      winner = "Player 3"
    } else if (player4NewPosition === 13 && player1NewPosition !== 13 && player2NewPosition !== 13 && player3NewPosition) {
      winner = "Player 4"
    } else {
      winner = "It's a tie!";
    }

    // Mostra o Vencedor
    document.querySelector(".banner h1").textContent = `The winner is ${winner}! 🏁`;
  
  }
}

// Start the race by calling the advancePlayers function every 500 milliseconds
const raceInterval = setInterval(advancePlayers, 750);

var refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
      // Simulate pressing the F5 key
      location.reload(true);
    });

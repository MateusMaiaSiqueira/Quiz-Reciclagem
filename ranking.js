// ranking.js

// Supondo que você tenha uma lista de jogadores com seus nomes e pontuações
const players = [
    { name: "Jogador1", score: 100 },
    { name: "Jogador2", score: 90 },
    // ... Adicione os outros jogadores aqui ...
  ];
  
  const rankingBody = document.getElementById("rankingBody");
  
  // Ordena os jogadores por pontuação em ordem decrescente
  const sortedPlayers = players.sort((a, b) => b.score - a.score);
  
  // Adiciona os top 10 jogadores à tabela
  for (let i = 0; i < Math.min(sortedPlayers.length, 10); i++) {
    const player = sortedPlayers[i];
    const row = document.createElement("tr");
    row.innerHTML = `<td>${i + 1}</td><td>${player.name}</td><td>${player.score}</td>`;
    rankingBody.appendChild(row);
  }
  
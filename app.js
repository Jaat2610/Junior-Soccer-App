document.addEventListener("DOMContentLoaded", function () {
  const playerForm = document.getElementById("playerForm");
  const playerList = document.getElementById("playerList");

  // Load from localStorage
  let players = JSON.parse(localStorage.getItem("players")) || [];

  // Display players
  function renderPlayers() {
    playerList.innerHTML = "";
    players.forEach((player, index) => {
      const li = document.createElement("li");
      li.textContent = `${player.name} | Age: ${player.age} | Jersey: #${player.jersey} | Position: ${player.position}`;
      playerList.appendChild(li);
    });
  }

  // Add player
  playerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const player = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      jersey: document.getElementById("jersey").value,
      position: document.getElementById("position").value,
    };

    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
    renderPlayers();
    playerForm.reset();
  });

  renderPlayers();
});


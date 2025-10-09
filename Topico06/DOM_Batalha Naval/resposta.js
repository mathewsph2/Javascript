/*
TESTE - Faculdades Integradas Vianna Júnior

Realize as questões a seguir, utilizando o código já fornecido como base. 
Não altere o html, ao final do teste, você deve enviar somente o arquivo resposta.js.
*/

// ================== QUESTÃO 1 ==================
const cells = document.querySelectorAll(".cell"); // todas as células jogáveis
let ships = [20, 21, 22, 23, 24]; // posições dos navios
let bombs = [0, 1, 2];            // posições das bombas
let bombsRemaining = 3;           // número de bombas restantes
let hits = [];                    // navios já acertados

// Exibe bombas restantes
document.getElementById("player-bombs").textContent = bombsRemaining;

// Adiciona eventos de clique
cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

// ================== QUESTÃO 2 ==================
function handleCellClick(event) {
    let playerName = document.getElementById("player-name").value.trim();

    // Se não digitou nome, bloqueia jogada
    if (playerName === "") {
        alert("Você precisa digitar seu nome antes de jogar!");
        return;
    }

    const cell = event.target;
    const pos = parseInt(cell.getAttribute("posicao"));

    // Se já clicou nessa célula
    if (cell.classList.contains("hit") || 
        cell.classList.contains("bomb") || 
        cell.classList.contains("miss")) {
        alert("Você já clicou nesta célula!");
        return;
    }

    if (ships.includes(pos)) {
        cell.classList.add("hit");
        hits.push(pos);
    } else if (bombs.includes(pos)) {
        cell.classList.add("bomb");
        bombsRemaining--;
        document.getElementById("player-bombs").textContent = bombsRemaining;
    } else {
        cell.classList.add("miss");
    }

    checkVictory();
}

// ================== QUESTÃO 3 ==================
function checkVictory() {
    const messageDiv = document.getElementById("message");
    let playerName = document.getElementById("player-name").value.trim();

    // Vitória: todos os navios acertados
    if (hits.length === ships.length) {
        messageDiv.textContent = `Parabéns, ${playerName}! Você venceu! 🚢🎉`;
        endGame();
        return;
    }

    // Derrota: todas as bombas foram clicadas
    if (bombsRemaining === 0) {
        messageDiv.textContent = `Que pena, ${playerName}! Você perdeu! 💣😢`;
        endGame();
        return;
    }
}

// Finaliza o jogo (bloqueia cliques)
function endGame() {
    cells.forEach(cell => {
        cell.removeEventListener("click", handleCellClick);
    });
}

// Reinício do jogo
document.getElementById("restart-button").addEventListener("click", () => {
    // Limpa todas as classes
    cells.forEach(cell => {
        cell.classList.remove("hit", "miss", "bomb");
    });

    // Remove e readiciona os event listeners
    cells.forEach(cell => {
        cell.removeEventListener("click", handleCellClick);
        cell.addEventListener("click", handleCellClick);
    });

    // Reinicia variáveis
    bombsRemaining = 3;
    hits = [];
    document.getElementById("player-bombs").textContent = bombsRemaining;
    document.getElementById("message").textContent = "";
});
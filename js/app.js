let gamesData = [];
let filteredGames = [];

document.addEventListener('DOMContentLoaded', async () => {
  await loadGames();

  if (document.getElementById('gamesGrid')) {
    initHomePage();
  }

  if (document.getElementById('gameContent')) {
    initGamePage();
  }
});

async function loadGames() {
  try {
    const response = await fetch('data/games.json');
    const data = await response.json();
    gamesData = data.games;
    filteredGames = [...gamesData];
  } catch (error) {
    console.error('Erro ao carregar jogos:', error);
    gamesData = [];
    filteredGames = [];
  }
}

function initHomePage() {
  renderGames(filteredGames);
  initFilters();
  initSort();
  initSearch();
}

function renderGames(games) {
  const grid = document.getElementById('gamesGrid');
  const countEl = document.getElementById('gameCount');
  const noResults = document.getElementById('noResults');

  if (!grid) return;

  countEl.textContent = `${games.length} jogo(s)`;

  if (games.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');

  grid.innerHTML = games.map(game => `
    <a href="game.html?id=${game.id}" class="game-card">
      <div class="game-card-cover">
        <img src="${game.cover}" alt="${game.title}" onerror="this.parentElement.innerHTML='<span class=\\'placeholder\\'>🎮</span>'">
      </div>
      <div class="game-card-info">
        <h3 class="game-card-title">${game.title}</h3>
        <div class="game-card-meta">
          <span class="genre-badge">${game.genre}</span>
          <span class="rating">⭐ ${game.rating}</span>
        </div>
      </div>
    </a>
  `).join('');
}

function initGamePage() {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('id');

  if (!gameId) {
    showGameNotFound();
    return;
  }

  const game = gamesData.find(g => g.id === gameId);

  if (!game) {
    showGameNotFound();
    return;
  }

  renderGamePage(game);
  initEmulator(game);
}

function showGameNotFound() {
  document.getElementById('gameLoading').classList.add('hidden');
  document.getElementById('gameNotFound').classList.remove('hidden');
}

function renderGamePage(game) {
  document.getElementById('gameLoading').classList.add('hidden');
  document.getElementById('gameContent').classList.remove('hidden');
  document.getElementById('pageTitle').textContent = `GAMEHUB - ${game.title}`;

  document.getElementById('gameCover').src = game.cover;
  document.getElementById('gameCover').alt = game.title;
  document.getElementById('gameCover').onerror = function () {
    this.parentElement.innerHTML = '<span class="placeholder" style="font-size:80px;opacity:0.3;display:flex;align-items:center;justify-content:center;height:100%;">🎮</span>';
  };

  document.getElementById('gameTitle').textContent = game.title;
  document.getElementById('gameDeveloper').textContent = game.developer;
  document.getElementById('gameGenre').textContent = game.genre;
  document.getElementById('gameSize').textContent = game.size;
  document.getElementById('gameYear').textContent = game.year;
  document.getElementById('gameDownloads').textContent = game.downloads.toLocaleString('pt-BR');
  document.getElementById('gameRating').textContent = `⭐ ${game.rating}`;
  document.getElementById('gameDescription').textContent = game.description;

  document.getElementById('downloadJar').href = game.jar;
  document.getElementById('downloadJad').href = game.jad;

  const screenshotsGrid = document.getElementById('screenshotsGrid');
  if (game.screenshots && game.screenshots.length > 0) {
    screenshotsGrid.innerHTML = game.screenshots.map(src => `
      <div class="screenshot-item">
        <img src="${src}" alt="Screenshot" onerror="this.parentElement.textContent='📷 Screenshot indisponivel'">
      </div>
    `).join('');
  } else {
    screenshotsGrid.innerHTML = '<p style="color:var(--text-secondary)">Nenhuma screenshot disponivel</p>';
  }
}

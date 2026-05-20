const gamesData = [
    {
        id: 'diamondrush',
        title: 'Diamond Rush',
        category: 'adventure',
        description: 'Colete diamantes e escape das cavernas!',
        icon: '💎',
        jar: 'diamondrush.jar',
        width: 320,
        height: 240
    }
];

let currentFilter = 'all';
let searchQuery = '';

const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');

function renderGames() {
    const filtered = gamesData.filter(game => {
        const matchCategory = currentFilter === 'all' || game.category === currentFilter;
        const matchSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    gamesGrid.innerHTML = '';

    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filtered.forEach(game => {
            const card = createGameCard(game);
            gamesGrid.appendChild(card);
        });
    }
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <div class="game-image">
            <div class="game-placeholder">${game.icon}</div>
        </div>
        <div class="game-info">
            <span class="game-category">${getCategoryName(game.category)}</span>
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <button class="play-btn" onclick="playGame('${game.id}')">▶ Jogar Agora</button>
        </div>
    `;
    return card;
}

function getCategoryName(category) {
    const names = {
        'action': 'Ação',
        'adventure': 'Aventura',
        'puzzle': 'Puzzle',
        'rpg': 'RPG',
        'sports': 'Esportes',
        'racing': 'Corrida'
    };
    return names[category] || category;
}

function playGame(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    const playerPage = document.getElementById('playerPage');
    const playerFrame = document.getElementById('playerFrame');
    const playerTitle = document.getElementById('playerTitle');

    playerTitle.textContent = game.title;
    
    const emulatorUrl = `player.html?jar=${encodeURIComponent(game.jar)}`;
    
    playerFrame.src = emulatorUrl;
    playerPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlayer() {
    const playerPage = document.getElementById('playerPage');
    const playerFrame = document.getElementById('playerFrame');
    
    playerPage.classList.remove('active');
    playerFrame.src = '';
    document.body.style.overflow = '';
}

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderGames();
});

searchBtn.addEventListener('click', () => {
    searchQuery = searchInput.value;
    renderGames();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.category;
        renderGames();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePlayer();
    }
});

renderGames();

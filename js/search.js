function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const genre = btn.dataset.genre;
      applyFilters(genre);
    });
  });
}

function applyFilters(genre) {
  const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const sortValue = document.getElementById('sortSelect')?.value || 'name';

  let result = [...gamesData];

  if (genre !== 'all') {
    result = result.filter(game => game.genre === genre);
  }

  if (searchTerm) {
    result = result.filter(game =>
      game.title.toLowerCase().includes(searchTerm) ||
      game.developer.toLowerCase().includes(searchTerm) ||
      game.genre.toLowerCase().includes(searchTerm)
    );
  }

  result = sortGames(result, sortValue);
  filteredGames = result;
  renderGames(result);
}

function initSort() {
  const sortSelect = document.getElementById('sortSelect');
  if (!sortSelect) return;

  sortSelect.addEventListener('change', () => {
    applyFilters(document.querySelector('.filter-btn.active')?.dataset.genre || 'all');
  });
}

function sortGames(games, sortBy) {
  switch (sortBy) {
    case 'name':
      return games.sort((a, b) => a.title.localeCompare(b.title));
    case 'rating':
      return games.sort((a, b) => b.rating - a.rating);
    case 'downloads':
      return games.sort((a, b) => b.downloads - a.downloads);
    case 'year':
      return games.sort((a, b) => b.year - a.year);
    default:
      return games;
  }
}

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      applyFilters(document.querySelector('.filter-btn.active')?.dataset.genre || 'all');
    }, 300);
  });

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      applyFilters(document.querySelector('.filter-btn.active')?.dataset.genre || 'all');
    });
  }

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      applyFilters(document.querySelector('.filter-btn.active')?.dataset.genre || 'all');
    }
  });
}

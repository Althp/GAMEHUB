import { create } from 'zustand'

const useStore = create((set) => ({
  games: [],
  selectedGame: null,
  searchQuery: '',
  selectedPlatform: 'all',
  favorites: [],
  recentGames: [],

  setGames: (games) => set({ games }),
  setSelectedGame: (game) => set({ selectedGame: game }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedPlatform: (platform) => set({ selectedPlatform: platform }),
  toggleFavorite: (gameId) =>
    set((state) => ({
      favorites: state.favorites.includes(gameId)
        ? state.favorites.filter((id) => id !== gameId)
        : [...state.favorites, gameId],
    })),
  addRecentGame: (game) =>
    set((state) => ({
      recentGames: [
        game,
        ...state.recentGames.filter((g) => g.id !== game.id),
      ].slice(0, 10),
    })),
}))

export default useStore

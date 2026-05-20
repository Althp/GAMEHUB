import { useState } from 'react'
import GameCard from './GameCard'
import { platforms } from '../../data/games'
import useStore from '../../store/useStore'

function GameGrid({ games }) {
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const searchQuery = useStore((state) => state.searchQuery)

  const filteredGames = games.filter((game) => {
    const matchesPlatform = selectedPlatform === 'all' || game.platform === selectedPlatform
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesPlatform && matchesSearch
  })

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedPlatform === platform.id
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-white'
            }`}
          >
            {platform.icon} {platform.name}
          </button>
        ))}
      </div>

      {filteredGames.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[var(--text-secondary)] text-lg">Nenhum jogo encontrado</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  )
}

export default GameGrid

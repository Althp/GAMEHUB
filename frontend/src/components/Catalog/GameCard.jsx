import { Link } from 'react-router-dom'
import { Heart, Play } from 'lucide-react'
import useStore from '../../store/useStore'
import { platforms } from '../../data/games'

function GameCard({ game }) {
  const favorites = useStore((state) => state.favorites)
  const toggleFavorite = useStore((state) => state.toggleFavorite)
  const platform = platforms.find((p) => p.id === game.platform)

  return (
    <div className="group relative bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/20">
      <Link to={`/game/${game.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-[var(--primary)] rounded-full p-3">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs">
            {platform?.icon} {platform?.name}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/game/${game.id}`} className="hover:text-[var(--primary)] transition-colors">
            <h3 className="font-semibold text-lg truncate">{game.title}</h3>
          </Link>
          <button
            onClick={() => toggleFavorite(game.id)}
            className="p-1 hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-5 h-5 ${
                favorites.includes(game.id)
                  ? 'fill-red-500 text-red-500'
                  : 'text-[var(--text-secondary)]'
              }`}
            />
          </button>
        </div>
        <div className="flex items-center gap-3 mt-2 text-sm text-[var(--text-secondary)]">
          <span>{game.genre}</span>
          <span>•</span>
          <span>{game.year}</span>
        </div>
      </div>
    </div>
  )
}

export default GameCard

import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Share2, Calendar, Tag, Gamepad2, Coffee } from 'lucide-react'
import { useEffect } from 'react'
import EmulatorPlayer from '../components/Player/EmulatorPlayer'
import J2MEPlayer from '../components/Player/J2MEPlayer'
import useStore from '../store/useStore'
import { platforms } from '../data/games'

function Game() {
  const { id } = useParams()
  const games = useStore((state) => state.games)
  const selectedGame = useStore((state) => state.selectedGame)
  const setSelectedGame = useStore((state) => state.setSelectedGame)
  const favorites = useStore((state) => state.favorites)
  const toggleFavorite = useStore((state) => state.toggleFavorite)
  const addRecentGame = useStore((state) => state.addRecentGame)

  useEffect(() => {
    const game = games.find((g) => g.id === parseInt(id))
    if (game) {
      setSelectedGame(game)
      addRecentGame(game)
    }
  }, [id, games, setSelectedGame, addRecentGame])

  if (!selectedGame) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-[var(--text-secondary)]">Jogo não encontrado</p>
        <Link to="/" className="text-[var(--primary)] hover:underline mt-4 inline-block">
          Voltar para home
        </Link>
      </div>
    )
  }

  const platform = platforms.find((p) => p.id === selectedGame.platform)
  const isFavorite = favorites.includes(selectedGame.id)
  const isJ2ME = selectedGame.platform === 'j2me'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {isJ2ME ? <J2MEPlayer game={selectedGame} /> : <EmulatorPlayer game={selectedGame} />}
        </div>

        <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] p-6">
          <div className="aspect-square rounded-lg overflow-hidden mb-6">
            <img
              src={selectedGame.image}
              alt={selectedGame.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold mb-2">{selectedGame.title}</h1>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-[var(--primary)]/20 text-[var(--primary)] rounded-full text-sm">
              {platform?.icon} {platform?.name}
            </span>
            <span className="px-3 py-1 bg-[var(--bg-dark)] text-[var(--text-secondary)] rounded-full text-sm">
              {selectedGame.genre}
            </span>
          </div>

          <p className="text-[var(--text-secondary)] mb-6">{selectedGame.description}</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
              <Calendar className="w-4 h-4" />
              <span>Ano: {selectedGame.year}</span>
            </div>
            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
              <Tag className="w-4 h-4" />
              <span>Gênero: {selectedGame.genre}</span>
            </div>
            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
              <Gamepad2 className="w-4 h-4" />
              <span>Emulador: {isJ2ME ? 'MicroEmulator Web' : 'EmulatorJS'}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => toggleFavorite(selectedGame.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
                isFavorite
                  ? 'bg-red-500/20 text-red-500 border border-red-500/50'
                  : 'bg-[var(--bg-dark)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:text-white'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500' : ''}`} />
              {isFavorite ? 'Favoritado' : 'Favoritar'}
            </button>
            <button className="p-3 rounded-lg bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-white transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {isJ2ME && (
            <div className="mt-6 p-4 bg-[var(--bg-dark)] rounded-lg border border-[var(--border-color)]">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[var(--accent-orange)]" />
                Informações Java ME
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p>ROM: {selectedGame.romUrl}</p>
                {selectedGame.jadUrl && <p>JAD: {selectedGame.jadUrl}</p>}
                <p className="text-xs mt-2">
                  Use o teclado numérico virtual abaixo do emulador para jogar.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Game

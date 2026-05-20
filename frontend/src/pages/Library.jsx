import GameGrid from '../components/Catalog/GameGrid'
import useStore from '../store/useStore'

function Library() {
  const games = useStore((state) => state.games)
  const favorites = useStore((state) => state.favorites)

  const favoriteGames = games.filter((g) => favorites.includes(g.id))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Biblioteca de Jogos</h1>

      {favoriteGames.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">❤️ Favoritos</h2>
          <GameGrid games={favoriteGames} />
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold mb-6">🎮 Todos os Jogos</h2>
        <GameGrid games={games} />
      </section>
    </div>
  )
}

export default Library

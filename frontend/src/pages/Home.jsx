import { Link } from 'react-router-dom'
import { Gamepad2, Coffee, Zap, Star } from 'lucide-react'
import GameGrid from '../components/Catalog/GameGrid'
import useStore from '../store/useStore'

function Home() {
  const games = useStore((state) => state.games)
  const recentGames = useStore((state) => state.recentGames)

  const featuredGames = games.slice(0, 4)
  const j2meGames = games.filter((g) => g.platform === 'j2me')
  const consoleGames = games.filter((g) => g.platform !== 'j2me')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12">
        <div className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bem-vindo ao GameHub
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
              Jogue jogos retrô direto no seu navegador. Consoles clássicos e jogos Java ME (.JAR/.JAD) em um só lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/library"
                className="px-6 py-3 bg-white text-[var(--primary)] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explorar Jogos
              </Link>
              <div className="flex items-center gap-2 px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <Zap className="w-5 h-5" />
                <span>EmulatorJS + MicroEmulator</span>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-20">
            <Gamepad2 className="w-full h-full" />
          </div>
        </div>
      </section>

      {recentGames.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-[var(--accent-orange)]" />
            Jogados Recentemente
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {recentGames.map((game) => (
              <Link
                key={game.id}
                to={`/game/${game.id}`}
                className="bg-[var(--bg-card)] rounded-lg overflow-hidden border border-[var(--border-color)] hover:border-[var(--primary)] transition-all"
              >
                <img src={game.image} alt={game.title} className="w-full aspect-video object-cover" />
                <div className="p-2">
                  <p className="text-sm font-medium truncate">{game.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-[var(--primary)]" />
          Jogos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <Link
              key={game.id}
              to={`/game/${game.id}`}
              className="group bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--primary)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/20"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="font-bold text-lg">{game.title}</h3>
                  <p className="text-sm text-gray-300">{game.year} • {game.genre}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-[var(--accent-blue)]" />
          Consoles Clássicos
        </h2>
        <GameGrid games={consoleGames} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Coffee className="w-6 h-6 text-[var(--accent-orange)]" />
          Jogos Java ME (.JAR/.JAD)
        </h2>
        <GameGrid games={j2meGames} />
      </section>
    </div>
  )
}

export default Home

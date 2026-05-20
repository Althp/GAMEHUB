import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/UI/Navbar'
import Home from './pages/Home'
import Game from './pages/Game'
import Library from './pages/Library'
import useStore from './store/useStore'
import { games } from './data/games'

function App() {
  const setGames = useStore((state) => state.setGames)

  useEffect(() => {
    setGames(games)
  }, [setGames])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg-dark)]">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

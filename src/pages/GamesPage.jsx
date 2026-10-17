import { Link } from 'react-router'
import { useGuides } from '../data/useGuides'
import './pages.css'

export default function GamesPage() {
  const { guides, error } = useGuides()

  if (error) {
    return <p className="no-results">Couldn't load games: {error}</p>
  }

  if (!guides) {
    return <p className="no-results">Loading games...</p>
  }

  // Count how many guides each game has
  const counts = new Map()
  for (const guide of guides) {
    counts.set(guide.game, (counts.get(guide.game) ?? 0) + 1)
  }
  const games = [...counts.keys()].sort()

  return (
    <section>
      <h2 className="page-title">Browse games</h2>
      <div className="guide-list">
        {games.map((game) => (
          <article key={game} className="guide-card">
            <h2>
              <Link to={`/?game=${encodeURIComponent(game)}`}>{game}</Link>
            </h2>
            <p className="guide-summary">
              {counts.get(game)} {counts.get(game) === 1 ? 'guide' : 'guides'}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Link } from 'react-router'
import { guides } from '../data/guides'
import TypeBadge from '../components/TypeBadge'

function GuideCard({ guide }) {
  const isExternal = guide.type === 'link'

  return (
    <article className="guide-card">
      <p className="guide-game">{guide.game}</p>
      <h2>
        {isExternal ? (
          <a href={guide.url} target="_blank" rel="noreferrer">
            {guide.title} ↗
          </a>
        ) : (
          <Link to={`/guides/${guide.id}`}>{guide.title}</Link>
        )}
      </h2>
      <p className="guide-summary">{guide.summary}</p>
      <div className="guide-meta">
        <TypeBadge type={guide.type} />
        <span>by {guide.author}</span>
      </div>
    </article>
  )
}

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [gameFilter, setGameFilter] = useState('all')

  const games = [...new Set(guides.map((guide) => guide.game))].sort()

  const query = search.trim().toLowerCase()
  const visibleGuides = guides.filter((guide) => {
    const matchesGame = gameFilter === 'all' || guide.game === gameFilter
    const matchesSearch =
      query === '' ||
      guide.title.toLowerCase().includes(query) ||
      guide.game.toLowerCase().includes(query) ||
      guide.summary.toLowerCase().includes(query)
    return matchesGame && matchesSearch
  })

  return (
    <>
      <div className="filters">
        <input
          type="search"
          placeholder="Search guides..."
          aria-label="Search guides"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          aria-label="Filter by game"
          value={gameFilter}
          onChange={(e) => setGameFilter(e.target.value)}
        >
          <option value="all">All games</option>
          {games.map((game) => (
            <option key={game} value={game}>
              {game}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">
        {visibleGuides.length} of {guides.length} guides
      </p>

      {visibleGuides.length === 0 ? (
        <p className="no-results">No guides match your search.</p>
      ) : (
        <section className="guide-list">
          {visibleGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </section>
      )}
    </>
  )
}

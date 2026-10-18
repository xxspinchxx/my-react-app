import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { useGuides } from '../data/useGuides'
import TypeBadge from '../components/TypeBadge'
import './HomePage.css'

// The three columns on the homepage
const COLUMNS = [
  { key: 'guides', title: 'Game guides' },
  { key: 'steam', title: 'Steam community' },
  { key: 'steam-deck', title: 'Steam Deck' },
]

// Decide which column a guide belongs in
function columnFor(guide) {
  if (guide.game === 'Steam Deck') return 'steam-deck'
  if (guide.url?.includes('steamcommunity.com')) return 'steam'
  return 'guides'
}

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
  const { guides, error } = useGuides()
  const [search, setSearch] = useState('')

  // The game filter lives in the URL (/?game=Elden%20Ring) so the
  // Browse games page can link straight to a filtered list.
  const [searchParams, setSearchParams] = useSearchParams()
  const gameFilter = searchParams.get('game') ?? 'all'

  function setGameFilter(value) {
    setSearchParams(value === 'all' ? {} : { game: value })
  }

  if (error) {
    return <p className="no-results">Couldn't load guides: {error}</p>
  }

  if (!guides) {
    return <p className="no-results">Loading guides...</p>
  }

  const games = [...new Set(guides.map((guide) => guide.game))].sort()

  const queryText = search.trim().toLowerCase()
  const visibleGuides = guides.filter((guide) => {
    const matchesGame = gameFilter === 'all' || guide.game === gameFilter
    const matchesSearch =
      queryText === '' ||
      guide.title.toLowerCase().includes(queryText) ||
      guide.game.toLowerCase().includes(queryText) ||
      guide.summary.toLowerCase().includes(queryText)
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

      <div className="guide-columns">
        {COLUMNS.map((column) => {
          const items = visibleGuides.filter((guide) => columnFor(guide) === column.key)

          return (
            <section key={column.key} className="guide-column">
              <h2 className="column-title">
                {column.title}
                <span className="column-count">{items.length}</span>
              </h2>

              {items.length === 0 ? (
                <p className="column-empty">Nothing matches here.</p>
              ) : (
                <div className="column-list">
                  {items.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} />
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </>
  )
}

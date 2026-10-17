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
  return (
    <section className="guide-list">
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </section>
  )
}

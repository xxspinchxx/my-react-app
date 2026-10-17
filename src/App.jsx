import './App.css'
import { guides } from './data/guides'

const TYPE_LABELS = {
  written: 'Written guide',
  video: 'Video',
  link: 'External link',
}

function GuideCard({ guide }) {
  return (
    <article className="guide-card">
      <p className="guide-game">{guide.game}</p>
      <h2>{guide.title}</h2>
      <p className="guide-summary">{guide.summary}</p>
      <div className="guide-meta">
        <span className={`badge badge-${guide.type}`}>
          {TYPE_LABELS[guide.type]}
        </span>
        <span>by {guide.author}</span>
      </div>
      {guide.type === 'link' && (
        <a href={guide.url} target="_blank" rel="noreferrer">
          Open guide ↗
        </a>
      )}
    </article>
  )
}

function App() {
  return (
    <main className="page">
      <header className="site-header">
        <h1>Walkthrough Hub</h1>
        <p>Game guides, video walkthroughs, and the best tutorials from around the web.</p>
      </header>

      <section className="guide-list">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </section>
    </main>
  )
}

export default App

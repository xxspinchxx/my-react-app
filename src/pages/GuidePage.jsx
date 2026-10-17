import { Link, useParams } from 'react-router'
import { guides } from '../data/guides'
import TypeBadge from '../components/TypeBadge'

export default function GuidePage() {
  const { guideId } = useParams()
  const guide = guides.find((g) => g.id === guideId)

  if (!guide) {
    return (
      <div className="guide-page">
        <p>Guide not found.</p>
        <Link to="/">← Back to all guides</Link>
      </div>
    )
  }

  return (
    <article className="guide-page">
      <Link to="/" className="back-link">← Back to all guides</Link>
      <p className="guide-game">{guide.game}</p>
      <h1>{guide.title}</h1>
      <div className="guide-meta">
        <TypeBadge type={guide.type} />
        <span>by {guide.author}</span>
      </div>

      {guide.videoId && (
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${guide.videoId}`}
            title={guide.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      {guide.type === 'video' && !guide.videoId && (
        <p className="video-missing">No video added yet.</p>
      )}

      {guide.sections?.map((section, index) => (
        <section key={index} className="guide-section">
          <h2>Step {index + 1}: {section.heading}</h2>
          <p>{section.text}</p>
          {section.image && (
            <img
              src={section.image}
              alt={section.heading}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          )}
        </section>
      ))}
    </article>
  )
}

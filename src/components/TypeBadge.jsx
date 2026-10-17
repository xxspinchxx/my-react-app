const TYPE_LABELS = {
  written: 'Written guide',
  video: 'Video',
  link: 'External link',
}

export default function TypeBadge({ type }) {
  return <span className={`badge badge-${type}`}>{TYPE_LABELS[type]}</span>
}

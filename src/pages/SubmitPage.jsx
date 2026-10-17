import { Link } from 'react-router'
import { useAuth } from '../auth/authContext'
import './pages.css'

// Placeholder until the submission form is built
export default function SubmitPage() {
  const { user } = useAuth()

  return (
    <section className="guide-page">
      <h2 className="page-title">Submit a guide</h2>
      <div className="guide-section">
        <p>
          Guide submissions are coming soon. You'll be able to share your own
          written guide or a link to a great one you found.
        </p>
        {!user && <p>Sign in with Google now so you're ready when it opens.</p>}
      </div>
      <Link to="/" className="back-link">← Back to all guides</Link>
    </section>
  )
}

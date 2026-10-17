import { Link } from 'react-router'
import UserMenu from './UserMenu'
import RetroController from './RetroController'
import './SiteHeader.css'

export default function SiteHeader() {
  return (
    <header className="marquee">
      <div className="marquee-top">
        <h1 className="logo">
          <Link to="/">
            <span className="logo-top">Walkthrough</span>{' '}
            <span className="logo-main">Hub</span>
          </Link>
        </h1>
        <RetroController />
        <UserMenu />
      </div>

      <div className="marquee-stripes" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <p className="marquee-tagline">
        Game guides, video walkthroughs, and the best tutorials from around the web.
      </p>

      <div className="marquee-grid" aria-hidden="true" />
    </header>
  )
}

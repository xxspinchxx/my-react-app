import { Link, NavLink } from 'react-router'
import UserMenu from './UserMenu'
import RetroController from './RetroController'
import {
  LoadingTip,
  NowPlaying,
  PlatformIcons,
  ScoreCounter,
  SoundToggle,
} from './HeaderExtras'
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
          <span className="sparkle sparkle-1" aria-hidden="true" />
          <span className="sparkle sparkle-2" aria-hidden="true" />
          <span className="sparkle sparkle-3" aria-hidden="true" />
          <span className="sparkle sparkle-4" aria-hidden="true" />
        </h1>

        <RetroController />

        <div className="marquee-hud">
          <UserMenu />
          <ScoreCounter />
          <SoundToggle />
        </div>
      </div>

      <nav className="marquee-nav" aria-label="Main">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/games">Browse games</NavLink>
        <NavLink to="/submit">Submit a guide</NavLink>
      </nav>

      <div className="marquee-stripes" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <NowPlaying />

      <p className="marquee-tagline">
        Game guides, video walkthroughs, and the best tutorials from around the web.
      </p>

      <PlatformIcons />
      <LoadingTip />

      <div className="marquee-grid" aria-hidden="true" />
    </header>
  )
}

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

// Where each extra sparkle sits in the banner (percent from top/left),
// its color, and its size (1 = normal)
const SPARKLES = [
  { top: '6%', left: '40%', color: 'var(--blue)', size: 1 },
  { top: '4%', left: '62%', color: '#fff', size: 0.75 },
  { top: '14%', left: '78%', color: 'var(--orange)', size: 1.25 },
  { top: '30%', left: '52%', color: '#fff', size: 0.75 },
  { top: '38%', left: '88%', color: 'var(--blue)', size: 1 },
  { top: '48%', left: '3%', color: 'var(--orange)', size: 1 },
  { top: '56%', left: '96%', color: '#fff', size: 0.75 },
  { top: '66%', left: '8%', color: 'var(--blue)', size: 1.25 },
  { top: '72%', left: '90%', color: 'var(--orange)', size: 1 },
  { top: '80%', left: '22%', color: '#fff', size: 0.75 },
  { top: '84%', left: '74%', color: 'var(--blue)', size: 1 },
  { top: '90%', left: '48%', color: 'var(--orange)', size: 0.75 },
]

export default function SiteHeader() {
  return (
    <header className="marquee">
      <div className="marquee-sparkles" aria-hidden="true">
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="sparkle"
            style={{
              top: s.top,
              left: s.left,
              color: s.color,
              transform: `scale(${s.size})`,
            }}
          />
        ))}
      </div>

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

import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useGuides } from '../data/useGuides'

/* ---------- Score-style guide counter ---------- */

export function ScoreCounter() {
  const { guides } = useGuides()
  const value = guides ? String(guides.length).padStart(3, '0') : '---'

  return (
    <div className="score">
      <span className="score-label">Guides</span>
      <span className="score-value">{value}</span>
    </div>
  )
}

/* ---------- "New" bar showing the newest guide ---------- */

// Guides with a createdAt date are sorted newest first.
// If none have one yet, the last guide in the list is shown.
function pickNewest(guides) {
  const dated = guides.filter((guide) => guide.createdAt?.toMillis)
  if (dated.length > 0) {
    return [...dated].sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis())[0]
  }
  return guides[guides.length - 1]
}

export function NowPlaying() {
  const { guides } = useGuides()
  if (!guides || guides.length === 0) return null

  const newest = pickNewest(guides)

  return (
    <div className="now-playing">
      <span className="now-label">New</span>
      {newest.type === 'link' ? (
        <a href={newest.url} target="_blank" rel="noreferrer">
          {newest.title} ↗
        </a>
      ) : (
        <Link to={`/guides/${newest.id}`}>{newest.title}</Link>
      )}
    </div>
  )
}

/* ---------- Loading-screen tip, different each visit ---------- */

const TIPS = [
  'Save before every boss fight.',
  'Talk to NPCs twice. Some of them have more to say.',
  'Check behind waterfalls for hidden paths.',
  'Sell junk items before you upgrade your gear.',
  'Stuck on a boss? Watch its attack pattern before you swing.',
  'Explore side areas early. They often hide upgrades.',
  'Read item descriptions. They often hint at secrets.',
  'Take a break. Hard fights get easier with fresh eyes.',
]

export function LoadingTip() {
  const [tip] = useState(() => TIPS[Math.floor(Math.random() * TIPS.length)])

  return (
    <p className="loading-tip">
      <strong>Tip:</strong> {tip}
    </p>
  )
}

/* ---------- Pixel platform icons ---------- */

function PixelIcon({ children, label }) {
  return (
    <li>
      <svg viewBox="0 0 16 14" shapeRendering="crispEdges" role="img" aria-label={label}>
        {children}
      </svg>
      <span>{label}</span>
    </li>
  )
}

export function PlatformIcons() {
  return (
    <ul className="platforms">
      <PixelIcon label="PC">
        <rect className="px-blue" x="0" y="0" width="16" height="10" />
        <rect className="px-black" x="1" y="1" width="14" height="8" />
        <rect className="px-orange" x="3" y="3" width="4" height="1" />
        <rect className="px-orange" x="3" y="5" width="7" height="1" />
        <rect className="px-blue" x="7" y="10" width="2" height="2" />
        <rect className="px-blue" x="4" y="12" width="8" height="2" />
      </PixelIcon>

      <PixelIcon label="Console">
        <rect className="px-blue" x="0" y="4" width="16" height="6" />
        <rect className="px-black" x="2" y="6" width="7" height="1" />
        <rect className="px-orange" x="12" y="6" width="2" height="2" />
        <rect className="px-blue" x="1" y="10" width="2" height="1" />
        <rect className="px-blue" x="13" y="10" width="2" height="1" />
      </PixelIcon>

      <PixelIcon label="Handheld">
        <rect className="px-blue" x="3" y="0" width="10" height="14" />
        <rect className="px-black" x="4" y="1" width="8" height="6" />
        <rect className="px-orange" x="5" y="10" width="3" height="1" />
        <rect className="px-orange" x="6" y="9" width="1" height="3" />
        <rect className="px-orange" x="10" y="9" width="1" height="1" />
        <rect className="px-orange" x="11" y="10" width="1" height="1" />
      </PixelIcon>
    </ul>
  )
}

/* ---------- Optional 8-bit click sound ---------- */

let audioContext = null

function playBeep() {
  try {
    audioContext ??= new (window.AudioContext || window.webkitAudioContext)()
    const now = audioContext.currentTime
    const oscillator = audioContext.createOscillator()
    const volume = audioContext.createGain()
    oscillator.type = 'square'
    oscillator.frequency.value = 880
    volume.gain.setValueAtTime(0.05, now)
    volume.gain.exponentialRampToValueAtTime(0.0001, now + 0.08)
    oscillator.connect(volume).connect(audioContext.destination)
    oscillator.start(now)
    oscillator.stop(now + 0.08)
  } catch {
    // This browser can't play sound, so stay silent
  }
}

function loadSoundSetting() {
  try {
    return localStorage.getItem('sound') === 'on'
  } catch {
    return false
  }
}

export function SoundToggle() {
  const [soundOn, setSoundOn] = useState(loadSoundSetting)

  useEffect(() => {
    try {
      localStorage.setItem('sound', soundOn ? 'on' : 'off')
    } catch {
      // Can't remember the setting in this browser; that's fine
    }

    if (!soundOn) return

    function handleClick(event) {
      if (event.target.closest('a, button')) playBeep()
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [soundOn])

  return (
    <button
      type="button"
      className="sound-toggle"
      aria-pressed={soundOn}
      onClick={() => setSoundOn((on) => !on)}
    >
      {soundOn ? 'Sound on' : 'Sound off'}
    </button>
  )
}

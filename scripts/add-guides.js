// Adds new guides to Firestore with today's date as createdAt.
import { doc, serverTimestamp, setDoc, terminate } from 'firebase/firestore'
import { db } from '../src/firebase.js'

const newGuides = [
  {
    id: 'elden-ring-steam-guides',
    game: 'Elden Ring',
    title: 'Elden Ring Steam Community Guides',
    type: 'link',
    author: 'Steam Community',
    url: 'https://steamcommunity.com/app/1245620/guides/',
    summary: 'Player-written guides on Steam for builds, bosses, and hidden areas.',
  },
  {
    id: 'hollow-knight-steam-guides',
    game: 'Hollow Knight',
    title: 'Hollow Knight Steam Community Guides',
    type: 'link',
    author: 'Steam Community',
    url: 'https://steamcommunity.com/app/367520/guides/',
    summary: 'Player-written guides on Steam for charms, bosses, and 100% completion.',
  },
  {
    id: 'steam-deck-protondb',
    game: 'Steam Deck',
    title: 'ProtonDB: Will It Run on Steam Deck?',
    type: 'link',
    author: 'ProtonDB',
    url: 'https://protondb.com',
    summary: 'Community reports on how well each game runs on Steam Deck and Linux, with tweaks that help.',
  },
  {
    id: 'steam-deck-game-settings',
    game: 'Steam Deck',
    title: 'Best Steam Deck Settings by Game',
    type: 'link',
    author: 'SteamDeckHQ',
    url: 'https://steamdeckhq.com/game-settings/',
    summary: 'Recommended in-game settings for getting smooth performance and battery life on the Deck.',
  },
]

for (const guide of newGuides) {
  const { id, ...data } = guide
  await setDoc(doc(db, 'guides', id), { ...data, createdAt: serverTimestamp() })
  console.log(`Saved ${id}`)
}

await terminate(db)
console.log('Done!')
process.exit(0)

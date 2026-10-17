// Adds new guides to Firestore with today's date as createdAt.
import { doc, serverTimestamp, setDoc, terminate } from 'firebase/firestore'
import { db } from '../src/firebase.js'

const newGuides = [
  {
    id: 'pokemon-black-white-walkthrough',
    game: 'Pokémon Black and White',
    title: 'Pokémon Black and White Full Walkthrough',
    type: 'link',
    author: 'Bulbapedia',
    url: 'https://bulbapedia.bulbagarden.net/wiki/Appendix:Black_and_White_walkthrough',
    summary: 'Nintendo DS. Every route, gym, and town in Unova, chapter by chapter.',
  },
  {
    id: 'pokemon-firered-leafgreen-walkthrough',
    game: 'Pokémon FireRed and LeafGreen',
    title: 'Pokémon FireRed and LeafGreen Full Walkthrough',
    type: 'link',
    author: 'Bulbapedia',
    url: 'https://bulbapedia.bulbagarden.net/wiki/Appendix:FireRed_and_LeafGreen_walkthrough',
    summary: 'Game Boy Advance. The full Kanto journey, from Pallet Town through the Sevii Islands.',
  },
  {
    id: 'pokemon-black-white-video',
    game: 'Pokémon Black and White',
    title: 'Pokémon Black and White Full Video Walkthrough',
    type: 'video',
    author: 'xspinchx',
    videoId: 'J9brjnDG820',
    summary: 'Nintendo DS. A complete playthrough of the main story with no commentary.',
    sections: [
      {
        heading: 'Choose your starter',
        text: 'Your journey begins in Nuvema Town, where you pick Snivy, Tepig, or Oshawott.',
      },
      {
        heading: 'Earn the eight Unova badges',
        text: 'Travel across Unova, challenging each Gym Leader and building up your team along the way.',
      },
      {
        heading: 'Stop Team Plasma',
        text: 'Uncover Team Plasma\'s plans, then take on the Elite Four for the final showdown.',
      },
    ],
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

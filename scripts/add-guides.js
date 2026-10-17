// Adds new guides to Firestore with today's date as createdAt.
import { doc, serverTimestamp, setDoc, terminate } from 'firebase/firestore'
import { db } from '../src/firebase.js'

const newGuides = [
  {
    id: 'pokemon-black-video',
    game: 'Pokémon Black and White',
    title: 'Pokémon Black Full Video Walkthrough',
    type: 'video',
    author: 'xspinchx',
    videoId: 'URo4ZuxdBm8',
    summary: 'Nintendo DS. A complete playthrough of Pokémon Black from start to finish.',
    sections: [
      {
        heading: 'Choose your starter',
        text: 'Your journey begins in Nuvema Town, where you pick Snivy, Tepig, or Oshawott.',
      },
      {
        heading: 'Visit Black City',
        text: 'Black City is only in Pokémon Black. It has its own shops and trainers to battle.',
      },
      {
        heading: 'Meet Reshiram',
        text: 'Reshiram, the legendary on the Black box, plays a key part in the story\'s finale.',
      },
    ],
  },
  {
    id: 'pokemon-white-video',
    game: 'Pokémon Black and White',
    title: 'Pokémon White Full Video Walkthrough',
    type: 'video',
    author: 'xspinchx',
    videoId: 'mTNaHiiuQI8',
    summary: 'Nintendo DS. A complete, no-commentary playthrough of Pokémon White.',
    sections: [
      {
        heading: 'Choose your starter',
        text: 'Your journey begins in Nuvema Town, where you pick Snivy, Tepig, or Oshawott.',
      },
      {
        heading: 'Explore White Forest',
        text: 'White Forest is only in Pokémon White. It is home to wild Pokémon you won\'t find in Black.',
      },
      {
        heading: 'Meet Zekrom',
        text: 'Zekrom, the legendary on the White box, plays a key part in the story\'s finale.',
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

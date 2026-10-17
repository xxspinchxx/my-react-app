// Adds new guides to Firestore with today's date as createdAt.
import { doc, serverTimestamp, setDoc, terminate } from 'firebase/firestore'
import { db } from '../src/firebase.js'

const newGuides = [
  {
    id: 'elden-ring-video-part-1',
    game: 'Elden Ring',
    title: 'Elden Ring Video Walkthrough Part 1: Getting Started',
    type: 'video',
    author: 'FightinCowboy',
    videoId: 'PN7YFKHOR9Y',
    summary: 'The first part of a full series covering everything in the Lands Between.',
    sections: [
      {
        heading: 'Create your Tarnished',
        text: 'Pick a starting class and keepsake, then work through the opening tutorial area.',
      },
      {
        heading: 'Take your first steps in Limgrave',
        text: 'Reach the first Site of Grace and start exploring the open world.',
      },
      {
        heading: 'Keep going with the series',
        text: 'This is Part 1. FightinCowboy continues the walkthrough in later videos on his channel.',
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

// One-time script: copies the guides from src/data/guides.js into Firestore.
import { doc, setDoc, terminate } from 'firebase/firestore'
import { db } from '../src/firebase.js'
import { guides } from '../src/data/guides.js'

for (const guide of guides) {
  const { id, ...data } = guide
  await setDoc(doc(db, 'guides', id), data)
  console.log(`Saved ${id}`)
}

await terminate(db)
console.log('Done!')

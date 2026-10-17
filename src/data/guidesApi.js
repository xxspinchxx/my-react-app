import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

// Several parts of the page need the guide list, so it's fetched once and shared
let guidesRequest = null

// Get every guide, sorted by game name
export function fetchGuides() {
  if (!guidesRequest) {
    guidesRequest = getDocs(query(collection(db, 'guides'), orderBy('game')))
      .then((snapshot) => snapshot.docs.map((d) => ({ id: d.id, ...d.data() })))
      .catch((err) => {
        guidesRequest = null // let the next attempt try again
        throw err
      })
  }
  return guidesRequest
}

// Get one guide by its id, or null if it doesn't exist
export async function fetchGuide(id) {
  const snapshot = await getDoc(doc(db, 'guides', id))
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null
}

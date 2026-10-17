import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

// Get every guide, sorted by game name
export async function fetchGuides() {
  const snapshot = await getDocs(query(collection(db, 'guides'), orderBy('game')))
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

// Get one guide by its id, or null if it doesn't exist
export async function fetchGuide(id) {
  const snapshot = await getDoc(doc(db, 'guides', id))
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null
}

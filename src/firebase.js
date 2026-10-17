import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyABojZVAD6H3FU9Dhlj9vQ1IenUcHkRNzY',
  authDomain: 'my-react-app-11e5f.firebaseapp.com',
  projectId: 'my-react-app-11e5f',
  storageBucket: 'my-react-app-11e5f.firebasestorage.app',
  messagingSenderId: '480036044435',
  appId: '1:480036044435:web:928db3dcbb7609fcfd5766',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

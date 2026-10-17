import { useState } from 'react'
import { useAuth } from '../auth/authContext'
import './UserMenu.css'

export default function UserMenu() {
  const { user, loading, signIn, signOut } = useAuth()
  const [error, setError] = useState(null)

  async function handleSignIn() {
    setError(null)
    try {
      await signIn()
    } catch (err) {
      // Closing the popup isn't really an error, so stay quiet about it
      if (err.code !== 'auth/popup-closed-by-user') {
        setError('Sign-in failed. Please try again.')
      }
    }
  }

  // Firebase is still checking whether you're signed in
  if (loading) return null

  if (!user) {
    return (
      <div className="user-menu">
        <button type="button" className="button" onClick={handleSignIn}>
          Sign in with Google
        </button>
        {error && <p className="auth-error">{error}</p>}
      </div>
    )
  }

  return (
    <div className="user-menu">
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt=""
          className="avatar"
          referrerPolicy="no-referrer"
        />
      )}
      <span className="user-name">{user.displayName}</span>
      <button type="button" className="button button-secondary" onClick={signOut}>
        Sign out
      </button>
    </div>
  )
}

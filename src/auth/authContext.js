import { createContext, useContext } from 'react'

// Holds the signed-in user so any component can read it
export const AuthContext = createContext(null)

// Use this in a component: const { user, signIn, signOut } = useAuth()
export function useAuth() {
  return useContext(AuthContext)
}

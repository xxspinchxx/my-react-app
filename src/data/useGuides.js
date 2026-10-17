import { useEffect, useState } from 'react'
import { fetchGuides } from './guidesApi'

// Use this in a component: const { guides, error } = useGuides()
// guides is null while loading, then an array.
export function useGuides() {
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    fetchGuides()
      .then((result) => {
        if (active) setGuides(result)
      })
      .catch((err) => {
        if (active) setError(err.message)
      })
    return () => {
      active = false
    }
  }, [])

  return { guides, error }
}

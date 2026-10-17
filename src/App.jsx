import { Link, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import GuidePage from './pages/GuidePage'
import GamesPage from './pages/GamesPage'
import SubmitPage from './pages/SubmitPage'
import SiteHeader from './components/SiteHeader'

function App() {
  return (
    <main className="page">
      <SiteHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guides/:guideId" element={<GuidePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route
          path="*"
          element={<p>Page not found. <Link to="/">Go home</Link></p>}
        />
      </Routes>
    </main>
  )
}

export default App

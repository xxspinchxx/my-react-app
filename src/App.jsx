import { Link, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import GuidePage from './pages/GuidePage'
import UserMenu from './components/UserMenu'

function App() {
  return (
    <main className="page">
      <header className="site-header">
        <div className="site-header-top">
          <h1>
            <Link to="/">Walkthrough Hub</Link>
          </h1>
          <UserMenu />
        </div>
        <p>Game guides, video walkthroughs, and the best tutorials from around the web.</p>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guides/:guideId" element={<GuidePage />} />
        <Route
          path="*"
          element={<p>Page not found. <Link to="/">Go home</Link></p>}
        />
      </Routes>
    </main>
  )
}

export default App

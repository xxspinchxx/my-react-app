import { Link, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import GuidePage from './pages/GuidePage'
import SiteHeader from './components/SiteHeader'

function App() {
  return (
    <main className="page">
      <SiteHeader />

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

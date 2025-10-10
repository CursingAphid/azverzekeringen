import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PrivacyVerklaring from './components/PrivacyVerklaring'
import Contact from './components/Contact'
import Links from './components/Links'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyVerklaring />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  )
}

export default App
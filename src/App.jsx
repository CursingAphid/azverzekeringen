import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PrivacyVerklaring from './components/PrivacyVerklaring'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyVerklaring />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
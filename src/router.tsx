import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import WeddingCardHaiTrang from './modules/couple1/pages/WeddingCard'
import WeddingCardClientServer from './modules/couple2/pages/WeddingCard'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hai-trang" element={<WeddingCardHaiTrang />} />
        <Route path="/client-server" element={<WeddingCardClientServer />} />
      </Routes>
    </Router>
  )
}

export default AppRouter

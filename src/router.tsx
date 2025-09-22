import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@modules/home/Home'
import WeddingCard1 from '@modules/couple1/pages/WeddingCard'
import WeddingCard2 from '@modules/couple2/pages/WeddingCard'

export default function Router() {
  return (
    <BrowserRouter basename="/WeddingCards">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hai-trang" element={<WeddingCard1 />} />
        <Route path="/client-server" element={<WeddingCard2 />} />
      </Routes>
    </BrowserRouter>
  )
}

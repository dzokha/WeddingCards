import { useNavigate } from 'react-router-dom'
import '@styles/base.css'
import geneLogo from '@assets/images/geneai.png'
import fishLogo from '@assets/images/shopfish.png'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <header>
        <h1>Wedding Cards</h1>
      </header>
      <main>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
          <div onClick={() => navigate('/hai-trang')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <img src={geneLogo} alt="Couple 1" style={{ width: 80 }} />
            <p>Couple 1</p>
          </div>
          <div onClick={() => navigate('/client-server')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <img src={fishLogo} alt="Couple 2" style={{ width: 80 }} />
            <p>Couple 2</p>
          </div>
        </div>
      </main>
      <footer>
        <small>2025 - Dzokha</small>
      </footer>
    </div>
  )
}

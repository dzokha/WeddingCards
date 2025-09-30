import { BrowserRouter } from 'react-router-dom';
import Router from '@app/router'
import '@styles/base.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

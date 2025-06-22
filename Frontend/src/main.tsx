import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'
import { Layout } from './styled.tsx'
import { Navigation } from './components/Navigation/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Navigation />
        <Router />
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)

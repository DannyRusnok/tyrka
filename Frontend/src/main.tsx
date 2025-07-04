import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'
import { Layout, globalStyles } from './GlobalStyles.tsx'
import { Navigation } from './components/Navigation/index.tsx'

// Inject global styles
// eslint-disable-next-line no-unused-expressions
globalStyles;

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

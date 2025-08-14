import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './Router.tsx'
import { ScrollProvider,  Wishlists, AddToCart, SearchProvider} from './ScrollContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProvider>
      <Wishlists>
        <AddToCart>
          <SearchProvider>
    <Router>
    <App />
    </Router>
    </SearchProvider>
    </AddToCart>
    </Wishlists>
    </ScrollProvider>
  </StrictMode>
);
